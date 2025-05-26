import { ParcelField } from "@commercelayer/react-components/parcels/ParcelField"
import { ParcelLineItem } from "@commercelayer/react-components/parcels/ParcelLineItem"
import { ParcelLineItemField } from "@commercelayer/react-components/parcels/ParcelLineItemField"
import { ParcelLineItemsCount } from "@commercelayer/react-components/parcels/ParcelLineItemsCount"
import { Parcels } from "@commercelayer/react-components/parcels/Parcels"
import { Shipment } from "@commercelayer/react-components/shipments/Shipment"
import { ShipmentField } from "@commercelayer/react-components/shipments/ShipmentField"
import { ShipmentsContainer } from "@commercelayer/react-components/shipments/ShipmentsContainer"
import { ShipmentsCount } from "@commercelayer/react-components/shipments/ShipmentsCount"
import { useContext } from "react"
import { Trans, useTranslation } from "react-i18next"
import { useLocation } from "wouter"

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

import ShipmentStatusChip from "#components/composite/Order/ShipmentStatusChip"
import type { ShipmentStatus } from "#components/composite/Order/ShipmentStatusChip"
import Button from "#components/ui/Button"
import ShowHideMenu from "#components/ui/ShowHideMenu"
import { AppContext } from "#providers/AppProvider"
import { OrderContext } from "#providers/OrderProvider"
import { appRoutes } from "#data/routes"
import { useSettings } from "#providers/SettingsProvider"

function ParcelTrackingNumber(): JSX.Element {
  return (
    <ParcelTrackingNumberWrapper>
      <ParcelTrackingNumberLabel>
        <Trans i18nKey="order.shipments.trackingCode" />
      </ParcelTrackingNumberLabel>
      <ParcelTrackingNumberCode>
        <ParcelField attribute="tracking_number" tagElement="span" />
      </ParcelTrackingNumberCode>
    </ParcelTrackingNumberWrapper>
  )
}

function ParcelLink(): JSX.Element {
  const [, setLocation] = useLocation()
  const { t } = useTranslation()
  const ctx = useContext(AppContext)
  const { settings } = useSettings()
  const accessToken = ctx?.accessToken
  const orderCtx = useContext(OrderContext)
  const orderId = orderCtx?.order?.id
  return (
    <ParcelField attribute="id" tagElement="span">
      {(props: any) => {
        return (
          <Button
            className="uppercase"
            label={t("order.shipments.trackParcel") as string}
            buttonSize="small"
            onClick={() =>
              setLocation(appRoutes.parcel.makePath({
                orderId: orderId ?? '',
                parcelId: props?.attributeValue ?? '',
                accessToken: accessToken ?? '',
                lang: settings.language
              }))
            }
          />
        )
      }}
    </ParcelField>
  )
}

function Parcel(): JSX.Element {
  return (
    <ParcelWrapper>
      <ParcelHeader>
        <ParcelTitle>
          <Trans i18nKey="order.shipments.parcel">
            <ParcelField attribute="number" tagElement="span" />
          </Trans>
        </ParcelTitle>
        <ParcelHeaderRight>
          <ParcelTrackingNumber />
          <ParcelLink />
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
                        <Trans i18nKey="order.shipments.parcelLineItemQuantity">
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

function ShipmentTop(): JSX.Element {
  return (
    <ShipmentHeader>
      <ShipmentCounter>
        <ShipmentField name="key_number">
          {(shipment) => {
            const key_number = parseInt(
              shipment.shipment.number?.split("/")[
                shipment.shipment.number?.split("/").length - 1
              ] ?? ""
            )
            return <>{key_number}</>
          }}
        </ShipmentField>
        /<ShipmentsCount />
      </ShipmentCounter>
      <ShipmentHeaderRight>
        <ShipmentHeaderRightRow>
          <ShipmentTitle>
            <Trans i18nKey="order.shipments.shipment">
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

function OrderShipments(): JSX.Element {
  return (
    <ShipmentsContainer>
      <Shipment>
        <ShipmentWrapper>
          <ShipmentTop />
          <Parcels>
            <ParcelsWrapper>
              <Parcel />
            </ParcelsWrapper>
          </Parcels>
        </ShipmentWrapper>
      </Shipment>
    </ShipmentsContainer>
  )
}

export default OrderShipments
