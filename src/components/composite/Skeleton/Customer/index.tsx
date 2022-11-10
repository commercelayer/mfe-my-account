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
          <div className="w-[240px]">
            <SkeletonLogoWrapper>
              <SkeletonLogo />
            </SkeletonLogoWrapper>
            <MenuItem className="mt-12" />
            <MenuItem className="mt-7" />
            <MenuItem className="mt-7" />
            <MenuItem className="mt-7" />
            <MenuItem className="mt-20" />
          </div>
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
