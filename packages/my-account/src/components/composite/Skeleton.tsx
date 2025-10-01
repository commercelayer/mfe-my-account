import { useEffect, useState, lazy, Suspense } from "react"

import { isGuest } from "#utils/isGuest"

const LazySkeletonCustomer = lazy(
  () => import("#components/ui/Skeleton/Customer")
)
const LazySkeletonGuest = lazy(
  () => import("#components/ui/Skeleton/Guest")
)

export function Skeleton(): JSX.Element {
  const [showSkeletonGuest, setShowSkeletonGuest] = useState<null | boolean>(
    null
  )

  useEffect(() => {
    const guest = async () => {
      try {
        const appIsGuest = await isGuest()
        setShowSkeletonGuest(appIsGuest)
      } catch (e) {
        //
      }
    }
    guest()
  }, [])

  if (showSkeletonGuest === null) {
    return <></>
  }

  return showSkeletonGuest === true ? (
    <Suspense fallback={<></>}>
      <LazySkeletonGuest />
    </Suspense>
  ) : (
    <Suspense fallback={<></>}>
      <LazySkeletonCustomer />
    </Suspense>
  )
}

export default Skeleton
