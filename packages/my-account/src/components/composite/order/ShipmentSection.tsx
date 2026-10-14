import {
  Shipment,
  ShipmentField,
  Shipments,
} from "@commercelayer/react-components"
import { Trans, useTranslation } from "react-i18next"

function ShipmentSection(): JSX.Element {
  const { t } = useTranslation()

  return (
    <Shipments>
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
    </Shipments>
  )
}

export default ShipmentSection
