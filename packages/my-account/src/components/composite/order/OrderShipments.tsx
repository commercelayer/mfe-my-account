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

import ShipmentStatusChip from "#components/composite/order/ShipmentStatusChip"
import type { ShipmentStatus } from "#components/composite/order/ShipmentStatusChip"
import Button from "#components/ui/Button"
import ShowHideMenu from "#components/ui/ShowHideMenu"
import { AppContext } from "#providers/AppProvider"
import { OrderContext } from "#providers/OrderProvider"
import { appRoutes } from "#data/routes"
import { useSettings } from "#providers/SettingsProvider"

function ParcelTrackingNumber(): JSX.Element {
  return (
    <div className="relative pl-10 mr-10 hidden md:block">
      <div className="absolute right-0 font-bold text-right text-gray-300 uppercase -top-5 text-[12px]">
        <Trans i18nKey="order.shipments.trackingCode" />
      </div>
      <div className="text-sm font-bold text-right break-all">
        <ParcelField attribute="tracking_number" tagElement="span" />
      </div>
    </div>
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
                lang: settings.language,
                returnUrl: settings.returnUrl
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
    <div className="py-2 pl-7">
      <div className="flex items-center justify-between pt-10">
        <span className="pr-4 text-sm font-bold before:bg-[#e6e7e7] before:content-[''] before:h-[1px] before:w-[20px] before:absolute before:top-[50%] before:left-[-28px] max-w-1/3 md:max-w-full break-all">
          <Trans i18nKey="order.shipments.parcel">
            <ParcelField attribute="number" tagElement="span" />
          </Trans>
        </span>
        <div className='flex'>
          <ParcelTrackingNumber />
          <ParcelLink />
        </div>
      </div>
      <div className="py-3">
        <ParcelLineItemsCount>
          {(props) => {
            return (
              <ShowHideMenu itemsCounter={props?.quantity}>
                <ParcelLineItem>
                  <div className="flex flex-row py-4">
                    <div className="p-1 border rounded w-[45px]">
                      <ParcelLineItemField
                        tagElement="img"
                        attribute="image_url"
                      />
                    </div>
                    <div className="flex flex-col flex-1 pl-4">
                      <span className="text-sm font-bold">
                        <ParcelLineItemField
                          tagElement="span"
                          attribute="name"
                        />
                      </span>
                      <span className="mt-1 text-xs text-gray-500 uppercase">
                        <Trans i18nKey="order.shipments.parcelLineItemQuantity">
                          <ParcelLineItemField
                            tagElement="span"
                            attribute="quantity"
                          />
                        </Trans>
                      </span>
                    </div>
                  </div>
                </ParcelLineItem>
              </ShowHideMenu>
            )
          }}
        </ParcelLineItemsCount>
      </div>
    </div>
  )
}

function ShipmentTop(): JSX.Element {
  return (
    <div className="flex items-center">
      <span className="font-bold text-gray-500 bg-gray-300 rounded-full py-0.5 px-1.5 text-[12px]">
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
      </span>
      <div className="relative ml-3">
        <div className="flex items-center">
          <span className="pr-6 text-sm font-bold">
            <Trans i18nKey="order.shipments.shipment">
              <ShipmentField name="number" />
            </Trans>
          </span>
          <ShipmentField name="number">
            {(props) => {
              return (
                <ShipmentStatusChip
                  status={props?.shipment?.status as ShipmentStatus}
                />
              )
            }}
          </ShipmentField>
        </div>
        <ShipmentField name="number">
          {(props) => {
            return (
              <span className="absolute left-0 text-sm text-gray-500 -bottom-5">
                {props?.shipment?.shipping_method?.name}
              </span>
            )
          }}
        </ShipmentField>
      </div>
    </div>
  )
}

function OrderShipments(): JSX.Element {
  return (
    <ShipmentsContainer>
      <Shipment>
        <div className="border-b border-gray-300 last:border-b-0 pb-10 mb-10 last:pb-8 last:mb-0">
          <ShipmentTop />
          <Parcels>
            <div className="ml-[0.85rem] border-l border-gray-300">
              <Parcel />
            </div>
          </Parcels>
        </div>
      </Shipment>
    </ShipmentsContainer>
  )
}

export default OrderShipments
