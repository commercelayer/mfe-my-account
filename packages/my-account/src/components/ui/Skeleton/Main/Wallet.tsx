import {
  SkeletonMainPageTitle,
  SkeletonMainWalletCard,
} from "#components/ui/Skeleton/Main/Common"
import { SkeletonWrapper } from "#components/ui/Skeleton"

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
