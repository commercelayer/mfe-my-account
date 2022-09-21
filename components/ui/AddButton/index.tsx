import { PlusCircle } from "phosphor-react"
import { useTranslation } from "react-i18next"

import { Wrapper, Label } from "./styled"

interface Props {
  action: () => void
}

export const AddButton: React.FC<Props> = (props) => {
  const { t } = useTranslation()

  const { action } = props

  return (
    <Wrapper onClick={action} className="group" {...props}>
      <PlusCircle className="w-5 md:w-6" />
      <Label>{t("addresses.addNewAddress")}</Label>
    </Wrapper>
  )
}
