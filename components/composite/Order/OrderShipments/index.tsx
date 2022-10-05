import {
  ShipmentsContainer,
  Shipment,
  ShipmentField,
  Parcels,
  ParcelField,
  ParcelLineItem,
  ParcelLineItemField,
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
  ParcelLineItemWrapper,
  ParcelLineItemImageWrapper,
  ParcelLineItemContentWrapper,
  ParcelLineItemName,
  ParcelLineItemQuantity,
} from "./styled"

type OrderShipments = {
  order?: CLayerOrder
}

type ParcelLinkProps = {
  orderId?: string
}

type ParcelProps = {
  orderId?: string
}

const ParcelTrackingNumber: React.FC = () => {
  return (
    <ParcelTrackingNumberWrapper>
      <ParcelTrackingNumberLabel>
        <Trans i18nKey="orderShipments.trackingCode" />
      </ParcelTrackingNumberLabel>
      <ParcelTrackingNumberCode>
        <ParcelField attribute="tracking_number" tagElement="span" />
      </ParcelTrackingNumberCode>
    </ParcelTrackingNumberWrapper>
  )
}

const ParcelLink: React.FC<ParcelLinkProps> = ({ orderId }) => {
  const router = useRouter()
  const { t } = useTranslation()
  const ctx = useContext(AppContext)
  const accessToken = ctx?.accessToken
  return (
    <ParcelField attribute="id" tagElement="span">
      {(props: any) => {
        return (
          <Button
            className="uppercase"
            label={t("orderShipments.trackShipment") as string}
            buttonSize="small"
            onClick={() =>
              router.push(
                `/orders/${orderId}/shipments/${props?.attributeValue}?accessToken=${accessToken}`
              )
            }
          />
        )
      }}
    </ParcelField>
  )
}

const Parcel: React.FC<ParcelProps> = ({ orderId }) => {
  return (
    <ParcelWrapper>
      <ParcelHeader>
        <ParcelTitle>
          <Trans i18nKey="orderShipments.parcel">
            <ParcelField attribute="number" tagElement="span" />
          </Trans>
        </ParcelTitle>
        <ParcelHeaderRight>
          <ParcelTrackingNumber />
          <ParcelLink orderId={orderId} />
        </ParcelHeaderRight>
      </ParcelHeader>
      <ParcelContent>
        <ShowHideMenu itemsCounter={2}>
          <ParcelLineItem>
            <ParcelLineItemWrapper>
              <ParcelLineItemImageWrapper>
                <ParcelLineItemField tagElement="img" attribute="image_url" />
              </ParcelLineItemImageWrapper>
              <ParcelLineItemContentWrapper>
                <ParcelLineItemName>
                  <ParcelLineItemField tagElement="span" attribute="name" />
                </ParcelLineItemName>
                <ParcelLineItemQuantity>
                  <Trans i18nKey="orderShipments.parcels.lineItemQuantity">
                    <ParcelLineItemField
                      tagElement="span"
                      attribute="quantity"
                    />
                  </Trans>
                </ParcelLineItemQuantity>
              </ParcelLineItemContentWrapper>
            </ParcelLineItemWrapper>
          </ParcelLineItem>
        </ShowHideMenu>
      </ParcelContent>
    </ParcelWrapper>
  )
}

type ShipmentProps = {
  shipmentsCount: number
}

const ShipmentTop: React.FC<ShipmentProps> = ({ shipmentsCount = 1 }) => {
  return (
    <ShipmentHeader>
      <ShipmentCounter>
        <ShipmentField name="key_number" />/<span>{shipmentsCount}</span>
      </ShipmentCounter>
      <ShipmentHeaderRight>
        <ShipmentHeaderRightRow>
          <ShipmentTitle>
            <Trans i18nKey="orderShipments.shipment">
              <ShipmentField name="number" />
            </Trans>
          </ShipmentTitle>
          <ShipmentField name="number">
            {(props) => {
              return (
                <ShipmentStatusChip
                  status={props?.shipment?.status as ShipmentStatus}
                />
              )
            }}
          </ShipmentField>
        </ShipmentHeaderRightRow>
        <ShipmentField name="number">
          {(props) => {
            return (
              <ShipmentShippingMethod>
                {props?.shipment?.shipping_method?.name}
              </ShipmentShippingMethod>
            )
          }}
        </ShipmentField>
      </ShipmentHeaderRight>
    </ShipmentHeader>
  )
}

const OrderShipments: React.FC<OrderShipments> = ({ order }) => {
  return (
    <ShipmentsContainer>
      <Shipment>
        <ShipmentWrapper>
          <ShipmentTop shipmentsCount={order?.shipments?.length as number} />
          <Parcels>
            <ParcelsWrapper>
              <Parcel orderId={order?.id} />
            </ParcelsWrapper>
          </Parcels>
        </ShipmentWrapper>
      </Shipment>
    </ShipmentsContainer>
  )
}

export default OrderShipments
