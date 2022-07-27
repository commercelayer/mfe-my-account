import {
  Sidebar,
  SkeletonLogoWrapper,
  SkeletonLogo,
  SkeletonMenuItem,
  SkeletonMenuItemIcon,
  SkeletonMenuItemLabel,
  SkeletonWrapper,
  SkeletonHeader,
  SkeletonTitle,
  SkeletonTableRow,
  SkeletonTableTh,
  SkeletonTableTd,
} from "components/composite/Skeleton/styled"
import { LayoutDefault } from "components/layouts/LayoutDefault"

export const CustomerSkeleton: React.FC = () => {
  return (
    <LayoutDefault
      isGuest={false}
      aside={
        <Sidebar>
          <SkeletonLogoWrapper>
            <SkeletonLogo />
          </SkeletonLogoWrapper>
          <SkeletonMenuItem className="mt-12">
            <SkeletonMenuItemIcon />
            <SkeletonMenuItemLabel />
          </SkeletonMenuItem>
          <SkeletonMenuItem className="mt-7">
            <SkeletonMenuItemIcon />
            <SkeletonMenuItemLabel />
          </SkeletonMenuItem>
          <SkeletonMenuItem className="mt-7">
            <SkeletonMenuItemIcon />
            <SkeletonMenuItemLabel />
          </SkeletonMenuItem>
          <SkeletonMenuItem className="mt-7">
            <SkeletonMenuItemIcon />
            <SkeletonMenuItemLabel />
          </SkeletonMenuItem>
          <SkeletonMenuItem className="mt-32">
            <SkeletonMenuItemIcon />
            <SkeletonMenuItemLabel />
          </SkeletonMenuItem>
          <SkeletonMenuItem className="mt-7">
            <SkeletonMenuItemIcon />
            <SkeletonMenuItemLabel />
          </SkeletonMenuItem>
        </Sidebar>
      }
      main={
        <SkeletonWrapper>
          <SkeletonHeader>
            <SkeletonTitle />
          </SkeletonHeader>
          <SkeletonTableRow>
            <SkeletonTableTh />
            <SkeletonTableTh />
            <SkeletonTableTh />
            <SkeletonTableTh />
          </SkeletonTableRow>
          <SkeletonTableRow>
            <SkeletonTableTd />
            <SkeletonTableTd />
            <SkeletonTableTd />
            <SkeletonTableTd />
          </SkeletonTableRow>
          <SkeletonTableRow>
            <SkeletonTableTd />
            <SkeletonTableTd />
            <SkeletonTableTd />
            <SkeletonTableTd />
          </SkeletonTableRow>
        </SkeletonWrapper>
      }
    />
  )
}

export default CustomerSkeleton
