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
  OrderListWrapper,
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
    "text-left text-xs font-thin border-b border-gray-200 md:border-none text-gray-300 md:font-semibold md:uppercase md:relative"
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
      <OrderListWrapper>
        <OrderList
          className="w-full mb-8 table-fixed md:-mx-0"
          columns={columns}
          showActions={true}
          loadingElement={<span></span>}
          actionsContainerClassName="absolute right-1 order-5 align-top hidden md:relative md:align-middle py-5 text-center"
          theadClassName="hidden md:table-row-group"
          rowTrClassName="flex justify-between items-center relative md:content-center bg-white shadow-bottom mb-4 pb-12 md:pb-0 px-5 md:p-0 md:border-b md:border-gray-300 md:table-row md:shadow-none h-[107px] md:h-[96px]"
        >
          <OrderListEmpty>{() => <Empty type="Orders" />}</OrderListEmpty>
          <OrderListRow
            field="number"
            className="order-1 pt-6 pb-2.5 md:p-0  md:align-middle"
          >
            {({ cell, order, ...p }) => {
              const cols = cell?.map((cell) => {
                return (
                  <OrderData key={order} {...p} {...cell.getCellProps()}>
                    <Link
                      href={`/orders/${order.id}?accessToken=${accessToken}`}
                    >
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
            className="absolute order-2 text-right bottom-4 right-5 md:bottom-auto md:relative md:right-auto md:text-left"
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
            className="absolute order-3 bottom-4 md:bottom-auto md:relative"
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
      </OrderListWrapper>
    </OrderContainer>
  )
}

export default Orders
