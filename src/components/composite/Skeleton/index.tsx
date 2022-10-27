import { useEffect, useState } from "react"

import CustomerSkeleton from "src/components/composite/Skeleton/Customer"
import GuestSkeleton from "src/components/composite/Skeleton/Guest"

import { isGuest } from "src/utils/isGuest"

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

  return showGuestSkeleton === true ? <GuestSkeleton /> : <CustomerSkeleton />
}

export default Skeleton
