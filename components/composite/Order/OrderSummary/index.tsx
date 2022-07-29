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
