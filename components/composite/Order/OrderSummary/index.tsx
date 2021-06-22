import {
  TaxesAmount,
  ShippingAmount,
  TotalAmount,
  PaymentMethodAmount,
  SubTotalAmount,
  DiscountAmount,
  GiftCardAmount,
} from "@commercelayer/react-components"
import { useTranslation } from "react-i18next"

import {
  AmountWrapper,
  TotalWrapper,
  AmountSpacer,
  RecapLine,
  RecapLineTotal,
  RecapLineItemTotal,
  RecapLineItem,
} from "./styled"

const OrderSummary: React.FC = () => {
  const { t } = useTranslation()

  return (
    <TotalWrapper>
      <AmountSpacer />
      <AmountWrapper>
        <RecapLine>
          <RecapLineItem>{t("orders.order.subtotal_amount")}</RecapLineItem>
          <SubTotalAmount />
        </RecapLine>
        <RecapLine>
          <DiscountAmount>
            {(props) => {
              if (props.priceCents === 0) return <></>
              return (
                <>
                  <RecapLineItem>
                    {t("orders.order.discount_amount")}
                  </RecapLineItem>
                  <div>{props.price}</div>
                </>
              )
            }}
          </DiscountAmount>
        </RecapLine>
        <RecapLine>
          <RecapLineItem>{t("orders.order.shipping_amount")}</RecapLineItem>
          <ShippingAmount />
        </RecapLine>
        <RecapLine>
          <PaymentMethodAmount>
            {(props) => {
              if (props.priceCents === 0) return <></>
              return (
                <>
                  <RecapLineItem>
                    {t("orders.order.payment_method_amount")}
                  </RecapLineItem>
                  {props.price}
                </>
              )
            }}
          </PaymentMethodAmount>
        </RecapLine>
        <RecapLine>
          <RecapLineItem>{t("orders.order.tax_amount")}</RecapLineItem>
          <TaxesAmount />
        </RecapLine>
        <RecapLine>
          <GiftCardAmount>
            {(props) => {
              if (props.priceCents === 0) return <></>
              return (
                <>
                  <RecapLineItem>
                    {t("orders.order.giftcard_amount")}
                  </RecapLineItem>
                  <div>{props.price}</div>
                </>
              )
            }}
          </GiftCardAmount>
        </RecapLine>
        <RecapLineTotal>
          <RecapLineItemTotal>
            {t("orders.order.total_amount")}
          </RecapLineItemTotal>
          <TotalAmount className="text-xl font-extrabold" />
        </RecapLineTotal>
      </AmountWrapper>
    </TotalWrapper>
  )
}

export default OrderSummary
