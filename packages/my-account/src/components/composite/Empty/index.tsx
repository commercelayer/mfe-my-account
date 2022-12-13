import { useTranslation } from "react-i18next"

import { Wrapper, Title, Description, NoItemsButton } from "./styled"

import NoAddressesIcon from "#components/ui/icons/NoAddressesIcon"
import NoOrdersIcon from "#components/ui/icons/NoOrdersIcon"
import NoPaymentMethodsIcon from "#components/ui/icons/NoPaymentMethodsIcon"
import NoReturnsIcon from "#components/ui/icons/NoReturnsIcon"

type EmptyType = "Addresses" | "Orders" | "PaymentMethods" | "Returns"

interface Props {
  type: EmptyType
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
    type: "PaymentMethods",
    icon: <NoPaymentMethodsIcon />,
  },
  {
    type: "Returns",
    icon: <NoReturnsIcon />,
  },
]

function Empty({ type, buttonClick }: Props): JSX.Element {
  const { t } = useTranslation()
  const icon = emptyTypes.find((emptyType) => emptyType.type === type)?.icon

  return (
    <Wrapper>
      {icon}
      <Title>{t(`no${type}.title`)}</Title>
      <Description>{t(`no${type}.description`)}</Description>
      {buttonClick && (
        <NoItemsButton
          label={t(`no${type}.buttonLabel`) as string}
          onClick={buttonClick}
        />
      )}
    </Wrapper>
  )
}

export default Empty
