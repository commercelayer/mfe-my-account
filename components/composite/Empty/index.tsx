import { useTranslation } from "react-i18next"

import NoAddressesIcon from "components/ui/icons/NoAddressesIcon"
import NoOrdersIcon from "components/ui/icons/NoOrdersIcon"
import NoPaymentMethodsIcon from "components/ui/icons/NoPaymentMethodsIcon"
import NoReturnsIcon from "components/ui/icons/NoReturnsIcon"

import { Wrapper, Title, Description, NoItemsButton } from "./styled"

export type EmptyType = "Addresses" | "Orders" | "PaymentMethods" | "Returns"

// TODO: Define a prop for the CTA click handler
interface Props {
  type: EmptyType
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
    type: "PaymentMethods",
    icon: <NoPaymentMethodsIcon />,
  },
  {
    type: "Returns",
    icon: <NoReturnsIcon />,
  },
]

const Empty: React.FC<Props> = ({ type }) => {
  const { t } = useTranslation()
  const icon = emptyTypes.find((emptyType) => emptyType.type === type)?.icon

  return (
    <Wrapper>
      {icon}
      <Title>{t(`no${type}.title`)}</Title>
      <Description>{t(`no${type}.description`)}</Description>
      <NoItemsButton label={t(`no${type}.buttonLabel`) as string} />
    </Wrapper>
  )
}

export default Empty
