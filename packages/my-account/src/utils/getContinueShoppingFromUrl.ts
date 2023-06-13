/**
 * @returns the value of `continueShopping` query string parameter or `undefined` if it's not present.
 */
export const getContinueShoppingFromUrl = () => {
  if (typeof window !== "undefined") {
    const params = new URLSearchParams(window.location.search)
    return params.get("continueShopping")
  }
}
