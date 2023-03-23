import type { Settings, InvalidSettings } from "HostedApp"
import { changeLanguage } from "i18next"
import { createContext, useContext, useEffect, useState } from "react"

import { getAccessTokenFromUrl } from "#utils/getAccessTokenFromUrl"
import { defaultSettings, getSettings } from "#utils/getSettings"
import { parseLanguageCode } from "#utils/parseLanguageCode"

interface SettingsProviderValue {
  settings: Settings | InvalidSettings
  isLoading: boolean
}

interface SettingsProviderProps {
  /**
   * If needed, context value can be also accessed using a function as a child.
   *
   * Example:
   * ```
   * <SettingsProvider config={config}>
   *  {(ctx) => <div>my-account</div>}
   * </SettingsProvider>
   * ```
   */
  children:
    | ((props: SettingsProviderValue) => React.ReactNode)
    | React.ReactNode
  config: CommerceLayerAppConfig
}

const initialValues: SettingsProviderValue = {
  settings: defaultSettings,
  isLoading: true,
}

export const SettingsContext =
  createContext<SettingsProviderValue>(initialValues)

export const useSettings = (): SettingsProviderValue => {
  const ctx = useContext(SettingsContext)
  return {
    settings: ctx.settings,
    isLoading: !!ctx.isLoading,
  }
}

export function SettingsProvider({
  config,
  children,
}: SettingsProviderProps): JSX.Element {
  const [settings, setSettings] = useState<Settings | InvalidSettings>(
    defaultSettings
  )
  const [isLoading, setIsLoading] = useState(true)
  const accessToken = getAccessTokenFromUrl()

  useEffect(() => {
    setIsLoading(!!accessToken)

    if (accessToken) {
      getSettings({ accessToken, config })
        .then(setSettings)
        .finally(() => {
          setIsLoading(false)
        })
    }
  }, [accessToken])

  // keep i18n in sync
  useEffect(() => {
    if (settings.language) {
      changeLanguage(parseLanguageCode(settings.language))
    }
  }, [settings.language])

  const value = { settings, isLoading }
  return (
    <SettingsContext.Provider value={value}>
      {typeof children === "function" ? children(value) : children}
    </SettingsContext.Provider>
  )
}
