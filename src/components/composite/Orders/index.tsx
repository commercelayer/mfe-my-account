import {
  OrderContainer,
  OrderList,
  OrderListEmpty,
  OrderListRow,
} from "@commercelayer/react-components"
import Link from "next/link"
import { useContext } from "react"
import { useTranslation } from "react-i18next"

import Empty from "src/components/composite/Empty"
import OrderStatusChip from "src/components/ui/StatusChip/OrderStatusChip"
import Title from "src/components/ui/Title"

import {
  OrderData,
  OrderNumber,
  OrderItemsCount,
  OrderUpdatedDate,
} from "./styled"

import { AppContext } from "src/providers/AppProvider"
import { formatDate, shortDate } from "src/utils/dateTimeFormats"

const Orders: React.FC = () => {
  const { t } = useTranslation()
  const ctx = useContext(AppContext)
  const accessToken = ctx?.accessToken

  const colClassName =
    "text-left text-xs font-thin text-gray-600 pb-5 border-b border-gray-300 md:border-none md:text-gray-400 md:font-semibold md:uppercase md:relative"
  const titleClassName = ""
  const columns = [
    {
      Header: "Order",
      accessor: "number",
      className: colClassName,
      titleClassName,
    },
    {
      Header: "Date",
      accessor: "updated_at",
      className: colClassName,
      titleClassName,
    },
    {
      Header: "Status",
      accessor: "status",
      className: colClassName,
      titleClassName,
    },
    {
      Header: "Amount",
      accessor: "formatted_total_amount_with_taxes",
      className: colClassName,
      titleClassName,
    },
  ]

  return (
    <OrderContainer>
      <Title>{t("orders.title")}</Title>
      <OrderList
        className="w-full mb-8 -mx-5 table-fixed md:-mx-0"
        columns={columns}
        showActions={true}
        actionsContainerClassName="absolute right-1 order-5 align-top hidden md:relative md:align-middle py-5 text-center"
        theadClassName="hidden md:table-row-group"
        rowTrClassName="flex justify-between items-center relative md:content-center bg-white shadow-bottom mb-4 pb-12 md:pb-0 px-5 md:p-0 md:border-b md:border-gray-350 md:table-row md:shadow-none"
      >
        <OrderListEmpty>{() => <Empty type="Orders" />}</OrderListEmpty>
        <OrderListRow
          field="number"
          className="order-1 pt-5 pb-2.5 md:py-5 md:align-middle"
        >
          {({ cell, order, ...p }) => {
            const cols = cell?.map((cell) => {
              return (
                <OrderData key={order} {...p} {...cell.getCellProps()}>
                  <Link href={`/orders/${order.id}?accessToken=${accessToken}`}>
                    <OrderNumber># {cell.render("Cell")}</OrderNumber>
                  </Link>
                  <OrderItemsCount>
                    {t("orders.orderContains", {
                      count: order.skus_count,
                    })}
                  </OrderItemsCount>
                </OrderData>
              )
            })
            return <>{cols}</>
          }}
        </OrderListRow>
        <OrderListRow
          field="updated_at"
          className="absolute order-2 text-right bottom-5 right-5 lg:bottom-auto lg:relative md:right-auto md:text-left"
        >
          {({ cell, order, ...p }) => {
            const cols = cell?.map((cell) => {
              return (
                <OrderData key={order} {...p} {...cell.getCellProps()}>
                  <OrderUpdatedDate>
                    {cell.value && formatDate(cell.value, shortDate)}
                  </OrderUpdatedDate>
                </OrderData>
              )
            })
            return <>{cols}</>
          }}
        </OrderListRow>
        <OrderListRow
          field="status"
          className="absolute order-3 bottom-5 lg:bottom-auto lg:relative"
        >
          {({ cell, order, ...p }) => {
            const cols = cell?.map((cell) => {
              return (
                <OrderData key={order} {...p} {...cell.getCellProps()}>
                  <OrderStatusChip status={p.row.values.status} />
                </OrderData>
              )
            })
            return <>{cols}</>
          }}
        </OrderListRow>
        <OrderListRow
          field="formatted_total_amount_with_taxes"
          className="order-4 font-bold text-right md:text-left md:text-lg"
        />
      </OrderList>
    </OrderContainer>
  )
}

export default Orders
