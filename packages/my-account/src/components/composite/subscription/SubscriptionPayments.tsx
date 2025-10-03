import { OrderSubscription } from "@commercelayer/sdk"
import capitalize from "lodash/capitalize"
import { Trans } from "react-i18next"

import Empty from "#components/composite/Empty"

import { getCardDetails, getCardIconFromDetails } from "#utils/getCardDetails"

interface Props {
  orderSubscription?: OrderSubscription
}

function SubscriptionPayments({ orderSubscription }: Props): JSX.Element {
  const paymentMethod =
    orderSubscription?.customer_payment_source?.payment_method
  const paymentSource =
    orderSubscription?.customer_payment_source?.payment_source

  if (paymentMethod != null && paymentSource != null) {

    const details = getCardDetails({
      paymentType: paymentMethod.payment_source_type,
      paymentSource,
    })
    const icon = getCardIconFromDetails(details)
    const name = capitalize(
      (details.brand ?? details.issuer_type).replace(/_|-/gm, " ")
    )
    return (
      <div className="rounded flex bg-gray-50 items-center px-4 h-[57px] gap-6">
        { 
          details.issuer_type != null
          ? (
            <>
            <div>
              <img src={icon} alt={paymentMethod?.name ?? ""} width={36} />
            </div>
            <div className="flex flex-col w-full text-sm">
              {details.last4 != null ? (
                <div>
                  <div className="flex gap-1">
                    <div className="font-bold break-all">{name}</div>
                    <div className="font-bold break-all">
                      <Trans i18nKey="paymentSource.endingIn">
                        {details.last4}
                      </Trans>
                    </div>
                  </div>
                  <div className="font-light text-gray-500">
                    <div className="flex items-center gap-1">
                      <Trans i18nKey="paymentSource.expires" />
                      <div className="flex">
                        {details.exp_month}/{details.exp_year}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                name
              )}
            </div>
            </>
          )
          : (name)
        }
      </div>
    )
  }
  return <Empty type="SubscriptionPayments" />
}

export default SubscriptionPayments
