import { PlusCircle } from "phosphor-react"
import { useTranslation } from "react-i18next"

interface Props {
  action: () => void
  testId: string
}

export function AddButton(props: Props): JSX.Element {
  const { t } = useTranslation()

  const { action, testId } = props

  return (
    <div onClick={action} className="group w-full flex py-2 justify-center items-center text-center px-2 bg-gray-50 text-gray-500 border border-gray-300 rounded cursor-pointer hover:border-gray-400 transition duration-200 ease-in" data-test-id={testId}>
      <PlusCircle className="w-5 md:w-6" />
      <p className="text-xs px-0.5">{t("addresses.addNewAddress")}</p>
    </div>
  )
}
