import { PaymentSourceBrandIcon } from "@commercelayer/react-components/payment_source/PaymentSourceBrandIcon"
import { PaymentSourceDetail } from "@commercelayer/react-components/payment_source/PaymentSourceDetail"

import {
  PaymentSourceName,
  PaymentSourceCreditCardEndingIn,
  PaymentSourceCreditCardExpires,
} from "#components/composite/PaymentSource"

export function PaymentSourceRow(): JSX.Element {
  return (
    <div className="rounded flex bg-gray-50 items-center px-4 h-[57px] gap-6">
      <div>
        <PaymentSourceBrandIcon width={36} />
      </div>
      <div className="flex flex-col w-full text-sm ml-6">
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
                  <PaymentSourceName />
                  <PaymentSourceCreditCardEndingIn />
                </div>
                <PaymentSourceCreditCardExpires variant="row" />
              </>
            )
          }}
        </PaymentSourceDetail>
      </div>
    </div>
  )
}
