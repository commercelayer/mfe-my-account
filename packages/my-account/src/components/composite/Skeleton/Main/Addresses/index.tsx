import {
  SkeletonMainPageTitle,
  SkeletonMainAddressCard,
} from "#components/composite/Skeleton/Main/Common"
import {
  SkeletonWrapper,
  SkeletonButton,
} from "#components/composite/Skeleton/styled"

interface Props {
  visible?: boolean
}

export function SkeletonMainAddresses({ visible = true }: Props): JSX.Element {
  return (
    <SkeletonWrapper visible={visible}>
      <SkeletonMainPageTitle />
      <SkeletonMainAddressCard showActions />
      <SkeletonButton className="w-full mt-8" />
    </SkeletonWrapper>
  )
}
