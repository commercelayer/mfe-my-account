import styled from "styled-components"
import tw from "twin.macro"

import { useTranslation } from "react-i18next"

import NoReturnsIcon from "components/ui/icons/NoReturnsIcon"
import Button from "components/ui/Button"

interface Props {
  settings: CustomerSettings
}

const EmptyReturns: React.FC<Props> = ({settings}) => {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <NoReturnsIcon />
      <Title>{ t("noReturns.title") }</Title>
      <Description>{ t("noReturns.description") }</Description>
      <NoItemsButton label={ t("noReturns.buttonLabel") } />
    </Wrapper>
  )
}

export default EmptyReturns

export const Wrapper = styled.div`
  ${tw`flex flex-col items-center content-center`}
`

export const Title = styled.p`
  ${tw`text-sm md:text-lg font-semibold mt-8`}
`

export const Description = styled.p`
  ${tw`text-ss text-gray-500 mt-1`}
`

export const NoItemsButton = styled(Button)`
  ${tw`mt-8`}
`
