import { useEffect, useState, lazy, Suspense } from "react"

import { isGuest } from "#utils/isGuest"

const LazyCustomerSkeleton = lazy(
  () => import("#components/composite/Skeleton/Customer")
)
const LazyGuestSkeleton = lazy(
  () => import("#components/composite/Skeleton/Guest")
)

export const Skeleton: React.FC = () => {
  const [showGuestSkeleton, setShowGuestSkeleton] = useState<null | boolean>(
    null
  )

  useEffect(() => {
    const guest = async () => {
      try {
        const appIsGuest = await isGuest()
        setShowGuestSkeleton(appIsGuest)
      } catch (e) {
        //
      }
    }
    guest()
  }, [])

  if (showGuestSkeleton === null) {
    return <></>
  }

  return showGuestSkeleton === true ? (
    <Suspense fallback={<></>}>
      <LazyGuestSkeleton />
    </Suspense>
  ) : (
    <Suspense fallback={<></>}>
      <LazyCustomerSkeleton />
    </Suspense>
  )
}

export default Skeleton
