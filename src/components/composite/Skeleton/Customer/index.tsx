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

const MenuItem: React.FC<MenuItemProps> = ({ className }) => {
  return (
    <SkeletonMenuItem className={className}>
      <SkeletonMenuItemIcon />
      <SkeletonMenuItemLabel />
    </SkeletonMenuItem>
  )
}

export const CustomerSkeleton: React.FC = () => {
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
