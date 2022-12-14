import { test, expect } from "../fixtures/tokenizedPage"

test("should land to my account orders page with valid token", async ({ ordersPage }) => {
  await ordersPage.checkPageTitle("My orders")
})