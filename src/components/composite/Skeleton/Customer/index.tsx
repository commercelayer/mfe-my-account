import {
  SkeletonMainHeader,
  SkeletonMainLoader,
} from "src/components/composite/Skeleton/Main"
import {
  Sidebar,
  Main,
  SkeletonLogoWrapper,
  SkeletonLogo,
  SkeletonMenuItem,
  SkeletonMenuItemIcon,
  SkeletonMenuItemLabel,
} from "src/components/composite/Skeleton/styled"
import { LayoutDefault } from "src/components/layouts/LayoutDefault"

type MenuItemProps = {
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
          <MenuItem className="mt-12" />
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
