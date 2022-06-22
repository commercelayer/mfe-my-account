import { useTranslation } from "react-i18next"

import { AccordionProvider } from "components/data/AccordionProvider"

import LineItemList from "components/composite/Order/LineItemList"
import PaymentSummary from "components/composite/Order/PaymentSummary"
import AddressesSummary from "components/composite/Order/AddressesSummary"

import { useAccordionActiveSection } from "components/hooks/useAccordionActiveSection"
import { Accordion, AccordionItem } from "components/ui/Accordion"

import { Wrapper, SummaryWrapper } from "./styled"

const OrderSummary: React.FC = () => {
  const { t } = useTranslation()

  const { activeSection, setActiveSection, sections } = useAccordionActiveSection()

  return (
    <Wrapper>
      <Accordion>
        <AccordionProvider
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          section="Summary"
        >
          <AccordionItem
            index={1}
            header={
              <span>{t("order.summary")}</span>
            }
          >
            <SummaryWrapper>
              <LineItemList />
              <PaymentSummary />
            </SummaryWrapper>
          </AccordionItem>
        </AccordionProvider>
        <AccordionProvider
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          section="Addresses"
        >
          <AccordionItem
            index={1}
            header={
              <span>{t("order.addresses")}</span>
            }
          >
            <AddressesSummary />
          </AccordionItem>
        </AccordionProvider>
        <AccordionProvider
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          section="Shipments"
        >
          <AccordionItem
            index={1}
            header={
              <span>{t("order.shipments")}</span>
            }
          >
            
          </AccordionItem>
        </AccordionProvider>
        <AccordionProvider
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          section="Payments"
        >
          <AccordionItem
            index={1}
            header={
              <span>{t("order.payments")}</span>
            }
          >
            
          </AccordionItem>
        </AccordionProvider>
      </Accordion>
    </Wrapper>
  )
}

export default OrderSummary
