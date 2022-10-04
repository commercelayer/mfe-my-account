import { faker } from "@faker-js/faker"

import { test } from "../fixtures/tokenizedPage"

import { euAddress, euAddress2, euAddress3, euAddress4 } from "utils/addresses"

test.describe("Empty addresses page", () => {
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

  test("Create, edit and delete an address", async ({ addressesPage }) => {
    await addressesPage.checkPageTitle("My addresses")

    await addressesPage.createAddress(euAddress)

    await addressesPage.countVisibleAddresses(1)

    await addressesPage.editNthAddress({ index: 1, address: euAddress2 })

    await addressesPage.countVisibleAddresses(1)

    await addressesPage.deleteNthAddress(1)

    await addressesPage.countVisibleAddresses(0)
  })
})

test.describe("Addresses page with 1 address", () => {
  const customerEmail = faker.internet.email().toLocaleLowerCase()
  const customerPassword = faker.internet.password()
  test.use({
    defaultParams: {
      customer: {
        email: customerEmail,
        password: customerPassword,
      },
      customerAddresses: [euAddress],
    },
  })

  test("Create, edit and delete a second address", async ({
    addressesPage,
  }) => {
    await addressesPage.checkPageTitle("My addresses")

    await addressesPage.createAddress(euAddress2)

    await addressesPage.countVisibleAddresses(2)

    await addressesPage.editNthAddress({ index: 2, address: euAddress3 })

    await addressesPage.countVisibleAddresses(2)

    await addressesPage.deleteNthAddress(2)

    await addressesPage.countVisibleAddresses(1)
  })
})

test.describe("Addresses page with 2 address", () => {
  const customerEmail = faker.internet.email().toLocaleLowerCase()
  const customerPassword = faker.internet.password()
  test.use({
    defaultParams: {
      customer: {
        email: customerEmail,
        password: customerPassword,
      },
      customerAddresses: [euAddress, euAddress2],
    },
  })

  test("Create, edit and delete a third address", async ({ addressesPage }) => {
    await addressesPage.checkPageTitle("My addresses")

    await addressesPage.createAddress(euAddress3)

    await addressesPage.countVisibleAddresses(3)

    await addressesPage.editNthAddress({ index: 3, address: euAddress4 })

    await addressesPage.countVisibleAddresses(3)

    await addressesPage.deleteNthAddress(3)

    await addressesPage.countVisibleAddresses(2)
  })
})
