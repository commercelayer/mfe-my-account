import { PaymentSourceBrandIcon } from "@commercelayer/react-components/payment_source/PaymentSourceBrandIcon"
import { PaymentSourceDetail } from "@commercelayer/react-components/payment_source/PaymentSourceDetail"

import { PaymentSourceWrapper } from "./styled"

import {
  PaymentSourceName,
  PaymentSourceCreditCardNumber,
  PaymentSourceCreditCardExpires,
} from "#components/ui/PaymentSource"
import {
  PaymentSourceBrandIconWrapper,
  PaymentSourceBrandNameWrapper,
  PaymentSourceTextWrapper,
} from "#components/ui/PaymentSource/styled"

export function PaymentSourceCard(): JSX.Element {
  return (
    <PaymentSourceWrapper>
      <PaymentSourceBrandIconWrapper>
        <PaymentSourceBrandIcon width={50} />
      </PaymentSourceBrandIconWrapper>
      <PaymentSourceBrandNameWrapper>
        <PaymentSourceDetail type="last4">
          {(props) => {
            if (props.text === null || props.text.length === 0)
              return (
                <PaymentSourceTextWrapper>
                  <PaymentSourceName />
                </PaymentSourceTextWrapper>
              )
            return (
              <>
                <PaymentSourceTextWrapper>
                  <PaymentSourceCreditCardNumber />
                </PaymentSourceTextWrapper>
                <PaymentSourceCreditCardExpires />
              </>
            )
          }}
        </PaymentSourceDetail>
      </PaymentSourceBrandNameWrapper>
    </PaymentSourceWrapper>
  )
}
