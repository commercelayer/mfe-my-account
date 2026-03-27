import { SkeletonBox, SkeletonWrapper } from "#components/ui/Skeleton"
import {
  SkeletonMainAddressCard,
  SkeletonMainPageTitle,
} from "#components/ui/Skeleton/Main/Common"

interface Props {
  visible?: boolean
}

export function SkeletonMainAddresses({ visible = true }: Props): JSX.Element {
  return (
    <SkeletonWrapper visible={visible}>
      <SkeletonMainPageTitle />
      <SkeletonMainAddressCard showActions />
      <SkeletonBox className="h-14 w-full mt-8" />
    </SkeletonWrapper>
  )
}
