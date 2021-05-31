declare global {
  namespace Cypress {
    interface Cypress {
      env(key: "ACCESS_TOKEN"): string
      env(key: "BASE_URL"): string
      env(key: "CLIENT_ID"): string
      env(key: "SCOPE"): string
      env(key: "USERNAME"): string
      env(key: "PASSWORD"): string
      env(key: "RECORD"): boolean
    }
    interface Chainable<Subject> {
      dataCy(attribute: string): Chainable<Subject>
    }
  }
}

export {}
