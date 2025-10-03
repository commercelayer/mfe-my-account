import { useTranslation } from "react-i18next"

import Title from "#components/ui/Title"

function Returns(): JSX.Element {
  const { t } = useTranslation()

  return (
    <div>
      <Title>{t("returns.title")}</Title>
    </div>
  )
}

export default Returns
