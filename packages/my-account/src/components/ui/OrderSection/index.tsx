import {
  Wrapper,
  OrderSectionTab,
  OrderSectionTabHeader,
  OrderSectionTitle,
  OrderSectionBody,
} from "./styled"

interface Props {
  children: React.ReactNode
  index: number
  header: React.ReactNode
}

export function OrderSection({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return <Wrapper>{children}</Wrapper>
}

export function OrderSectionItem({
  children,
  index,
  header,
}: Props): JSX.Element {
  return (
    <OrderSectionTab tabIndex={index} className={"active"}>
      <OrderSectionTabHeader className="group">
        <OrderSectionTitle>{header}</OrderSectionTitle>
      </OrderSectionTabHeader>
      <OrderSectionBody>{children}</OrderSectionBody>
    </OrderSectionTab>
  )
}
