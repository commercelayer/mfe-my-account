import { Shipment } from "@commercelayer/react-components/shipments/Shipment"
import { ShipmentField } from "@commercelayer/react-components/shipments/ShipmentField"
import { ShipmentsContainer } from "@commercelayer/react-components/shipments/ShipmentsContainer"
import { useTranslation, Trans } from "react-i18next"

function ShipmentSection(): JSX.Element {
  const { t } = useTranslation()

  return (
    <ShipmentsContainer>
      <Shipment>
        <p className="text-gray-600 ml-3 font-normal">
          <Trans t={t} i18nKey="order.shipments.shipment">
            <ShipmentField name="key_number" />
          </Trans>
        </p>
        <p className="text-gray-600 ml-3 font-normal">
          <Trans t={t} i18nKey="order.shipments.shipmentStatus">
            <ShipmentField name="status" />
          </Trans>
        </p>
      </Shipment>
    </ShipmentsContainer>
  )
}

export default ShipmentSection
