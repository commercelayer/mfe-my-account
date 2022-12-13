import {
  SkeletonMainHeader,
  SkeletonMainLoader,
} from "#components/composite/Skeleton/Main"
import {
  Sidebar,
  Main,
  SkeletonLogoWrapper,
  SkeletonLogo,
  SkeletonMenuItem,
  SkeletonMenuItemIcon,
  SkeletonMenuItemLabel,
} from "#components/composite/Skeleton/styled"
import { LayoutDefault } from "#components/layouts/LayoutDefault"

interface MenuItemProps {
  className?: string
}

function MenuItem({ className }: MenuItemProps): JSX.Element {
  return (
    <SkeletonMenuItem className={className}>
      <SkeletonMenuItemIcon />
      <SkeletonMenuItemLabel />
    </SkeletonMenuItem>
  )
}

export function CustomerSkeleton(): JSX.Element {
  return (
    <LayoutDefault
      isGuest={false}
      aside={
        <Sidebar>
          <SkeletonLogoWrapper>
            <SkeletonLogo />
          </SkeletonLogoWrapper>
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
        </Sidebar>
      }
      main={
        <Main>
          <SkeletonMainHeader />
          <SkeletonMainLoader />
        </Main>
      }
    />
  )
}

export default CustomerSkeleton
