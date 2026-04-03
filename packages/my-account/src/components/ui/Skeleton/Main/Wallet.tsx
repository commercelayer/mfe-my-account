import { SkeletonWrapper } from "#components/ui/Skeleton"
import {
  SkeletonMainPageTitle,
  SkeletonMainWalletCard,
} from "#components/ui/Skeleton/Main/Common"

interface Props {
  visible?: boolean
}

export function SkeletonMainWallet({ visible = true }: Props): JSX.Element {
  return (
    <SkeletonWrapper visible={visible}>
      <SkeletonMainPageTitle />
      <SkeletonMainWalletCard />
    </SkeletonWrapper>
  )
}
