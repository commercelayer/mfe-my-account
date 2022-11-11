import { SkeletonMainLoader } from "src/components/composite/Skeleton/Main"
import {
  Sidebar,
  Main,
  SkeletonHeader,
  SkeletonRow,
  SkeletonTitle,
  SkeletonSpacer,
  SkeletonSpan,
  SkeletonCircle,
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
          <SkeletonHeader className="h-[50px]">
            <SkeletonTitle />
            <SkeletonRow className="items-center">
              <SkeletonSpan size={"medium"} />
              <SkeletonCircle className="w-8 h-8" />
            </SkeletonRow>
          </SkeletonHeader>
          <SkeletonSpacer />
          <SkeletonSpacer />
          <SkeletonMainLoader />
        </Main>
      }
    />
  )
}

export default CustomerSkeleton
