import { isGuest } from "#utils/isGuest"

const jwtSalesChannelOrgAcme =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdhbml6YXRpb24iOnsiaWQiOiJhYmMxMjM0Iiwic2x1ZyI6ImFjbWUifSwiYXBwbGljYXRpb24iOnsiaWQiOiJiY2Q0NDIxIiwia2luZCI6InNhbGVzX2NoYW5uZWwiLCJwdWJsaWMiOnRydWV9LCJ0ZXN0Ijp0cnVlLCJleHAiOjE2NTI3OTUxMDIsInJhbmQiOjAuMzE0NTUwMDUwMTg4ODYzOH0.mX4A08-f_vdab6_dDpA1eDdGri91kR0erP8X7obZr1M"

describe("Check if current accessToken is not related to a customer", () => {
  const { location } = window
  beforeAll(function clearLocation() {
    delete (window as any).location
    window.location = {
      ...location,
      href: "http://domain.com",
      // @ts-expect-error window.location.search broken type https://github.com/microsoft/TypeScript/issues/61335
      search: "",
    }
  })
  afterAll(function resetLocation() {
    (window as any).location = location
  })

  test("accessToken is in URL query string", () => {
    window.location.search = `?accessToken=${jwtSalesChannelOrgAcme}`
    expect(isGuest()).toBe(true)
  })
})
