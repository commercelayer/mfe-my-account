import {
  ShipmentsContainer,
  Shipment,
  ShipmentField,
} from "@commercelayer/react-components"
import { NextPage } from "next"
import { useTranslation, Trans } from "react-i18next"
import styled from "styled-components"
import tw from "twin.macro"

const ShipmentSection: NextPage = () => {
  const { t } = useTranslation()

  return (
    <ShipmentsContainer>
      <Shipment>
        <ShipmentDescription>
          <Trans t={t} i18nKey="order.shipment">
            <ShipmentField name="keyNumber" />
          </Trans>
        </ShipmentDescription>
        <ShipmentDescription>
          <Trans t={t} i18nKey="order.shipmentStatus">
            <ShipmentField name="status" />
          </Trans>
        </ShipmentDescription>
      </Shipment>
    </ShipmentsContainer>
  )
}

export default ShipmentSection

export const ShipmentDescription = styled.p`
  ${tw`text-gray-600 ml-3 font-normal`}
`
