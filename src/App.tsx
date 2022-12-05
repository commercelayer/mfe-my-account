import { Router, Route, Switch, useRouter, useLocation, useRoute } from "wouter"
import { lazy, Suspense } from "react"

import MyAccountContainer from "#components/composite/MyAccountContainer"
import Skeleton from "#components/composite/Skeleton"
import Invalid from "#components/composite/Invalid"

import { SettingsProvider } from "#providers/SettingsProvider"

const LazyOrderPage = lazy(() => import("#pages/OrderPage"))
const LazyOrdersPage = lazy(() => import("#pages/OrdersPage"))
const LazyParcelPage = lazy(() => import("#pages/ParcelPage"))
const LazyAddressesPage = lazy(() => import("#pages/AddressesPage"))

const {PUBLIC_BASE_PATH} = import.meta.env

function App(): JSX.Element {
  const [location, setLocation] = useLocation()

  const [match, params] = useRoute(`${PUBLIC_BASE_PATH}/orders/:orderId/:subPaths*`);
  const orderIdForSettings = params?.orderId

  return (
    <>
      <Router base={PUBLIC_BASE_PATH}>
        <SettingsProvider orderId={orderIdForSettings}>
          {({ settings, isLoading }) => {
            return isLoading ? (
              <Skeleton />
            ) : !settings.isValid ? (
              <Invalid />
            ) : (
              <>
                <MyAccountContainer settings={settings}>
                  <Switch>
                    <Route path={"/404"}>
                      <Invalid />
                    </Route>
                    <Route path={"/"}>
                      {() => {
                        const router = useRouter()
                        setLocation(`${router.base}/orders?accessToken=${settings.accessToken}`)
                        return <Skeleton />
                      }}
                    </Route>
                    <Route path={"/orders"}>
                      <Suspense fallback={<></>}>
                        <LazyOrdersPage />
                      </Suspense>
                    </Route>
                    <Route path={"/orders/:orderId"}>
                      <Suspense fallback={<></>}>
                        <LazyOrderPage />
                      </Suspense>
                    </Route>
                    <Route path={"/orders/:orderId/parcels"}>
                      {(params) => {
                        const router = useRouter()
                        setLocation(`${router.base}/orders/${params.orderId}?accessToken=${settings.accessToken}`)
                        return <Skeleton />
                      }}
                    </Route>
                    <Route path={"/orders/:orderId/parcels/:parcelId"}>
                      {(params) => (
                        <Suspense fallback={<></>}>
                          <LazyParcelPage settings={settings} orderId={params.orderId} parcelId={params.parcelId} />
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
              </>
            )
          }}
        </SettingsProvider>
      </Router>
    </>
  )
}

export default App
