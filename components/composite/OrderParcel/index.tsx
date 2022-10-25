import {
  OrderContainer,
  ShipmentsContainer,
  Shipment,
  Parcels,
  ParcelField,
} from "@commercelayer/react-components"
import type { Settings } from "HostedApp"
import Link from "next/link"
import { CaretLeft } from "phosphor-react"
import { useTranslation } from "react-i18next"

import OrderParcelHistory from "components/composite/OrderParcel/OrderParcelHistory"
import SkeletonMain from "components/composite/Skeleton/Main"

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

type Props = {
  settings: Settings
  orderId: string
  parcelId: string
}

const OrderParcel: React.FC<Props> = ({ settings, orderId, parcelId }) => {
  const { t } = useTranslation()

  return (
    <OrderContainer orderId={orderId}>
      <ShipmentsContainer>
        <Shipment loader={<SkeletonMain />}>
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
                  <Title>{t("parcelDetail.title")}</Title>
                </ParcelHeaderTop>
                <ParcelHeaderMain className="mt-10">
                  <ParcelHeaderCol>
                    <ParcelHeaderLabel>
                      {t("parcelDetail.header.tracking_code")}
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

export default OrderParcel
