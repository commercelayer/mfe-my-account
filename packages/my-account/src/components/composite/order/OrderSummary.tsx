import { DiscountAmount } from "@commercelayer/react-components/orders/DiscountAmount"
import { GiftCardAmount } from "@commercelayer/react-components/orders/GiftCardAmount"
import { PaymentMethodAmount } from "@commercelayer/react-components/orders/PaymentMethodAmount"
import { ShippingAmount } from "@commercelayer/react-components/orders/ShippingAmount"
import { SubTotalAmount } from "@commercelayer/react-components/orders/SubTotalAmount"
import { TaxesAmount } from "@commercelayer/react-components/orders/TaxesAmount"
import { TotalAmount } from "@commercelayer/react-components/orders/TotalAmount"
import { useTranslation } from "react-i18next"

function OrderSummary(): JSX.Element {
  const { t } = useTranslation()

  return (
    <div className="flex flex-row py-6 text-sm pl-[91px] md:pl-[117px]">
      <div className="flex flex-col flex-1">
        <div className="flex flex-row justify-between empty:hidden">
          <p>{t("order.summary.subtotal_amount")}</p>
          <SubTotalAmount />
        </div>
        <div className="flex flex-row justify-between empty:hidden">
          <DiscountAmount>
            {(props) => {
              if (props.priceCents === 0) return <></>
              return (
                <>
                  <p>
                    {t("order.summary.discount_amount")}
                  </p>
                  <div>{props.price}</div>
                </>
              )
            }}
          </DiscountAmount>
        </div>
        <div className="flex flex-row justify-between empty:hidden">
          <p>{t("order.summary.shipping_amount")}</p>
          <ShippingAmount />
        </div>
        <div className="flex flex-row justify-between empty:hidden">
          <PaymentMethodAmount>
            {(props) => {
              if (props.priceCents === 0) return <></>
              return (
                <>
                  <p>
                    {t("order.summary.payment_method_amount")}
                  </p>
                  {props.price}
                </>
              )
            }}
          </PaymentMethodAmount>
        </div>
        <div className="flex flex-row justify-between empty:hidden">
          <p>{t("order.summary.tax_amount")}</p>
          <TaxesAmount />
        </div>
        <div className="flex flex-row justify-between empty:hidden">
          <GiftCardAmount>
            {(props) => {
              if (props.priceCents === 0) return <></>
              return (
                <>
                  <p>
                    {t("order.summary.giftcard_amount")}
                  </p>
                  <div>{props.price}</div>
                </>
              )
            }}
          </GiftCardAmount>
        </div>
        <div className="flex flex-row justify-between border-t border-gray-300 mt-7 pt-6">
          <p className="text-xl font-normal invisible lg:visible">
            {t("order.summary.total_amount")}
          </p>
          <TotalAmount className="font-extrabold" />
        </div>
      </div>
    </div>
  )
}

export default OrderSummary
