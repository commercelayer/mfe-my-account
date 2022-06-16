import { test, expect } from "../fixtures/tokenizedPage"

test("should land to my account home (orders page) with valid token", async ({ ordersPage }) => {
  await ordersPage.checkOrdersTitle("My orders")
})