import { CustomerPaymentSource } from "@commercelayer/react-components/customers/CustomerPaymentSource"
import CustomerPaymentSourceEmpty from "@commercelayer/react-components/customers/CustomerPaymentSourceEmpty"
import { PaymentSourceBrandIcon } from "@commercelayer/react-components/payment_source/PaymentSourceBrandIcon"
import { PaymentSourceBrandName } from "@commercelayer/react-components/payment_source/PaymentSourceBrandName"
import { PaymentSourceDetail } from "@commercelayer/react-components/payment_source/PaymentSourceDetail"
import { useTranslation } from "react-i18next"

import Empty from "#components/composite/Empty"
import Title from "#components/ui/Title"

function WalletPage(): JSX.Element {
  const { t } = useTranslation()

  return (
    <>
      <Title>{t("wallet.title")}</Title>
      <CustomerPaymentSourceEmpty>
        {() => <Empty type="PaymentMethods" />}
      </CustomerPaymentSourceEmpty>
      <CustomerPaymentSource>
        <PaymentSourceBrandIcon />
        <PaymentSourceBrandName />
        <PaymentSourceDetail type="last4" />
        <PaymentSourceDetail
          type="exp_month"
          data-testid="payment-source-exp-month"
        />
        <PaymentSourceDetail
          type="exp_year"
          data-testid="payment-source-exp-year"
        />
      </CustomerPaymentSource>
    </>
  )
}

export default WalletPage
