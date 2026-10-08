import { expect } from "@playwright/test"

import { test } from "../fixtures/tokenizedPage"

/**
 * A settled orders page must stop talking to the API.
 *
 * react-components 5.0.x refetches on a loop: OrderList's effect depends on
 * getCustomerOrders, whose identity the customer context rebuilds on every
 * landed fetch, so each response arms the next request. The rate is not a
 * timer — it is the API round-trip time, roughly one request per second.
 *
 * StrictMode double-invokes effects in dev, so a healthy page may issue the
 * initial fetch twice; anything beyond that is the loop. Measured against
 * published 5.0.3: 73 requests in 10s. Against a fixed build: 2.
 *
 * The endpoint is nested — /api/customers/<id>/orders, not /api/orders — and a
 * filter that misses it makes this test pass by counting nothing.
 *
 * On a looping build this usually fails at navigation rather than on the
 * assertion: the fixture waits for networkidle, and a page that refetches every
 * round-trip never gets there. A 60s goto timeout here is the same diagnosis.
 */
const SETTLE_MS = 8_000
const MAX_EXPECTED = 3

test.describe("Orders page refetching", () => {
  test("does not keep refetching orders once the page has settled", async ({
    ordersPage,
  }) => {
    const { page } = ordersPage
    await ordersPage.checkPageTitle("My orders")

    const calls: string[] = []
    page.on("request", (request) => {
      const url = request.url()
      if (/\/api\/.*\/(orders|order_subscriptions)(?:\?|$)/.test(url)) {
        calls.push(url)
      }
    })

    await page.waitForTimeout(SETTLE_MS)

    // Surface the real number: "0 vs 8" and "0 vs 2" are different diagnoses.
    expect(
      calls.length,
      `orders/order_subscriptions requests in ${SETTLE_MS}ms after the page settled:\n` +
        calls.map((u, i) => `  ${i + 1}. ${u}`).join("\n"),
    ).toBeLessThanOrEqual(MAX_EXPECTED)
  })
})
