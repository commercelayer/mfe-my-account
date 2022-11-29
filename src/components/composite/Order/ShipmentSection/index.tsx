import { ShipmentsContainer } from "@commercelayer/react-components/shipments/ShipmentsContainer"
import { Shipment } from "@commercelayer/react-components/shipments/Shipment"
import { ShipmentField } from "@commercelayer/react-components/shipments/ShipmentField"
import { useTranslation, Trans } from "react-i18next"

import { ShipmentDescription } from "./styled"

function ShipmentSection(): JSX.Element {
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
