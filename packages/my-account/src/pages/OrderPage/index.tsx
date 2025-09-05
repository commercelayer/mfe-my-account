import { OrderContainer } from "@commercelayer/react-components/orders/OrderContainer"
import { OrderNumber } from "@commercelayer/react-components/orders/OrderNumber"
import { useContext } from "react"
import { Trans } from "react-i18next"
import { Redirect } from "wouter"

import OrderAccordion from "#components/composite/Order/OrderAccordion"
import OrderDate from "#components/composite/Order/OrderDate"
import type { OrderStatus } from "#components/composite/Order/OrderStatusChip"
import OrderStatusChip from "#components/composite/Order/OrderStatusChip"
import { SkeletonMainOrder } from "#components/composite/Skeleton/Main"
import { ScrollToTop } from "#components/ui/ScrollToTop"
import { AppContext } from "#providers/AppProvider"
import { OrderProvider } from "#providers/OrderProvider"
import { appRoutes } from "#data/routes"
import { useSettings } from "#providers/SettingsProvider"

interface OrderPageProps {
  orderId: string
}

function OrderPage({ orderId }: OrderPageProps): JSX.Element {
  const ctx = useContext(AppContext)
  const { settings } = useSettings()
  const accessToken = ctx?.accessToken

  return (
    <OrderProvider
      orderId={orderId}
      accessToken={accessToken as string}
      domain={ctx?.domain as string}
    >
      {({ isInvalid, isLoading, order }) => (
        <>
          {isInvalid ? (
            <Redirect to={appRoutes.orders.makePath({
              accessToken: accessToken ?? '',
              lang: settings.language,
              returnUrl: settings.returnUrl
            })} />
          ) : (
            <OrderContainer orderId={orderId}>
              <SkeletonMainOrder visible={isLoading} />
              <div className={isLoading ? "hidden" : ""}>
                <div className="flex justify-between mt-3">
                  <h2 className="block text-lg font-medium">
                    <Trans i18nKey="order.title">
                      <OrderNumber />
                    </Trans>
                  </h2>
                  <OrderDate placed_at={order?.placed_at} />
                  <OrderStatusChip status={order?.status as OrderStatus} />
                </div>
                <div className="px-5 w-full md:(px-0)">
                  <OrderAccordion />
                </div>
              </div>
              <ScrollToTop />
            </OrderContainer>
          )}
        </>
      )}
    </OrderProvider>
  )
}

export default OrderPage
