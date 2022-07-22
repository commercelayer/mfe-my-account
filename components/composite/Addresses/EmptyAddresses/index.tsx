import { useTranslation } from "react-i18next"

import NoAddressesIcon from "components/ui/icons/NoAddressesIcon"

import { Wrapper, Title, Description, NoItemsButton } from "./styled"

const EmptyAddresses: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <NoAddressesIcon />
      <Title>{t("noAddresses.title")}</Title>
      <Description>{t("noAddresses.description")}</Description>
      <NoItemsButton label={t("noAddresses.buttonLabel")} />
    </Wrapper>
  )
}

export default EmptyAddresses
