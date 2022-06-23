import { useTranslation } from "react-i18next"
import styled from "styled-components"
import tw from "twin.macro"

import { Logo } from "./cl"

interface Props {
  termsUrl?: string
  privacyUrl?: string
}

const Footer: React.FC<Props> = ({ termsUrl, privacyUrl }) => {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <a
        target="_blank"
        href="https://commercelayer.io/"
        rel="noreferrer"
        className="group"
      >
        <LogoWrapper>
          Powered by <Logo width="135" height="22" className="pl-2" />
        </LogoWrapper>
      </a>
      {(termsUrl || privacyUrl) && (
        <ListWrapper>
          <ListLink>
            {termsUrl && (
              <ListItem>
                <a target="_blank" href={termsUrl} rel="noreferrer">
                  {t("general.terms_link")}
                </a>
              </ListItem>
            )}
            {privacyUrl && (
              <ListItem>
                <a target="_blank" href={privacyUrl} rel="noreferrer">
                  {t("general.privacy_link")}
                </a>
              </ListItem>
            )}
          </ListLink>
        </ListWrapper>
      )}
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.div`
  ${tw`flex py-3 bg-gray-50 md:bg-white text-xs text-gray-500 sticky bottom-0 md:(border-t border-gray-300 z-20 pb-3 mt-20) overflow-hidden`}

  &::before {
    ${tw`md:(top-0 absolute left-0 w-full z-10 h-2 shadow-top)`}

    content: "";
  }
`
const LogoWrapper = styled.div`
  ${tw`flex items-center`}
`
const ListWrapper = styled.div`
  ${tw`overflow-hidden`}
`
const ListLink = styled.ul`
  ${tw`flex flex-row flex-wrap justify-between -ml-0.5`}
`
const ListItem = styled.li`
  ${tw`flex-grow px-1.5 md:px-4 border-l font-medium`}
`
