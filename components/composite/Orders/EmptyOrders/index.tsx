import { useTranslation } from "react-i18next"

import NoOrdersIcon from "components/ui/icons/NoOrdersIcon"

import { Wrapper, Title, Description, NoItemsButton } from "./styled"

const EmptyOrders: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <NoOrdersIcon />
      <Title>{t("noOrders.title")}</Title>
      <Description>{t("noOrders.description")}</Description>
      <NoItemsButton label={t("noOrders.buttonLabel")} />
    </Wrapper>
  )
}

export default EmptyOrders
