import { lazy, Suspense } from "react"
import { Router, Route, Switch, Redirect } from "wouter"

import Invalid from "#components/composite/Invalid"
import MyAccountContainer from "#components/composite/MyAccountContainer"
import Skeleton from "#components/composite/Skeleton"
import { SettingsProvider } from "#providers/SettingsProvider"

const LazyOrderPage = lazy(() => import("#pages/OrderPage"))
const LazyOrdersPage = lazy(() => import("#pages/OrdersPage"))
const LazyParcelPage = lazy(() => import("#pages/ParcelPage"))
const LazyAddressesPage = lazy(() => import("#pages/AddressesPage"))

const basePath =
  import.meta.env.PUBLIC_PROJECT_PATH != null
    ? `/${import.meta.env.PUBLIC_PROJECT_PATH}`
    : undefined

function App(): JSX.Element {
  return (
    <>
      <Router base={basePath}>
        <SettingsProvider>
          {({ settings, isLoading }) => {
            return isLoading ? (
              <Skeleton />
            ) : !settings.isValid ? (
              <Invalid />
            ) : (
              <MyAccountContainer settings={settings}>
                <Switch>
                  <Route path={"/404"}>
                    <Invalid />
                  </Route>
                  <Route path={"/"}>
                    <Redirect
                      to={`/orders?accessToken=${settings.accessToken}`}
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
                        to={`/orders/${params.orderId}?accessToken=${settings.accessToken}`}
                      />
                    )}
                  </Route>
                  <Route path={"/orders/:orderId/parcels/:parcelId"}>
                    {(params) => (
                      <Suspense fallback={<></>}>
                        <LazyParcelPage
                          settings={settings}
                          orderId={params.orderId}
                          parcelId={params.parcelId}
                        />
                      </Suspense>
                    )}
                  </Route>
                  <Route path={"/addresses"}>
                    <Suspense fallback={<></>}>
                      <LazyAddressesPage />
                    </Suspense>
                  </Route>
                  <Route>
                    <Invalid />
                  </Route>
                </Switch>
              </MyAccountContainer>
            )
          }}
        </SettingsProvider>
      </Router>
    </>
  )
}

export default App
