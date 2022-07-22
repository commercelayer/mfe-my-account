import { useTranslation } from "react-i18next"

import NoReturnsIcon from "components/ui/icons/NoReturnsIcon"

import { Wrapper, Title, Description, NoItemsButton } from "./styled"

const EmptyReturns: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <NoReturnsIcon />
      <Title>{t("noReturns.title")}</Title>
      <Description>{t("noReturns.description")}</Description>
      <NoItemsButton label={t("noReturns.buttonLabel")} />
    </Wrapper>
  )
}

export default EmptyReturns
