import CustomerPaymentSourceEmpty from "@commercelayer/react-components/customers/CustomerPaymentSourceEmpty"
import { useTranslation } from "react-i18next"

import Empty from "#components/composite/Empty"
import CustomerPaymentCard from "#components/ui/CustomerPaymentCard"
import { GridContainer } from "#components/ui/GridContainer"
import Title from "#components/ui/Title"

function WalletPage(): JSX.Element {
  const { t } = useTranslation()

  return (
    <>
      <Title>{t("wallet.title")}</Title>
      <CustomerPaymentSourceEmpty>
        {() => <Empty type="PaymentMethods" />}
      </CustomerPaymentSourceEmpty>
      <GridContainer>
        <CustomerPaymentCard />
      </GridContainer>
    </>
  )
}

export default WalletPage
