import { useTranslation } from "react-i18next"

import { LogoCL } from "#components/ui/LogoCL"

interface Props {
  termsUrl?: string
  privacyUrl?: string
}

function Footer({ termsUrl, privacyUrl }: Props): JSX.Element {
  const { t } = useTranslation()

  return (
    <div className="flex py-3 bg-inherit text-xs text-gray-500 -mx-5 px-5 lg:mx-0 lg:border-t lg:border-gray-300 lg:z-20 lg:px-0 lg:pb-3 lg:mt-20 overflow-hidden z-10">
      <a
        target="_blank"
        href="https://commercelayer.io/"
        rel="noreferrer"
        className="group"
      >
        <div className="flex flex-col gap-2">
          powered by <LogoCL width="135" height="22" />
        </div>
      </a>
      {(termsUrl || privacyUrl) && (
        <div className="overflow-hidden">
          <ul className="flex flex-row flex-wrap justify-between -ml-0.5">
            {termsUrl && (
              <li className="flex-grow px-1.5 md:px-4 border-l font-medium">
                <a target="_blank" href={termsUrl} rel="noreferrer">
                  {t("general.terms_link")}
                </a>
              </li>
            )}
            {privacyUrl && (
              <li className="flex-grow px-1.5 md:px-4 border-l font-medium">
                <a target="_blank" href={privacyUrl} rel="noreferrer">
                  {t("general.privacy_link")}
                </a>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Footer
