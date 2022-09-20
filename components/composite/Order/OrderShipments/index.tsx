import {
  ShipmentsContainer,
  // Shipment,
  // ShipmentField,
} from "@commercelayer/react-components"
import { Order as CLayerOrder } from "@commercelayer/sdk"
import { useRouter } from "next/router"
import { useContext } from "react"
import { Trans, useTranslation } from "react-i18next"

import { AppContext } from "components/data/AppProvider"
import Button from "components/ui/Button"
import ShowHideMenu from "components/ui/ShowHideMenu"
import ShipmentStatusChip from "components/ui/StatusChip/ShipmentStatusChip"
import type { ShipmentStatus } from "components/ui/StatusChip/ShipmentStatusChip"

import {
  ShipmentWrapper,
  ShipmentHeader,
  ShipmentCounter,
  ShipmentHeaderRight,
  ShipmentHeaderRightRow,
  ShipmentTitle,
  ShipmentShippingMethod,
  ParcelsWrapper,
  ParcelWrapper,
  ParcelHeader,
  ParcelTitle,
  ParcelHeaderRight,
  ParcelTrackingNumberWrapper,
  ParcelTrackingNumberLabel,
  ParcelTrackingNumberCode,
  ParcelContent,
} from "./styled"

type OrderShipments = {
  order?: CLayerOrder
}

type ParcelTrackingNumberProps = {
  trackingNumber?: string
}

type ParcelLinkProps = {
  orderId?: string
  parcelId?: string
}

type ParcelProps = {
  orderId?: string
  parcelId?: string
  parcelNumber?: string
  parcelTrackingNumber?: string
}

const ParcelTrackingNumber: React.FC<ParcelTrackingNumberProps> = ({
  trackingNumber,
}) => {
  return (
    <ParcelTrackingNumberWrapper>
      <ParcelTrackingNumberLabel>
        <Trans i18nKey="orderShipments.trackingCode" />
      </ParcelTrackingNumberLabel>
      <ParcelTrackingNumberCode>{trackingNumber}</ParcelTrackingNumberCode>
    </ParcelTrackingNumberWrapper>
  )
}

const ParcelLink: React.FC<ParcelLinkProps> = ({ orderId, parcelId }) => {
  const router = useRouter()
  const { t } = useTranslation()
  const ctx = useContext(AppContext)
  const accessToken = ctx?.accessToken
  return (
    <Button
      className="uppercase"
      label={t("orderShipments.trackShipment") as string}
      buttonSize="small"
      onClick={() =>
        router.push(
          `/orders/${orderId}/shipments/${parcelId}?accessToken=${accessToken}`
        )
      }
    />
  )
}

const Parcel: React.FC<ParcelProps> = ({
  orderId,
  parcelId,
  parcelNumber,
  parcelTrackingNumber,
}) => {
  return (
    <ParcelWrapper>
      <ParcelHeader>
        <ParcelTitle>
          <Trans i18nKey="orderShipments.parcel">{parcelNumber}</Trans>
        </ParcelTitle>
        <ParcelHeaderRight>
          <ParcelTrackingNumber trackingNumber={parcelTrackingNumber} />
          <ParcelLink orderId={orderId} parcelId={parcelId} />
        </ParcelHeaderRight>
      </ParcelHeader>
      <ParcelContent>
        <ShowHideMenu itemsCounter={2}>LINE ITEMS</ShowHideMenu>
      </ParcelContent>
    </ParcelWrapper>
  )
}

type ShipmentProps = {
  index: number
  shipmentsCount: number
  shipmentNumber?: React.ReactNode | string
  shipmentStatus?: ShipmentStatus
  shipmentShippingMethod?: string
}

const ShipmentTop: React.FC<ShipmentProps> = ({
  index,
  shipmentsCount = 1,
  shipmentNumber,
  shipmentStatus,
  shipmentShippingMethod,
}) => {
  return (
    <ShipmentHeader>
      <ShipmentCounter>
        {index}/{shipmentsCount}
      </ShipmentCounter>
      <ShipmentHeaderRight>
        <ShipmentHeaderRightRow>
          <ShipmentTitle>
            <Trans i18nKey="orderShipments.shipment">{shipmentNumber}</Trans>
          </ShipmentTitle>
          <ShipmentStatusChip status={shipmentStatus} />
        </ShipmentHeaderRightRow>
        <ShipmentShippingMethod>
          {shipmentShippingMethod}
        </ShipmentShippingMethod>
      </ShipmentHeaderRight>
    </ShipmentHeader>
  )
}

const OrderShipments: React.FC<OrderShipments> = ({ order }) => {
  return (
    <ShipmentsContainer>
      <ShipmentWrapper>
        <ShipmentTop
          index={1}
          shipmentsCount={2}
          shipmentNumber={"1"}
          shipmentStatus={"shipped"}
          shipmentShippingMethod={"Express Delivery"}
        />
        <ParcelsWrapper>
          <Parcel
            orderId={order?.id}
            parcelId={"qRdRfGJPwe"}
            parcelNumber={"25328859/S/001/P/001"}
            parcelTrackingNumber={"GLS-3456321"}
          />
          <Parcel
            orderId={order?.id}
            parcelId={"qRdRfGJPwe"}
            parcelNumber={"2"}
            parcelTrackingNumber={"QK965356321"}
          />
        </ParcelsWrapper>
      </ShipmentWrapper>
      <ShipmentWrapper>
        <ShipmentTop
          index={2}
          shipmentsCount={2}
          shipmentNumber={"1"}
          shipmentStatus={"shipped"}
          shipmentShippingMethod={"Express Delivery"}
        />
        <ParcelsWrapper>
          <Parcel
            orderId={order?.id}
            parcelId={"qRdRfGJPwe"}
            parcelNumber={"25328859/S/001/P/001"}
            parcelTrackingNumber={"GLS-3456321"}
          />
        </ParcelsWrapper>
      </ShipmentWrapper>
    </ShipmentsContainer>
  )
}

export default OrderShipments
