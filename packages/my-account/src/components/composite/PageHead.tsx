import type { Settings } from "HostedApp"
import { Helmet, HelmetProvider } from "react-helmet-async"
import { useTranslation } from "react-i18next"

import { defaultSettings } from "#utils/getSettings"

type Props = Partial<Pick<Settings, "faviconUrl">> & {
  /**
   * Page title, if `undefined` default app title will be used.
   */
  title?: string
}

export function PageHead({ faviconUrl, title }: Props): JSX.Element {
  const { t } = useTranslation()

  return (
    <HelmetProvider>
      <Helmet>
        <title>{title || t("general.title")}</title>
        <link rel="icon" href={faviconUrl || defaultSettings.faviconUrl} />
      </Helmet>
    </HelmetProvider>
  )
}
