import {
  ShipmentsContainer,
  Shipment,
  ShipmentField,
} from "@commercelayer/react-components"
import { NextPage } from "next"
import { useTranslation, Trans } from "react-i18next"

import { ShipmentDescription } from "./styled"

const ShipmentSection: NextPage = () => {
  const { t } = useTranslation()

  return (
    <ShipmentsContainer>
      <Shipment>
        <ShipmentDescription>
          <Trans t={t} i18nKey="order.shipment">
            <ShipmentField name="key_number" />
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
