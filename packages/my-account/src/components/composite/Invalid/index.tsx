import { useTranslation } from "react-i18next"

import { ErrorContainer } from "#components/composite/ErrorContainer"
import { ErrorCode, Text } from "#components/composite/ErrorContainer/styled"

function Invalid(): JSX.Element {
  const { t } = useTranslation()

  return (
    <ErrorContainer>
      <ErrorCode>404</ErrorCode>
      <Text data-test-id="invalid-checkout">{t("general.invalid")}</Text>
    </ErrorContainer>
  )
}

export default Invalid
