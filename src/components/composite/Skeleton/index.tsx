import { useEffect, useState } from "react"
import { lazy, Suspense } from "react"

// import CustomerSkeleton from "#components/composite/Skeleton/Customer"
// import GuestSkeleton from "#components/composite/Skeleton/Guest"

const LazyCustomerSkeleton = lazy(() => import("#components/composite/Skeleton/Customer"))
const LazyGuestSkeleton = lazy(() => import("#components/composite/Skeleton/Guest"))

import { isGuest } from "#utils/isGuest"

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

  return showGuestSkeleton === true 
    ? ( <Suspense fallback={(<></>)}><LazyGuestSkeleton /></Suspense>)
    : ( <Suspense fallback={(<></>)}><LazyCustomerSkeleton /></Suspense>)
}

export default Skeleton
