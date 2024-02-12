import { faker } from "@faker-js/faker"

import { test } from "../fixtures/tokenizedPage"

test.describe("Empty orders page", () => {
  const customerEmail = faker.internet.email().toLocaleLowerCase()
  const customerPassword = faker.internet.password()
  test.use({
    defaultParams: {
      customer: {
        email: customerEmail,
        password: customerPassword,
      },
    },
  })

  test("should land to my account orders page with valid token", async ({
    ordersPage,
  }) => {
    await ordersPage.checkPageTitle("My orders")
  })
})
