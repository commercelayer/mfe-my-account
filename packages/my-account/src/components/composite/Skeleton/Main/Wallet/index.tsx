import {
  SkeletonMainPageTitle,
  SkeletonMainWalletCard,
} from "#components/composite/Skeleton/Main/Common"
import { SkeletonWrapper } from "#components/composite/Skeleton/styled"

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
