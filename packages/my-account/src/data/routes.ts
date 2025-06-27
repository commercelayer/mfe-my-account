export type AppRoute = keyof typeof appRoutes
type RouteParams = { accessToken: string, lang: string, returnUrl?: string }

export const makeUrlParams = ({ accessToken, lang, returnUrl }: RouteParams): string => {
  const urlParams = `accessToken=${accessToken}&lang=${lang}`
  return urlParams + (returnUrl ? `&returnUrl=${encodeURIComponent(returnUrl)}` : "")
} 

// Object to be used as source of truth to handel application routes
// each page should correspond to a key and each key should have
// a `path` property to be used as patter matching in <Route path> component
// and `makePath` method to be used to generate the path used in navigation and links
export const appRoutes = {
  orders: {
    path: "/orders",
    makePath: ({ accessToken, lang, returnUrl }: RouteParams) => `/orders?${makeUrlParams({ accessToken, lang, returnUrl })}`,
  },
  order: {
    path: "/orders/:orderId",
    makePath: ({ orderId, accessToken, lang, returnUrl }: RouteParams & { orderId: string }) => `/orders/${orderId}?${makeUrlParams({ accessToken, lang, returnUrl })}`,
  },
  parcel: {
    path: "/orders/:orderId/parcels/:parcelId",
    makePath: ({ orderId, parcelId, accessToken, lang, returnUrl }: RouteParams & { orderId: string, parcelId: string }) => `/orders/${orderId}/parcels/${parcelId}?${makeUrlParams({ accessToken, lang, returnUrl })}`,
  },
  subscriptions: {
    path: "/subscriptions",
    makePath: ({ accessToken, lang, returnUrl }: RouteParams) => `/subscriptions?${makeUrlParams({ accessToken, lang, returnUrl })}`,
  },
  subscription: {
    path: "/subscriptions/:subscriptionId",
    makePath: ({ subscriptionId, accessToken, lang, returnUrl }: RouteParams & { subscriptionId: string }) => `/subscriptions/${subscriptionId}?${makeUrlParams({ accessToken, lang, returnUrl })}`,
  },
  addresses: {
    path: "/addresses",
    makePath: ({ accessToken, lang, returnUrl }: RouteParams) => `/addresses?${makeUrlParams({ accessToken, lang, returnUrl })}`,
  },
  newAddress: {
    path: "/addresses/new",
    makePath: ({ accessToken, lang, returnUrl }: RouteParams) => `/addresses/new?${makeUrlParams({ accessToken, lang, returnUrl })}`,
  },
  editAddress: {
    path: "/addresses/:addressId/edit",
    makePath: ({ addressId, accessToken, lang, returnUrl }: RouteParams & { addressId: string }) => `/addresses/${addressId}/edit?${makeUrlParams({ accessToken, lang, returnUrl })}`,
  },
  wallet: {
    path: "/wallet",
    makePath: ({ accessToken, lang, returnUrl }: RouteParams) => `/wallet?${makeUrlParams({ accessToken, lang, returnUrl })}`,
  },
}
