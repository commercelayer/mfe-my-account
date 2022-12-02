import { useLocation } from "wouter"

import {
  SkeletonMainAddresses,
  SkeletonMainOrders,
  SkeletonMainOrder,
  SkeletonMainParcel,
} from "#components/composite/Skeleton/Main"

export const SkeletonMainLoader: React.FC = () => {
  const [location] = useLocation()
  switch(true) {
    case /\/addresses/.test(location):
      return <SkeletonMainAddresses />
    case /\/parcels/.test(location):
      return <SkeletonMainParcel />
    case /\/orders/.test(location):
      return <SkeletonMainOrder />
    default:
      return <SkeletonMainOrders />
  }
}
