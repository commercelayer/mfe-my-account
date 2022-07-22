import { useTranslation } from "react-i18next"

import { Logo } from "./cl"
import { Wrapper, LogoWrapper, ListWrapper, ListLink, ListItem } from "./styled"

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
