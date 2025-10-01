import { PaymentSourceBrandIcon } from "@commercelayer/react-components/payment_source/PaymentSourceBrandIcon"
import { PaymentSourceDetail } from "@commercelayer/react-components/payment_source/PaymentSourceDetail"

import {
  PaymentSourceName,
  PaymentSourceCreditCardNumber,
  PaymentSourceCreditCardExpires,
} from "#components/composite/PaymentSource"

export function PaymentSourceCard(): JSX.Element {
  return (
    <div className="rounded flex flex-col gap-6">
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
      </div>
    </div>
  )
}
