import { DiscountAmount } from "@commercelayer/react-components/orders/DiscountAmount"
import { GiftCardAmount } from "@commercelayer/react-components/orders/GiftCardAmount"
import { PaymentMethodAmount } from "@commercelayer/react-components/orders/PaymentMethodAmount"
import { ShippingAmount } from "@commercelayer/react-components/orders/ShippingAmount"
import { SubTotalAmount } from "@commercelayer/react-components/orders/SubTotalAmount"
import { TaxesAmount } from "@commercelayer/react-components/orders/TaxesAmount"
import { TotalAmount } from "@commercelayer/react-components/orders/TotalAmount"
import { useTranslation } from "react-i18next"

import {
  AmountWrapper,
  TotalWrapper,
  RecapLine,
  RecapLineTotal,
  RecapLineItemTotal,
  RecapLineItem,
} from "./styled"

function OrderSummary(): JSX.Element {
  const { t } = useTranslation()

  return (
    <TotalWrapper>
      <AmountWrapper>
        <RecapLine>
          <RecapLineItem>{t("order.summary.subtotal_amount")}</RecapLineItem>
          <SubTotalAmount />
        </RecapLine>
        <RecapLine>
          <DiscountAmount>
            {(props) => {
              if (props.priceCents === 0) return <></>
              return (
                <>
                  <RecapLineItem>
                    {t("order.summary.discount_amount")}
                  </RecapLineItem>
                  <div>{props.price}</div>
                </>
              )
            }}
          </DiscountAmount>
        </RecapLine>
        <RecapLine>
          <RecapLineItem>{t("order.summary.shipping_amount")}</RecapLineItem>
          <ShippingAmount />
        </RecapLine>
        <RecapLine>
          <PaymentMethodAmount>
            {(props) => {
              if (props.priceCents === 0) return <></>
              return (
                <>
                  <RecapLineItem>
                    {t("order.summary.payment_method_amount")}
                  </RecapLineItem>
                  {props.price}
                </>
              )
            }}
          </PaymentMethodAmount>
        </RecapLine>
        <RecapLine>
          <RecapLineItem>{t("order.summary.tax_amount")}</RecapLineItem>
          <TaxesAmount />
        </RecapLine>
        <RecapLine>
          <GiftCardAmount>
            {(props) => {
              if (props.priceCents === 0) return <></>
              return (
                <>
                  <RecapLineItem>
                    {t("order.summary.giftcard_amount")}
                  </RecapLineItem>
                  <div>{props.price}</div>
                </>
              )
            }}
          </GiftCardAmount>
        </RecapLine>
        <RecapLineTotal>
          <RecapLineItemTotal>
            {t("order.summary.total_amount")}
          </RecapLineItemTotal>
          <TotalAmount className="font-extrabold" />
        </RecapLineTotal>
      </AmountWrapper>
    </TotalWrapper>
  )
}

export default OrderSummary
