import path from "path"

export type AppRoute = keyof typeof appRoutes
type RouteParams = { accessToken: string, lang: string }


// Object to be used as source of truth to handel application routes
// each page should correspond to a key and each key should have
// a `path` property to be used as patter matching in <Route path> component
// and `makePath` method to be used to generate the path used in navigation and links
export const appRoutes = {
  orders: {
    path: "/orders",
    makePath: ({ accessToken, lang }: RouteParams) => `/orders?accessToken=${accessToken}&lang=${lang}`,
  },
  order: {
    path: "/orders/:orderId",
    makePath: ({ orderId, accessToken, lang }: RouteParams & { orderId: string }) => `/orders/${orderId}?accessToken=${accessToken}&lang=${lang}`,
  },
  parcel: {
    path: "/orders/:orderId/parcels/:parcelId",
    makePath: ({ orderId, parcelId, accessToken, lang }: RouteParams & { orderId: string, parcelId: string }) => `/orders/${orderId}/parcels/${parcelId}?accessToken=${accessToken}&lang=${lang}`,
  },
  subscriptions: {
    path: "/subscriptions",
    makePath: ({ accessToken, lang }: RouteParams) => `/subscriptions?accessToken=${accessToken}&lang=${lang}`,
  },
  subscription: {
    path: "/subscriptions/:subscriptionId",
    makePath: ({ subscriptionId, accessToken, lang }: RouteParams & { subscriptionId: string }) => `/subscriptions/${subscriptionId}?accessToken=${accessToken}&lang=${lang}`,
  },
  addresses: {
    path: "/addresses",
    makePath: ({ accessToken, lang }: RouteParams) => `/addresses?accessToken=${accessToken}&lang=${lang}`,
  },
  newAddress: {
    path: "/addresses/new",
    makePath: ({ accessToken, lang }: RouteParams) => `/addresses/new?accessToken=${accessToken}&lang=${lang}`,
  },
  editAddress: {
    path: "/addresses/:addressId/edit",
    makePath: ({ addressId, accessToken, lang }: RouteParams & { addressId: string }) => `/addresses/${addressId}/edit?accessToken=${accessToken}&lang=${lang}`,
  },
  wallet: {
    path: "/wallet",
    makePath: ({ accessToken, lang }: RouteParams) => `/wallet?accessToken=${accessToken}&lang=${lang}`,
  },
}
