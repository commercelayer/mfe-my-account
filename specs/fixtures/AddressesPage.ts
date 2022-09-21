import { Address } from "@commercelayer/sdk"
import { expect } from "@playwright/test"

import { MyAccountPage } from "./MyAccountPage"

export class AddressesPage extends MyAccountPage {
  readonly addressesCardSelector = "[data-test-id=addresses-wrapper] > div"

  async createAddress(address: Partial<Address>) {
    this.checkPageElement("[data-test-id=showNewAddress]")
    this.page.click("[data-test-id=showNewAddress]")

    await this.page
      .locator("text=New address")
      .waitFor({ state: "visible", timeout: 600 })

    await this.page
      .locator("input[id=billing_address_first_name]")
      .fill(address.first_name as string)

    await this.page
      .locator("input[id=billing_address_last_name]")
      .fill(address.last_name as string)

    await this.page
      .locator("input[id=billing_address_line_1]")
      .fill(address.line_1 as string)

    await this.page
      .locator("input[id=billing_address_city]")
      .fill(address.city as string)

    await this.page.selectOption(
      "select[name=billing_address_country_code]",
      address.country_code as string
    )

    await this.page
      .locator("input[id=billing_address_state_code]")
      .fill(address.state_code as string)

    await this.page
      .locator("input[id=billing_address_zip_code]")
      .fill(address.zip_code as string)

    await this.page
      .locator("input[id=billing_address_phone]")
      .fill(address.phone as string)

    this.checkPageElement("[data-test-id=saveAddress]")
    this.page.click("[data-test-id=saveAddress]")
  }

  async countVisibleAddresses(count: number) {
    const elements = this.page.locator(`${this.addressesCardSelector}`)
    await expect(elements).toHaveCount(count)
  }

  async editNthAddress(index: number, address: Partial<Address>) {
    const nthAddressEditButton = `${this.addressesCardSelector}:nth-child(${index}) >> .address-edit-button`
    this.checkPageElement(nthAddressEditButton)
    this.page.click(nthAddressEditButton)

    await this.page
      .locator("text=Edit my address")
      .waitFor({ state: "visible", timeout: 600 })

    await this.page
      .locator("input[id=billing_address_first_name]")
      .fill(address.first_name as string)

    await this.page
      .locator("input[id=billing_address_last_name]")
      .fill(address.last_name as string)

    await this.page
      .locator("input[id=billing_address_line_1]")
      .fill(address.line_1 as string)

    await this.page
      .locator("input[id=billing_address_city]")
      .fill(address.city as string)

    await this.page.selectOption(
      "select[name=billing_address_country_code]",
      address.country_code as string
    )

    await this.page
      .locator("input[id=billing_address_state_code]")
      .fill(address.state_code as string)

    await this.page
      .locator("input[id=billing_address_zip_code]")
      .fill(address.zip_code as string)

    await this.page
      .locator("input[id=billing_address_phone]")
      .fill(address.phone as string)

    this.checkPageElement("[data-test-id=saveAddress]")
    this.page.click("[data-test-id=saveAddress]")
  }

  async deleteNthAddress(index: number) {
    const nthAddressDeleteButton = `${this.addressesCardSelector}:nth-child(${index}) >> .address-delete-button`
    this.checkPageElement(nthAddressDeleteButton)
    this.page.click(nthAddressDeleteButton)

    const nthAddressConfirmDeleteButton = `${this.addressesCardSelector}:nth-child(${index}) >> .address-confirm-delete-button`
    this.checkPageElement(nthAddressConfirmDeleteButton)
    this.page.click(nthAddressConfirmDeleteButton)
  }
}
