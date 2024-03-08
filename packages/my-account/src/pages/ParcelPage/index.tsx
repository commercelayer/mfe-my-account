import { OrderContainer } from "@commercelayer/react-components/orders/OrderContainer"
import { ParcelField } from "@commercelayer/react-components/parcels/ParcelField"
import { Parcels } from "@commercelayer/react-components/parcels/Parcels"
import { Shipment } from "@commercelayer/react-components/shipments/Shipment"
import { ShipmentsContainer } from "@commercelayer/react-components/shipments/ShipmentsContainer"
import { CaretLeft } from "phosphor-react"
import { useContext } from "react"
import { useTranslation } from "react-i18next"
import { Link, Redirect } from "wouter"

import {
  ParcelContainer,
  ParcelHeader,
  ParcelHeaderTop,
  BackToOrder,
  Title,
  ParcelHeaderMain,
  ParcelHeaderCol,
  ParcelHeaderLabel,
  ParcelHeaderValue,
  TabsWrapper,
} from "./styled"

import OrderParcelHistory from "#components/composite/OrderParcel/OrderParcelHistory"
import { SkeletonMainParcel } from "#components/composite/Skeleton/Main"
import { ScrollToTop } from "#components/ui/ScrollToTop"
import { AppContext } from "#providers/AppProvider"
import { OrderProvider } from "#providers/OrderProvider"

interface Props {
  orderId: string
  parcelId: string
}

function ParcelPage({ orderId, parcelId }: Props): JSX.Element {
  const ctx = useContext(AppContext)
  const accessToken = ctx?.accessToken

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
            <Redirect to={`/orders?accessToken=${accessToken}`} />
          ) : (
            <OrderContainer orderId={orderId}>
              <ShipmentsContainer>
                <Shipment loader={<SkeletonMainParcel />}>
                  <Parcels filterBy={[parcelId]}>
                    <ParcelContainer>
                      <ParcelHeader>
                        <ParcelHeaderTop>
                          <Link
                            href={`/orders/${orderId}?accessToken=${accessToken}`}
                          >
                            <BackToOrder>
                              <CaretLeft weight="regular" className="w-7 h-7" />
                            </BackToOrder>
                          </Link>
                          <Title>
                            {t("order.shipments.parcelDetail.title")}{" "}
                            <ParcelField attribute="number" tagElement="span" />
                          </Title>
                        </ParcelHeaderTop>
                        <ParcelHeaderMain className="mt-10">
                          <ParcelHeaderCol>
                            <ParcelHeaderLabel>
                              {t("order.shipments.parcelDetail.trackingCode")}
                            </ParcelHeaderLabel>
                            <ParcelHeaderValue>
                              <ParcelField
                                attribute="tracking_number"
                                tagElement="span"
                              />
                            </ParcelHeaderValue>
                          </ParcelHeaderCol>
                        </ParcelHeaderMain>
                      </ParcelHeader>
                      <TabsWrapper>
                        <OrderParcelHistory />
                      </TabsWrapper>
                    </ParcelContainer>
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
