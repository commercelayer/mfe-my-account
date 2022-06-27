import { Page, expect } from "@playwright/test"

interface GoToProps {
  pageUrl: string,
  token: string
}

interface AttributesProps {
  organization?: object
}

export class MyAccountPage {
  readonly page: Page
  readonly attributes?: AttributesProps

  constructor(page: Page, attributes?: AttributesProps) {
    this.page = page

    this.attributes = attributes || {}
  }

  async goto({ pageUrl, token }: GoToProps) {
    const url = `${pageUrl}?accessToken=${token}`

    await this.page.route("**/api/settings**", async (route) => {
      // Fetch original response.
      const response = await this.page.request.fetch(route.request())

      // // Add a prefix to the title.
      const body = await response.json()
      // // body = body.replace('<title>', '<title>My prefix:');
      route.fulfill({
        // Pass all fields from the response.
        response,
        // Override response body.
        body: JSON.stringify({
          ...body,
          ...this.attributes?.organization,
        }),
      })
    })

    await this.page.goto(`${url}`, {
      waitUntil: "networkidle",
    })
  }

  async checkPageTitle(text: string) {
    await expect(this.page.locator(`text=${text}`)).toBeVisible()
  }
}