import {
  Wrapper,
  OrderSectionTab,
  OrderSectionTabHeader,
  OrderSectionTitle,
  OrderSectionBody,
} from "./styled"

type Props = {
  index: number
  header: React.ReactNode
}

export const OrderSection: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

export const OrderSectionItem: React.FC<Props> = ({
  children,
  index,
  header,
}) => {
  return (
    <OrderSectionTab tabIndex={index} className={"active"}>
      <OrderSectionTabHeader className="group">
        <OrderSectionTitle>{header}</OrderSectionTitle>
      </OrderSectionTabHeader>
      <OrderSectionBody>{children}</OrderSectionBody>
    </OrderSectionTab>
  )
}
