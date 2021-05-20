import { useRouter } from "next/router"
import useSWR from "swr"

const fetcher = (url: string) => fetch(url).then((r) => r.json())

interface UseSettingsOrInvalid {
  settings: CustomerSettings | undefined
  isLoading: boolean
}

export const useSettingsOrInvalid = (): UseSettingsOrInvalid => {
  const router = useRouter()
  const { accessToken } = router.query

  const { data, error } = useSWR(
    router.isReady ? `/api/settings?accessToken=${accessToken}` : null,
    fetcher
  )

  if (!data && !error) {
    return { isLoading: true, settings: undefined }
  }

  if (error || (data && !data.validUserArea)) {
    router.push("/invalid")
    return { settings: undefined, isLoading: false }
  }

  return {
    settings: data,
    isLoading: false,
  }
}
