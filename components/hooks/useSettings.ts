import { useRouter } from "next/router"
import useSWR from "swr"

const fetcher = (url: string) => fetch(url).then((r) => r.json())

interface UseSettings {
  settings: CustomerSettings | undefined
  isLoading: boolean
}

export const useSettings = (): UseSettings => {
  const router = useRouter()
  const { accessToken } = router.query

  const { data, error } = useSWR(
    router.isReady ? `/api/settings?accessToken=${accessToken}` : null,
    fetcher
  )

  if (!data && !error) {
    return { settings: undefined, isLoading: true }
  }

  if (error || !data?.validUserArea) {
    return { settings: undefined, isLoading: false }
  }

  return {
    settings: data,
    isLoading: false,
  }
}
