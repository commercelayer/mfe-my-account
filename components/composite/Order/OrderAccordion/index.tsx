import { Order as CLayerOrder } from "@commercelayer/sdk"
import { useTranslation } from "react-i18next"

import AddressesSummary from "components/composite/Order/AddressesSummary"
import LineItemList from "components/composite/Order/LineItemList"
import OrderPayments from "components/composite/Order/OrderPayments"
import OrderSummary from "components/composite/Order/OrderSummary"
import { AccordionProvider } from "components/data/AccordionProvider"
import { useAccordionActiveSection } from "components/hooks/useAccordionActiveSection"
import { Accordion, AccordionItem } from "components/ui/Accordion"

import { Wrapper, SummaryWrapper } from "./styled"

interface Props {
  order?: CLayerOrder
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
          <AccordionItem
            index={1}
            header={<span>{t("order.shipments")}</span>}
          ></AccordionItem>
        </AccordionProvider>
        <AccordionProvider
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          section="Payments"
        >
          <AccordionItem index={1} header={<span>{t("order.payments")}</span>}>
            <OrderPayments order={order} />
          </AccordionItem>
        </AccordionProvider>
      </Accordion>
    </Wrapper>
  )
}

export default OrderAccordion
