import {
  OrderContainer,
  ShipmentsContainer,
  Shipment,
  Parcels,
  ParcelField,
} from "@commercelayer/react-components"
import { Parcel } from "@commercelayer/sdk"
import { Settings } from "HostedApp"
import Link from "next/link"
import { CaretLeft } from "phosphor-react"
import { useTranslation } from "react-i18next"
import { Tabs, TabPanel } from "react-tabs"

import OrderParcelHistory from "components/composite/OrderParcel/OrderParcelHistory"
import { StyledTabList, StyledTab } from "components/ui/React-Tabs/styled"
import ShipmentStatusChip from "components/ui/StatusChip/ShipmentStatusChip"
import type { TimelineSteps } from "components/ui/Timeline"
import { Timeline } from "components/ui/Timeline"

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

interface Props {
  settings: Settings
  orderId: string
  parcelId: string
  parcel?: Parcel
}

const OrderParcel: React.FC<Props> = ({ settings, orderId, parcelId }) => {
  const { t } = useTranslation()

  const timelineSteps: TimelineSteps[] = [
    {
      title: t("parcelDetail.timeline.shipped"),
      subTitle: "17/06/21",
      completed: true,
    },
    {
      title: t("parcelDetail.timeline.in_transit"),
      subTitle: "18/06/21",
      completed: true,
    },
    {
      title: t("parcelDetail.timeline.delivered"),
    },
  ]

  return (
    <OrderContainer orderId={orderId}>
      <ShipmentsContainer>
        <Shipment>
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
                  {/* <ParcelHeaderCol className="w-28">
                    <ParcelHeaderLabel>
                      {t("parcelDetail.header.courier")}
                    </ParcelHeaderLabel>
                    <ParcelHeaderValue>UPS</ParcelHeaderValue>
                  </ParcelHeaderCol> */}
                  {/* <ParcelHeaderCol className="text-right">
                    <ParcelHeaderLabel>
                      {t("parcelDetail.header.estimated_delivery")}
                    </ParcelHeaderLabel>
                    <ParcelHeaderValue>Tue, 19/06/21</ParcelHeaderValue>
                  </ParcelHeaderCol> */}
                </ParcelHeaderMain>
                <ParcelHeaderMain className="mt-3">
                  {/* <ShipmentStatusChip status="upcoming" /> */}
                </ParcelHeaderMain>
              </ParcelHeader>
              <TabsWrapper>
                {/* <Tabs>
                  <StyledTabList>
                    <StyledTab selectedClassName={"bg-primary text-white"}>
                      {t("parcelDetail.tabs.overview")}
                    </StyledTab>
                    <StyledTab selectedClassName={"bg-primary text-white"}>
                      {t("parcelDetail.tabs.detailed_view")}
                    </StyledTab>
                  </StyledTabList>
                  <TabPanel>
                    <Timeline steps={timelineSteps} />
                  </TabPanel>
                  <TabPanel>
                    <OrderParcelHistory parcel={parcel} />
                  </TabPanel>
                </Tabs> */}
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
