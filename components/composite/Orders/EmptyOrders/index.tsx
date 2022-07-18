import styled from "styled-components"
import tw from "twin.macro"

import { useTranslation } from "react-i18next"

import NoOrdersIcon from "components/ui/icons/NoOrdersIcon"
import Button from "components/ui/Button"

const EmptyOrders: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <NoOrdersIcon />
      <Title>{ t("noOrders.title") }</Title>
      <Description>{ t("noOrders.description") }</Description>
      <NoItemsButton label={ t("noOrders.buttonLabel") } />
    </Wrapper>
  )
}

export default EmptyOrders

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
