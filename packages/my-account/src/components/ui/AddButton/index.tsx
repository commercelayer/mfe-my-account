import { PlusCircle } from "phosphor-react"
import { useTranslation } from "react-i18next"

import { Wrapper, Label } from "./styled"

interface Props {
  action: () => void
  testId: string
}

export function AddButton(props: Props): JSX.Element {
  const { t } = useTranslation()

  const { action, testId } = props

  return (
    <Wrapper onClick={action} className="group" data-test-id={testId}>
      <PlusCircle className="w-5 md:w-6" />
      <Label>{t("addresses.addNewAddress")}</Label>
    </Wrapper>
  )
}
