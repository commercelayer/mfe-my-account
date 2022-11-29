import { TaxesAmount } from "@commercelayer/react-components/orders/TaxesAmount"
import { ShippingAmount } from "@commercelayer/react-components/orders/ShippingAmount"
import { TotalAmount } from "@commercelayer/react-components/orders/TotalAmount"
import { PaymentMethodAmount } from "@commercelayer/react-components/orders/PaymentMethodAmount"
import { SubTotalAmount } from "@commercelayer/react-components/orders/SubTotalAmount"
import { DiscountAmount } from "@commercelayer/react-components/orders/DiscountAmount"
import { GiftCardAmount } from "@commercelayer/react-components/orders/GiftCardAmount"
import { useTranslation } from "react-i18next"

import {
  AmountWrapper,
  TotalWrapper,
  RecapLine,
  RecapLineTotal,
  RecapLineItemTotal,
  RecapLineItem,
} from "./styled"

const OrderSummary: React.FC = () => {
  const { t } = useTranslation()

  return (
    <TotalWrapper>
      <AmountWrapper>
        <RecapLine>
          <RecapLineItem>{t("order.subtotal_amount")}</RecapLineItem>
          <SubTotalAmount />
        </RecapLine>
        <RecapLine>
          <DiscountAmount>
            {(props) => {
              if (props.priceCents === 0) return <></>
              return (
                <>
                  <RecapLineItem>{t("order.discount_amount")}</RecapLineItem>
                  <div>{props.price}</div>
                </>
              )
            }}
          </DiscountAmount>
        </RecapLine>
        <RecapLine>
          <RecapLineItem>{t("order.shipping_amount")}</RecapLineItem>
          <ShippingAmount />
        </RecapLine>
        <RecapLine>
          <PaymentMethodAmount>
            {(props) => {
              if (props.priceCents === 0) return <></>
              return (
                <>
                  <RecapLineItem>
                    {t("order.payment_method_amount")}
                  </RecapLineItem>
                  {props.price}
                </>
              )
            }}
          </PaymentMethodAmount>
        </RecapLine>
        <RecapLine>
          <RecapLineItem>{t("order.tax_amount")}</RecapLineItem>
          <TaxesAmount />
        </RecapLine>
        <RecapLine>
          <GiftCardAmount>
            {(props) => {
              if (props.priceCents === 0) return <></>
              return (
                <>
                  <RecapLineItem>{t("order.giftcard_amount")}</RecapLineItem>
                  <div>{props.price}</div>
                </>
              )
            }}
          </GiftCardAmount>
        </RecapLine>
        <RecapLineTotal>
          <RecapLineItemTotal>{t("order.total_amount")}</RecapLineItemTotal>
          <TotalAmount className="font-extrabold" />
        </RecapLineTotal>
      </AmountWrapper>
    </TotalWrapper>
  )
}

export default OrderSummary
