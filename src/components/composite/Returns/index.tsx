import { useTranslation } from "react-i18next"

import Title from "src/components/ui/Title"

import { ReturnsContainer } from "./styled"

const Returns: React.FC = () => {
  const { t } = useTranslation()

  return (
    <ReturnsContainer>
      <Title>{t("returns.title")}</Title>
    </ReturnsContainer>
  )
}

export default Returns
