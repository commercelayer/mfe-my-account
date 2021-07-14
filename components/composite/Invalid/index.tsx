import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import styled from "styled-components"
import tw from "twin.macro"

const Invalid: React.FC = () => {
  const { t } = useTranslation()
  const [title, setTitle] = useState("")

  useEffect(() => {
    window && setTitle(window.location.hostname)
  }, [])

  return (
    <Base>
      <Container>
        <Wrapper>
          <Text tw="text-center text-lg font-bold pt-10 mb-10 pl-4">
            {title}
          </Text>
          <div>
            <Text data-cy="invalid-checkout" tw="py-5 h-44 text-center">
              {t("general.invalid")}
            </Text>
          </div>
        </Wrapper>
      </Container>
    </Base>
  )
}

const Base = styled.div`
  ${tw`bg-gray-100 min-h-screen`}
`
const Container = styled.div`
  ${tw`flex items-center justify-center`}
`
const Wrapper = styled.div`
  ${tw`flex-1 max-w-screen-sm	items-center justify-center`}
`
const Text = styled.p`
  ${tw`py-5 h-20 text-center`}
`

export default Invalid
