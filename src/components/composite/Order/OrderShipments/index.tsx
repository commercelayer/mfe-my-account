import type { Order } from "@commercelayer/sdk"
import {
  ShipmentsContainer,
  ShipmentsCount,
  Shipment,
  ShipmentField,
  Parcels,
  ParcelField,
  ParcelLineItemsCount,
  ParcelLineItem,
  ParcelLineItemField,
} from "@commercelayer/react-components"
import { useLocation } from "wouter";
import { useContext } from "react"
import { Trans, useTranslation } from "react-i18next"

import Button from "#components/ui/Button"
import ShowHideMenu from "#components/ui/ShowHideMenu"
import ShipmentStatusChip from "#components/ui/StatusChip/ShipmentStatusChip"
import type { ShipmentStatus } from "#components/ui/StatusChip/ShipmentStatusChip"

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

import { AppContext } from "#providers/AppProvider"

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

interface ParcelLinkProps {
  orderId?: string
}

const ParcelLink: React.FC<ParcelLinkProps> = ({ orderId }) => {
  const [location, setLocation] = useLocation()
  const { t } = useTranslation()
  const ctx = useContext(AppContext)
  const accessToken = ctx?.accessToken
  return (
    <ParcelField attribute="id" tagElement="span">
      {(props: any) => {
        return (
          <Button
            className="uppercase"
            label={t("orderShipments.trackParcel") as string}
            buttonSize="small"
            onClick={() =>
              setLocation(
                `/orders/${orderId}/parcels/${props?.attributeValue}?accessToken=${accessToken}`
              )
            }
          />
        )
      }}
    </ParcelField>
  )
}

interface ParcelProps {
  orderId?: string
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
        <ParcelLineItemsCount>
          {(props) => {
            return (
              <ShowHideMenu itemsCounter={props?.quantity}>
                <ParcelLineItem>
                  <ParcelLineItemWrapper>
                    <ParcelLineItemImageWrapper>
                      <ParcelLineItemField
                        tagElement="img"
                        attribute="image_url"
                      />
                    </ParcelLineItemImageWrapper>
                    <ParcelLineItemContentWrapper>
                      <ParcelLineItemName>
                        <ParcelLineItemField
                          tagElement="span"
                          attribute="name"
                        />
                      </ParcelLineItemName>
                      <ParcelLineItemQuantity>
                        <Trans i18nKey="orderShipments.parcelLineItemQuantity">
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
            )
          }}
        </ParcelLineItemsCount>
      </ParcelContent>
    </ParcelWrapper>
  )
}

const ShipmentTop: React.FC = () => {
  return (
    <ShipmentHeader>
      <ShipmentCounter>
        <ShipmentField name="key_number" />/<ShipmentsCount />
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

interface Props {
  order?: Order
}

const OrderShipments: React.FC<Props> = ({ order }) => {
  return (
    <ShipmentsContainer>
      <Shipment>
        <ShipmentWrapper>
          <ShipmentTop />
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
