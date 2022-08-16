import { test, expect } from "../fixtures/tokenizedPage"

test("should land to my account addresses page with valid token", async ({ addressesPage }) => {
  await addressesPage.checkPageTitle("My addresses")
})