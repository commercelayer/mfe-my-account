import "./commands"

export const navbar: string[] = [
  "Profile",
  "Addresses",
  "Payments",
  "Orders",
  "Returns",
]

export const ACCESS_TOKEN = Cypress.env("ACCESS_TOKEN")
