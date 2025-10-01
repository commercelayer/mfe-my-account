import { useTranslation } from "react-i18next"

import { ErrorContainer } from "#components/ui/ErrorContainer"

interface Props {
  statusCode?: string
  message?: string
}

function Invalid(props: Props): JSX.Element {
  const { t } = useTranslation()

  const { statusCode = "404", message = t("general.invalid") } = props

  return (
    <ErrorContainer>
      <p className="p-4 text-xl font-bold border-gray-300 text-gray-800 border-b  md:border-r md:border-b-0">
        {statusCode}
      </p>
      <p className="p-4 text-sm font-normal text-gray-500">{message}</p>
    </ErrorContainer>
  )
}

export default Invalid
