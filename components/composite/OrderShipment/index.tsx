import { Parcel } from "@commercelayer/sdk"
import { Settings } from "HostedApp"
import Link from "next/link"
import { CaretLeft } from "phosphor-react"
import { useTranslation } from "react-i18next"
import { Tabs, TabPanel } from "react-tabs"

import OrderShipmentHistory from "components/composite/OrderShipment/OrderShipmentHistory"
import { StyledTabList, StyledTab } from "components/ui/React-Tabs/styled"
import ShipmentStatusChip from "components/ui/StatusChip/ShipmentStatusChip"
import type { TimelineSteps } from "components/ui/Timeline"
import { Timeline } from "components/ui/Timeline"

import {
  ShipmentContainer,
  ShipmentHeader,
  ShipmentHeaderTop,
  BackToOrder,
  Title,
  ShipmentHeaderMain,
  ShipmentHeaderCol,
  ShipmentHeaderLabel,
  ShipmentHeaderValue,
  TabsWrapper,
} from "./styled"

interface Props {
  settings: Settings
  orderId: string
  parcel?: Parcel
}

const OrderShipment: React.FC<Props> = ({ settings, orderId, parcel }) => {
  const { t } = useTranslation()

  const timelineSteps: TimelineSteps[] = [
    {
      title: t("shipmentDetail.timeline.shipped"),
      subTitle: "17/06/21",
      completed: true,
    },
    {
      title: t("shipmentDetail.timeline.in_transit"),
      subTitle: "18/06/21",
      completed: true,
    },
    {
      title: t("shipmentDetail.timeline.delivered"),
    },
  ]

  return (
    <ShipmentContainer>
      <ShipmentHeader>
        <ShipmentHeaderTop>
          <Link href={`/orders/${orderId}?accessToken=${settings.accessToken}`}>
            <BackToOrder>
              <CaretLeft weight="regular" className="w-7 h-7" />
            </BackToOrder>
          </Link>
          <Title>{t("shipmentDetail.title")}</Title>
        </ShipmentHeaderTop>
        <ShipmentHeaderMain className="mt-10">
          <ShipmentHeaderCol>
            <ShipmentHeaderLabel>
              {t("shipmentDetail.header.tracking_code")}
            </ShipmentHeaderLabel>
            <ShipmentHeaderValue>{parcel?.tracking_number}</ShipmentHeaderValue>
          </ShipmentHeaderCol>
          <ShipmentHeaderCol className="w-28">
            <ShipmentHeaderLabel>
              {t("shipmentDetail.header.courier")}
            </ShipmentHeaderLabel>
            <ShipmentHeaderValue>UPS</ShipmentHeaderValue>
          </ShipmentHeaderCol>
          <ShipmentHeaderCol className="text-right">
            <ShipmentHeaderLabel>
              {t("shipmentDetail.header.estimated_delivery")}
            </ShipmentHeaderLabel>
            <ShipmentHeaderValue>Tue, 19/06/21</ShipmentHeaderValue>
          </ShipmentHeaderCol>
        </ShipmentHeaderMain>
        <ShipmentHeaderMain className="mt-3">
          <ShipmentStatusChip status="upcoming" />
        </ShipmentHeaderMain>
      </ShipmentHeader>
      <TabsWrapper>
        {/* <Tabs>
          <StyledTabList>
            <StyledTab selectedClassName={"bg-primary text-white"}>
              {t("shipmentDetail.tabs.overview")}
            </StyledTab>
            <StyledTab selectedClassName={"bg-primary text-white"}>
              {t("shipmentDetail.tabs.detailed_view")}
            </StyledTab>
          </StyledTabList>
          <TabPanel>
            <Timeline steps={timelineSteps} />
          </TabPanel>
          <TabPanel>
            <OrderShipmentHistory parcel={parcel} />
          </TabPanel>
        </Tabs> */}
        <OrderShipmentHistory parcel={parcel} />
      </TabsWrapper>
    </ShipmentContainer>
  )
}

export default OrderShipment
