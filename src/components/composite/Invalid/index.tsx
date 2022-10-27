import { useTranslation } from "react-i18next"

import { ErrorContainer } from "src/components/composite/ErrorContainer"
import { ErrorCode, Text } from "src/components/composite/ErrorContainer/styled"

const Invalid: React.FC = () => {
  const { t } = useTranslation()

  return (
    <ErrorContainer>
      <ErrorCode>404</ErrorCode>
      <Text data-test-id="invalid-checkout">{t("general.invalid")}</Text>
    </ErrorContainer>
  )
}

export default Invalid
