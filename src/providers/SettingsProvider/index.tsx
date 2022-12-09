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
  children:
    | ((props: SettingsProviderValue) => React.ReactNode)
    | React.ReactNode
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

export const SettingsProvider: React.FC<SettingsProviderProps> = ({
  children,
}) => {
  const [settings, setSettings] = useState<Settings | InvalidSettings>(
    defaultSettings
  )
  const [isLoading, setIsLoading] = useState(true)
  const accessToken = getAccessTokenFromUrl()
  
  useEffect(() => {
    setIsLoading(!!accessToken)

    if (accessToken) {
      getSettings({ accessToken })
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
