import { SkeletonMainLoader } from "src/components/composite/Skeleton/Main"
import {
  Sidebar,
  SkeletonHeader,
  SkeletonTitle,
  SkeletonSpacer,
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
        <>
          <SkeletonHeader>
            <SkeletonTitle />
          </SkeletonHeader>
          <SkeletonSpacer />
          <SkeletonSpacer />
          <SkeletonMainLoader />
        </>
      }
    />
  )
}

export default CustomerSkeleton
