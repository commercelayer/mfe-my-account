import {
  SkeletonMainPageTitle,
  SkeletonMainAddressCard,
} from "#components/composite/Skeleton/Main/Common"
import {
  SkeletonWrapper,
  SkeletonButton,
} from "#components/composite/Skeleton/styled"

interface Props {
  shown?: boolean
}

export const SkeletonMainAddresses: React.FC<Props> = ({ shown = true }) => {
  return (
    <SkeletonWrapper shown={shown}>
      <SkeletonMainPageTitle />
      <SkeletonMainAddressCard showActions />
      <SkeletonButton className="w-full mt-8" />
    </SkeletonWrapper>
  )
}
