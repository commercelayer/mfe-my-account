import { OrderContainer } from "@commercelayer/react-components/orders/OrderContainer"
import { ParcelField } from "@commercelayer/react-components/parcels/ParcelField"
import { Parcels } from "@commercelayer/react-components/parcels/Parcels"
import { Shipment } from "@commercelayer/react-components/shipments/Shipment"
import { ShipmentsContainer } from "@commercelayer/react-components/shipments/ShipmentsContainer"
import { CaretLeft } from "phosphor-react"
import { useContext } from "react"
import { useTranslation } from "react-i18next"
import { Link, Redirect } from "wouter"

import OrderParcelHistory from "#components/composite/OrderParcelHistory"
import { SkeletonMainParcel } from "#components/ui/Skeleton/Main"
import { ScrollToTop } from "#components/ui/ScrollToTop"
import { AppContext } from "#providers/AppProvider"
import { OrderProvider } from "#providers/OrderProvider"
import { appRoutes } from "#data/routes"
import { useSettings } from "#providers/SettingsProvider"

interface Props {
  orderId: string
  parcelId: string
}

function ParcelPage({ orderId, parcelId }: Props): JSX.Element {
  const ctx = useContext(AppContext)
  const accessToken = ctx?.accessToken
  const { settings } = useSettings()

  const { t } = useTranslation()

  return (
    <OrderProvider
      orderId={orderId}
      accessToken={accessToken as string}
      domain={ctx?.domain as string}
    >
      {({ isInvalid }) => (
        <>
          {isInvalid ? (
            <Redirect to={appRoutes.orders.makePath({
              accessToken: accessToken ?? '',
              lang: settings.language,
              returnUrl: settings.returnUrl
            })} />
          ) : (
            <OrderContainer orderId={orderId}>
              <ShipmentsContainer>
                <Shipment loader={<SkeletonMainParcel />}>
                  <Parcels filterBy={[parcelId]}>
                    <div>
                      <div className="mt-3">
                        <div className="flex items-start content-start">
                          <Link
                            href={appRoutes.subscription.makePath({
                              subscriptionId: orderId ?? "",
                              accessToken: accessToken ?? '',
                              lang: settings.language,
                              returnUrl: settings.returnUrl
                            })}
                          >
                            <div className="flex-none rounded-full border border-gray-300 p-1 hover:bg-gray-300 cursor-pointer">
                              <CaretLeft weight="regular" className="w-7 h-7" />
                            </div>
                          </Link>
                          <h2 className="ml-4 p-1 text-lg font-medium">
                            {t("order.shipments.parcelDetail.title")}{" "}
                            <ParcelField attribute="number" tagElement="span" />
                          </h2>
                        </div>
                        <div className="flex flex-auto justify-between gap-4 md:pl-12 mt-10">
                          <div>
                            <label className="block uppercase text-xs text-gray-300 font-bold">
                              {t("order.shipments.parcelDetail.trackingCode")}
                            </label>
                            <span className="block text-sm font-bold">
                              <ParcelField
                                attribute="tracking_number"
                                tagElement="span"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-12 md:pl-12">
                        <OrderParcelHistory />
                      </div>
                    </div>
                  </Parcels>
                </Shipment>
              </ShipmentsContainer>
              <ScrollToTop />
            </OrderContainer>
          )}
        </>
      )}
    </OrderProvider>
  )
}

export default ParcelPage
