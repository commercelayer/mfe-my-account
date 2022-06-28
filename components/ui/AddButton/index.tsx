import { useTranslation } from "react-i18next"
import AddSolidIcon from "components/ui/icons/AddSolidIcon"

import { Wrapper, Label } from "./styled"

interface Props {
  action: () => void
}

export const AddButton: React.FC<Props> = ({ action }) => {
  const { t } = useTranslation()

  return (
    <Wrapper onClick={action} className="group">
      <AddSolidIcon />
      <Label>{t("addresses.addNewAddress")}</Label>
    </Wrapper>
  )
}
