import { useTranslation } from "react-i18next"

import { ErrorContainer } from "#components/ui/ErrorContainer"

export const RetryError = () => {
  const { t } = useTranslation()

  return (
    <ErrorContainer>
      <p className="p-4 text-xl font-bold border-gray-300 text-gray-800 border-b  md:border-r md:border-b-0">
        {t("general.retry_error_code")}
      </p>
      <p className="p-4 text-sm font-normal text-gray-500" data-test-id="invalid-checkout">
        {t("general.retry_error_description")}
      </p>
    </ErrorContainer>
  )
}
