import { Order } from "@commercelayer/sdk"
import { useTranslation } from "react-i18next"

import AddressesSummary from "src/components/composite/Order/AddressesSummary"
import LineItemList from "src/components/composite/Order/LineItemList"
import OrderPayments from "src/components/composite/Order/OrderPayments"
import OrderShipments from "src/components/composite/Order/OrderShipments"
import OrderSummary from "src/components/composite/Order/OrderSummary"
import { Accordion, AccordionItem } from "src/components/ui/Accordion"

import { Wrapper, SummaryWrapper } from "./styled"

import { useAccordionActiveSection } from "src/hooks/useAccordionActiveSection"
import { AccordionProvider } from "src/providers/AccordionProvider"

type Props = {
  order?: Order
}

const OrderAccordion: React.FC<Props> = ({ order }) => {
  const { t } = useTranslation()

  const { activeSection, setActiveSection } = useAccordionActiveSection()

  return (
    <Wrapper>
      <Accordion>
        <AccordionProvider
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          section="Summary"
        >
          <AccordionItem index={1} header={<span>{t("order.summary")}</span>}>
            <SummaryWrapper>
              <LineItemList />
              <OrderSummary />
            </SummaryWrapper>
          </AccordionItem>
        </AccordionProvider>
        <AccordionProvider
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          section="Addresses"
        >
          <AccordionItem index={1} header={<span>{t("order.addresses")}</span>}>
            <AddressesSummary order={order} />
          </AccordionItem>
        </AccordionProvider>
        <AccordionProvider
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          section="Shipments"
        >
          <AccordionItem index={1} header={<span>{t("order.shipments")}</span>}>
            <OrderShipments />
          </AccordionItem>
        </AccordionProvider>
        <AccordionProvider
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          section="Payments"
        >
          <AccordionItem index={1} header={<span>{t("order.payments")}</span>}>
            <OrderPayments />
          </AccordionItem>
        </AccordionProvider>
      </Accordion>
    </Wrapper>
  )
}

export default OrderAccordion
