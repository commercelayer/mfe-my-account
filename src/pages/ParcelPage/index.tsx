import { OrderContainer } from "@commercelayer/react-components/orders/OrderContainer"
import { ParcelField } from "@commercelayer/react-components/parcels/ParcelField"
import { Parcels } from "@commercelayer/react-components/parcels/Parcels"
import { Shipment } from "@commercelayer/react-components/shipments/Shipment"
import { ShipmentsContainer } from "@commercelayer/react-components/shipments/ShipmentsContainer"
import type { Settings } from "HostedApp"
import { CaretLeft } from "phosphor-react"
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
import { OrderProvider } from "#providers/OrderProvider"

interface Props {
  settings: Settings
  orderId: string
  parcelId: string
}

function ParcelPage({ settings, orderId, parcelId }: Props): JSX.Element {
  const { t } = useTranslation()

  return (
    <OrderProvider orderId={orderId} accessToken={settings.accessToken}>
      {({ invalidOrder }) => {
        if (invalidOrder) {
          return <Redirect to={`/orders?accessToken=${settings.accessToken}`} />
        } else {
          return (
            <OrderContainer orderId={orderId}>
              <ShipmentsContainer>
                <Shipment loader={<SkeletonMainParcel />}>
                  <Parcels filterBy={[parcelId]}>
                    <ParcelContainer>
                      <ParcelHeader>
                        <ParcelHeaderTop>
                          <Link
                            href={`/orders/${orderId}?accessToken=${settings.accessToken}`}
                          >
                            <BackToOrder>
                              <CaretLeft weight="regular" className="w-7 h-7" />
                            </BackToOrder>
                          </Link>
                          <Title>
                            {t("order.shipments.parcelDetail.title")}
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
            </OrderContainer>
          )
        }
      }}
    </OrderProvider>
  )
}

export default ParcelPage
