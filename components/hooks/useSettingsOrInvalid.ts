import { useRouter } from "next/router"
import { useEffect, useRef } from "react"
import useSWR from "swr"

import { useLocalStorageToken } from "./useLocalStorageToken"

const fetcher = (url: string) => fetch(url).then((r) => r.json())

interface UseSettingsOrInvalid {
  settings: CustomerSettings | undefined
  retryOnError?: boolean
  isLoading: boolean
}

export const useSettingsOrInvalid = (): UseSettingsOrInvalid => {
  const router = useRouter()
  const { accessToken } = router.query

  const [savedAccessToken, setAccessToken] = useLocalStorageToken(
    "userAreaAccessToken",
    accessToken as string
  )

  useEffect(() => {
    if (router.isReady && accessToken && accessToken !== savedAccessToken) {
      setAccessToken(accessToken)
    }
  }, [router])

  const { data, error } = useSWR(
    router.isReady
      ? `${process.env.NEXT_PUBLIC_BASE_PATH}/api/settings?accessToken=${accessToken}`
      : null,
    fetcher,
    { revalidateOnFocus: false }
  )

  if (router.isReady && !accessToken) {
    router.push("/404")
    return { settings: undefined, isLoading: false }
  }

  if (!data && !error) {
    return { settings: undefined, isLoading: true }
  }

  if (error || !data?.validUserArea) {
    if (!data?.retryOnError) {
      router.push("/404")
    }
    return { settings: undefined, retryOnError: true, isLoading: false }
  }

  return {
    settings: data,
    isLoading: false,
  }
}
