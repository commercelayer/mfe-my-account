import { useTranslation } from "react-i18next"

import Button from "#components/ui/Button"
import NoAddressesIcon from "#components/ui/icons/NoAddressesIcon"
import NoOrdersIcon from "#components/ui/icons/NoOrdersIcon"
import NoPaymentMethodsIcon from "#components/ui/icons/NoPaymentMethodsIcon"
import NoReturnsIcon from "#components/ui/icons/NoReturnsIcon"

type EmptyType =
  | "Addresses"
  | "Orders"
  | "SubscriptionPayments"
  | "SubscriptionOrders"
  | "Subscriptions"
  | "PaymentMethods"
  | "Returns"

interface Props {
  type: EmptyType
  descriptionDetail?: string
  buttonClick?: () => void
}

const emptyTypes = [
  {
    type: "Addresses",
    icon: <NoAddressesIcon />,
  },
  {
    type: "Orders",
    icon: <NoOrdersIcon />,
  },
  {
    type: "SubscriptionPayments",
    icon: <NoPaymentMethodsIcon width={84} />,
  },
  {
    type: "SubscriptionOrders",
    icon: <NoOrdersIcon width={108} />,
  },
  {
    type: "Subscriptions",
    icon: <NoOrdersIcon />,
  },
  {
    type: "PaymentMethods",
    icon: <NoPaymentMethodsIcon />,
  },
  {
    type: "Returns",
    icon: <NoReturnsIcon />,
  },
]

function Empty({ type, descriptionDetail, buttonClick }: Props): JSX.Element {
  const { t } = useTranslation()
  const icon = emptyTypes.find((emptyType) => emptyType.type === type)?.icon

  return (
    <div className="flex flex-col items-center content-center">
      {icon}
      <p className="text-sm md:text-lg font-semibold mt-8">{t(`no${type}.title`)}</p>
      <p className="text-ss text-gray-500 mt-1">{`${t(`no${type}.description`)}${descriptionDetail ?? ""}`}</p>
      {buttonClick && (
        <Button
          className="mt-8"
          label={t(`no${type}.buttonLabel`) as string}
          onClick={buttonClick}
        />
      )}
    </div>
  )
}

export default Empty
