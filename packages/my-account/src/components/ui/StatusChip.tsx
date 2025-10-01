import type { OrderStatus } from "#components/composite/order/OrderStatusChip"
import type { ShipmentStatus } from "#components/composite/order/ShipmentStatusChip"

interface StatusChipProps extends React.HTMLAttributes<HTMLParagraphElement> {
  status: OrderStatus | ShipmentStatus
}

const handlerStatusColor = (status: string) => {
  switch (status) {
    case "active": // Subscriptions
    case "placed": // Orders
    case "approved": // Orders
    case "shipped": // Shipments
    case "received": // Returns
      return 'text-green-400 bg-green-400 bg-opacity-10'
    case "cancelled":
      return 'text-red-400 bg-red-400 bg-opacity-10'
    default:
      return 'text-yellow-400 bg-yellow-400 bg-opacity-10'
  }
}

export function StatusChip({ children, className, status }: StatusChipProps) {
  const classNames = `inline text-center text-3xs md:w-auto uppercase font-bold py-[2px] px-[8px] rounded-xl align-middle ${handlerStatusColor(status)} ${className ?? ''}`
  return <p className={classNames}>{children}</p>
}
