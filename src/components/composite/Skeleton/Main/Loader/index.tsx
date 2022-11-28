import { useLocation } from "wouter"

import {
  SkeletonMainAddresses,
  SkeletonMainOrders,
  SkeletonMainOrder,
  SkeletonMainParcel,
} from "#components/composite/Skeleton/Main"

export const SkeletonMainLoader: React.FC = () => {
  const [location] = useLocation()
  if (location === "/addresses") {
    return <SkeletonMainAddresses />
  } else if (location.indexOf("/parcels") > -1) {
    return <SkeletonMainParcel />
  } else if (location.indexOf("/orders/") > -1) {
    return <SkeletonMainOrder />
  } else {
    return <SkeletonMainOrders />
  }
}
