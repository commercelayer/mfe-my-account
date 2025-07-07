import { lazy, Suspense } from "react"
import { Router, Route, Switch, Redirect } from "wouter"

import Invalid from "#components/composite/Invalid"
import MyAccountContainer from "#components/composite/MyAccountContainer"
import Skeleton from "#components/composite/Skeleton"
import { appRoutes } from "#data/routes"
import { GTMProvider } from "#providers/GTMProvider"
import { SettingsProvider } from "#providers/SettingsProvider"

const LazyOrderPage = lazy(() => import("#pages/OrderPage"))
const LazyOrdersPage = lazy(() => import("#pages/OrdersPage"))
const LazySubscriptionsPage = lazy(() => import("#pages/SubscriptionsPage"))
const LazySubscriptionPage = lazy(() => import("#pages/SubscriptionPage"))
const LazyParcelPage = lazy(() => import("#pages/ParcelPage"))
const LazyAddressFormPage = lazy(() => import("#pages/AdddressFormPage"))
const LazyAddressesPage = lazy(() => import("#pages/AddressesPage"))
const LazyWalletPage = lazy(() => import("#pages/WalletPage"))

const basePath =
  import.meta.env.PUBLIC_PROJECT_PATH != null
    ? `/${import.meta.env.PUBLIC_PROJECT_PATH}`
    : undefined

function App(): JSX.Element {
  return (
    <>
      <Router base={basePath}>
        <SettingsProvider config={window.clAppConfig}>
          {({ settings, isLoading }) => {
            return isLoading ? (
              <Skeleton />
            ) : !settings.isValid ? (
              <Invalid />
            ) : (
              <MyAccountContainer
                settings={settings}
                config={window.clAppConfig}
              >
                <GTMProvider gtmId={settings.gtmId}>
                  <Switch>
                    <Route path={"/404"}>
                      <Invalid />
                    </Route>
                    <Route path={"/"}>
                      <Redirect
                        to={appRoutes.orders.makePath({
                          accessToken: settings.accessToken ?? '',
                          lang: settings.language,
                          returnUrl: settings.returnUrl
                        })}
                      />
                    </Route>
                    <Route path={"/orders"}>
                      <Suspense fallback={<></>}>
                        <LazyOrdersPage />
                      </Suspense>
                    </Route>
                    <Route path={"/orders/:orderId"}>
                      {(params) => (
                        <Suspense fallback={<></>}>
                          <LazyOrderPage orderId={params.orderId} />
                        </Suspense>
                      )}
                    </Route>
                    <Route path={"/orders/:orderId/parcels"}>
                      {(params) => (
                        <Redirect
                          to={appRoutes.orders.makePath({
                            accessToken: settings.accessToken ?? '',
                            lang: settings.language,
                            returnUrl: settings.returnUrl
                          })}
                        />
                      )}
                    </Route>
                    <Route path={"/orders/:orderId/parcels/:parcelId"}>
                      {(params) => (
                        <Suspense fallback={<></>}>
                          <LazyParcelPage
                            orderId={params.orderId}
                            parcelId={params.parcelId}
                          />
                        </Suspense>
                      )}
                    </Route>
                    <Route path={appRoutes.subscriptions.path}>
                      <Suspense fallback={<></>}>
                        <LazySubscriptionsPage />
                      </Suspense>
                    </Route>
                    <Route path={"/subscriptions/:subscriptionId"}>
                      {(params) => (
                        <Suspense fallback={<></>}>
                          <LazySubscriptionPage
                            subscriptionId={params.subscriptionId}
                          />
                        </Suspense>
                      )}
                    </Route>
                    <Route path={appRoutes.newAddress.path}>
                      <Suspense fallback={<></>}>
                        <LazyAddressFormPage />
                      </Suspense>
                    </Route>
                    <Route path={appRoutes.editAddress.path}>
                      <Suspense fallback={<></>}>
                        <LazyAddressFormPage />
                      </Suspense>
                    </Route>
                    <Route path={appRoutes.addresses.path}>
                      <Suspense fallback={<></>}>
                        <LazyAddressesPage />
                      </Suspense>
                    </Route>
                    <Route path={appRoutes.wallet.path}>
                      <Suspense fallback={<></>}>
                        <LazyWalletPage />
                      </Suspense>
                    </Route>
                    <Route>
                      <Invalid />
                    </Route>
                  </Switch>
                </GTMProvider>
              </MyAccountContainer>
            )
          }}
        </SettingsProvider>
      </Router>
    </>
  )
}

export default App
