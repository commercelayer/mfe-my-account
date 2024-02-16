import { OrderList, OrderListRow } from "@commercelayer/react-components"
import OrderListPaginationButtons from "@commercelayer/react-components/orders/OrderListPaginationButtons"
import OrderListPaginationInfo from "@commercelayer/react-components/orders/OrderListPaginationInfo"
import { Order, OrderSubscription } from "@commercelayer/sdk"
import { Warning } from "phosphor-react"
import { useContext } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "wouter"

import { OrderDate, OrderNumber } from "./styled"

import OrderStatusChip from "#components/composite/Order/OrderStatusChip"
import { SkeletonMainSubscriptionsOrdersTable } from "#components/composite/Skeleton/Main/SubscriptionsOrdersTable"
import { AppContext } from "#providers/AppProvider"
import { formatDate, shortDate } from "#utils/dateTimeFormats"

interface Props {
  orderSubscription: OrderSubscription
}

function SubscriptionOrders({ orderSubscription }: Props) {
  const { t } = useTranslation()
  const ctx = useContext(AppContext)
  const accessToken = ctx?.accessToken

  const colClassName =
    "px-4 text-left text-xs font-thin border-b border-gray-200 md:border-none text-gray-400 md:font-semibold md:uppercase md:relative"
  const titleClassName = "flex gap-2 items-center"
  const columns = [
    {
      header: t("orders.columns.order"),
      accessorKey: "number",
      className: colClassName,
      titleClassName,
    },
    {
      header: t("orders.columns.date"),
      accessorKey: "placed_at",
      className: colClassName,
      titleClassName,
    },
    {
      header: t("orders.columns.status"),
      accessorKey: "status",
      className: colClassName,
      titleClassName,
    },
    {
      header: t("orders.columns.payment"),
      accessorKey: "authorizations",
      className: colClassName,
      titleClassName,
    },
    {
      header: t("orders.columns.amount"),
      accessorKey: "formatted_total_amount_with_taxes",
      className: colClassName,
      titleClassName,
    },
  ]

  return (
    <div className="max-w-full overflow-x-hidden">
      <OrderList
        type="subscriptions"
        id={orderSubscription.id ?? ""}
        className="w-full mb-8 table-fixed md:-mx-0"
        columns={columns}
        loadingElement={
          <div className="px-5 lg:p-0">
            <SkeletonMainSubscriptionsOrdersTable />
          </div>
        }
        actionsContainerClassName="absolute right-1 order-5 align-top hidden md:relative md:align-middle py-5 text-center"
        theadClassName="bg-gray-50 border-b h-[44px]"
        rowTrClassName="flex justify-between items-center relative md:content-center bg-white border-b border-gray-100 py-8 table-row"
        showPagination
        pageSize={15}
        paginationContainerClassName="flex justify-between items-center"
      >
        <OrderListRow field="number" className="order-1 p-4">
          {({ cell, row, ...p }) => {
            const order = row?.original
            if (!order) return <></>
            return (
              <>
                {cell?.map(() => {
                  return (
                    <div key={order.number} {...p}>
                      <Link
                        href={`/orders/${order.id}?accessToken=${accessToken}`}
                      >
                        <OrderNumber>#{order.number}</OrderNumber>
                      </Link>
                    </div>
                  )
                })}
              </>
            )
          }}
        </OrderListRow>
        <OrderListRow field="placed_at" className="order-2 px-4 ">
          {({ cell, row, ...p }) => {
            const order = row?.original
            if (!order) return <></>
            const cols = cell?.map((cell) => {
              return (
                <div key={order.number} {...p}>
                  <OrderDate>
                    {cell.getValue() != null &&
                      formatDate(cell.getValue() as string, shortDate)}
                  </OrderDate>
                </div>
              )
            })
            return <>{cols}</>
          }}
        </OrderListRow>
        <OrderListRow field="status" className="order-3 px-4">
          {({ cell, row, ...p }) => {
            const order = row?.original
            if (!order) return <></>
            const cols = cell?.map(() => {
              return (
                <div key={order.number} {...p}>
                  <OrderStatusChip status={order.status} />
                </div>
              )
            })
            return <>{cols}</>
          }}
        </OrderListRow>
        <OrderListRow field="authorizations">
          {({ row }) => {
            const order = row?.original as Order
            const paymenthAuthorization =
              order.authorizations != null && order.authorizations?.length > 0
                ? order.authorizations[order.authorizations.length - 1]
                : undefined
            if (paymenthAuthorization != null) {
              return (
                <div className="order-4 px-4 text-sm text-gray-400">
                  {paymenthAuthorization.succeeded ? (
                    "Authorized"
                  ) : (
                    <div className="flex items-center gap-1 ">
                      <Warning
                        size={15}
                        weight="bold"
                        className="text-yellow-400"
                      />{" "}
                      Failed
                    </div>
                  )}
                </div>
              )
            }
            return <></>
          }}
        </OrderListRow>
        <OrderListRow
          field="formatted_total_amount_with_taxes"
          className="order-5 px-4 text-sm font-semibold"
        />
        <OrderListPaginationInfo className="text-sm text-gray-500" />
        <OrderListPaginationButtons
          previousPageButton={{
            className:
              "w-[46px] h-[38px] mr-2 border rounded text-sm text-gray-500",
            show: true,
            hideWhenDisabled: true,
          }}
          nextPageButton={{
            className:
              "w-[46px] h-[38px] mr-2 border rounded text-sm text-gray-500",
            show: true,
            hideWhenDisabled: true,
          }}
          navigationButtons={{
            className:
              "w-[46px] h-[38px] mr-2 border rounded text-sm text-gray-500",
            activeClassName:
              "text-primary font-semibold border-primary border-2",
          }}
          className="p-2"
        />
      </OrderList>
    </div>
  )
}

export default SubscriptionOrders
