import SkeletonMain from "components/composite/Skeleton/Main"
import {
  Sidebar,
  SkeletonLogoWrapper,
  SkeletonLogo,
  SkeletonMenuItem,
  SkeletonMenuItemIcon,
  SkeletonMenuItemLabel,
} from "components/composite/Skeleton/styled"
import { LayoutDefault } from "components/layouts/LayoutDefault"

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
          <MenuItem className="mt-12" />
          <MenuItem className="mt-7" />
          <MenuItem className="mt-7" />
          <MenuItem className="mt-7" />
          <MenuItem className="mt-32" />
          <MenuItem className="mt-7" />
        </Sidebar>
      }
      main={<SkeletonMain />}
    />
  )
}

export default CustomerSkeleton
