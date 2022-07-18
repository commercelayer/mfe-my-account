import { useTranslation } from "react-i18next"
import styled from "styled-components"
import tw from "twin.macro"

import Title from "components/ui/Title"

interface Props {
  settings: CustomerSettings
}

const Returns: React.FC<Props> = ({settings}) => {
  const { t } = useTranslation()
  
  return (
    <ReturnsContainer>
      <Title>{t("returns.title")}</Title>
        
    </ReturnsContainer>
  )
}

export default Returns

const ReturnsContainer = styled.div`
  ${tw``}
`