import { useTranslation } from "react-i18next"

import { ReturnsContainer } from "./styled"

import Title from "#components/ui/Title"

const Returns: React.FC = () => {
  const { t } = useTranslation()

  return (
    <ReturnsContainer>
      <Title>{t("returns.title")}</Title>
    </ReturnsContainer>
  )
}

export default Returns
