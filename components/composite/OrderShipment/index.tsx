import { Settings } from "HostedApp"
import Link from "next/link"
import { CaretLeft } from "phosphor-react"
import { useTranslation } from "react-i18next"

import OrderShipmentHistory from "components/composite/OrderShipment/OrderShipmentHistory"
import { TabsProvider } from "components/data/TabsProvider"
import ShipmentStatusChip from "components/ui/StatusChip/ShipmentStatusChip"
import { Tabs, Tab } from "components/ui/Tabs"
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
  shipmentId: string
}

const OrderShipment: React.FC<Props> = ({ settings, orderId }) => {
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
            <ShipmentHeaderValue>12d34fgv3456321</ShipmentHeaderValue>
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
        <TabsProvider tabsRel="shipmentViews">
          <Tabs>
            <Tab
              title={t("shipmentDetail.tabs.overview")}
              content={<Timeline steps={timelineSteps} />}
            />
            <Tab
              title={t("shipmentDetail.tabs.detailed_view")}
              content={<OrderShipmentHistory />}
            />
          </Tabs>
        </TabsProvider>
      </TabsWrapper>
    </ShipmentContainer>
  )
}

export default OrderShipment
