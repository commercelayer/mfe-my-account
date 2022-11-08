import { useRouter } from "next/router"

import {
  SkeletonMainAddresses,
  SkeletonMainOrders,
  SkeletonMainOrder,
  SkeletonMainParcel,
} from "src/components/composite/Skeleton/Main"

export const SkeletonMainLoader: React.FC = () => {
  const router = useRouter()
  switch (router.pathname) {
    case "/addresses":
      return <SkeletonMainAddresses />
    case "/orders/[orderId]":
      return <SkeletonMainOrder />
    case "/orders/[orderId]/parcels/[parcelId]":
      return <SkeletonMainParcel />
    case "/orders":
    default:
      return <SkeletonMainOrders />
  }
}
