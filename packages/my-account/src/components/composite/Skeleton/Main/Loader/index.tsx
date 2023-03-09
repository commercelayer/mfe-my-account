import { useLocation } from "wouter"

import {
  SkeletonMainAddresses,
  SkeletonMainWallet,
  SkeletonMainOrders,
  SkeletonMainOrder,
  SkeletonMainParcel,
} from "#components/composite/Skeleton/Main"

export function SkeletonMainLoader(): JSX.Element {
  const [location] = useLocation()
  switch (true) {
    case /\/addresses/.test(location):
      return <SkeletonMainAddresses />
    case /\/wallet/.test(location):
      return <SkeletonMainWallet />
    case /\/parcels/.test(location):
      return <SkeletonMainParcel />
    case /\/orders/.test(location):
      return <SkeletonMainOrder />
    default:
      return <SkeletonMainOrders />
  }
}
