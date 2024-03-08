import { Order, OrderSubscription } from "@commercelayer/sdk"
import { Warning } from "phosphor-react"
import { useContext } from "react"

import { AppContext } from "#providers/AppProvider"

interface Props {
  orderSubscription?: OrderSubscription
  orderSubscriptionLastOrder?: Order
}

function SubscriptionPaymentAlert({
  orderSubscription,
  orderSubscriptionLastOrder,
}: Props): JSX.Element {
  if (orderSubscription != null && orderSubscriptionLastOrder != null) {
    const isActive = orderSubscription.status === "active"
    if (
      isActive &&
      orderSubscriptionLastOrder != null &&
      orderSubscriptionLastOrder?.payment_status === "unpaid"
    ) {
      const ctx = useContext(AppContext)
      const { domain, slug } = getDomain(ctx?.endpoint ?? "")
      const href = getCheckoutLink({
        slug,
        orderId: orderSubscriptionLastOrder?.id,
        accessToken: ctx?.accessToken ?? "",
        domain,
      })

      return (
        <div className="flex items-start p-6 mb-8 text-orange-700 bg-orange-400 border border-orange-400 rounded-lg bg-opacity-10 gap-3">
          <Warning size={24} weight="regular" />
          <span>
            Your last transaction has been declined.
            <br />
            Please proceed with a{" "}
            <a
              className="font-semibold underline"
              target="_blank"
              href={href}
              rel="noreferrer"
            >
              new payment on the checkout
            </a>
            .
          </span>
        </div>
      )
    }
  }
  return <></>
}

function getDomain(endpoint: string): { slug: string; domain: string } {
  const url = new URL(endpoint)
  const [slug] = url.hostname.split(".")
  const domain = url.hostname.replace(`${slug ?? ""}.`, "")
  return {
    domain,
    slug: slug ?? "",
  }
}

interface GetCheckoutLinkConfig {
  orderId: string
  accessToken: string
  slug: string
  domain: string
  customDomain?: string
}

function getCheckoutLink({
  orderId,
  accessToken,
  slug,
  domain,
  customDomain,
}: GetCheckoutLinkConfig): string {
  const env = domain === "commercelayer.io" ? "" : "stg."
  const domainName = customDomain ?? `${slug}.${env}commercelayer.app`
  const application = customDomain ? "" : `/checkout`
  return `https://${domainName}${application}/${
    orderId ?? ""
  }?accessToken=${accessToken}`
}

export default SubscriptionPaymentAlert
