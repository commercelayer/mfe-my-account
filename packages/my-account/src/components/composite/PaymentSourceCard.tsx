import { PaymentSourceBrandIcon } from "@commercelayer/react-components/payment_source/PaymentSourceBrandIcon"
import { PaymentSourceDetail } from "@commercelayer/react-components/payment_source/PaymentSourceDetail"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Trash, X } from "phosphor-react"
import { LinkButton } from "#components/ui/LinkButton"

import {
  PaymentSourceName,
  PaymentSourceCreditCardNumber,
  PaymentSourceCreditCardExpires,
} from "#components/composite/PaymentSource"
import { GridCard } from "#components/ui/GridCard"
import { PaymentSourceDeleteButton } from "@commercelayer/react-components"

export function PaymentSourceCard(): JSX.Element {
  const { t } = useTranslation()
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)

  return (
    <div className="relative transition duration-200 ease-in bg-white md:bg-transparent focus:shadow-sm">
      {showDeleteConfirmation && (
        <div className="absolute top-0 left-0 right-0 flex flex-col items-center justify-center h-full p-5 text-center bg-white border-2 border-red-400 rounded">
          <X
            weight="regular"
            className="absolute w-5 h-5 text-gray-300 cursor-pointer right-2 top-2"
            onClick={() => setShowDeleteConfirmation(false)}
          />
          <p className="text-sm font-bold">{t("wallet.deleteConfirmation")}</p>
          <div className="flex justify-center w-full mt-3 px-5">
            <PaymentSourceDeleteButton
              label={t("paymentSource.delete")}
              className="address-confirm-delete-button form-button px-5 h-6 text-3xs rounded-md bg-red-400 text-white flex items-center justify-center mx-0.5"  
            />
          </div>
        </div>
      )}
      <GridCard>
        <div className="flex flex-col gap-6">
          <div>
            <PaymentSourceBrandIcon width={50} />
          </div>
          <div className="flex flex-col w-full text-sm">
            <PaymentSourceDetail type="last4">
              {(props) => {
                if (props.text === null || props.text.length === 0)
                  return (
                    <div className="flex gap-1">
                      <PaymentSourceName />
                    </div>
                  )
                return (
                  <>
                    <div className="flex gap-1">
                      <PaymentSourceCreditCardNumber />
                    </div>
                    <PaymentSourceCreditCardExpires variant="card" />
                  </>
                )
              }}
            </PaymentSourceDetail>
            <div className="flex flex-col justify-end pt-2">
              <div className="flex justify-between self-end tracking-wide">
                <div
                  onClick={() => setShowDeleteConfirmation(true)}
                  className="address-delete-button flex items-center gap-1 text-gray-400 group-hover:text-red-400"
                >
                  <Trash className="w-3.5 h-3.5" />
                  <LinkButton
                    className="form-button group-hover:text-red-400 bg-white"
                    label={t("paymentSource.delete")}
                    variant="warning"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </GridCard>
    </div>
  )
}
