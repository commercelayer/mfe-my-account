import { OrderList } from "@commercelayer/react-components/orders/OrderList"
import { OrderListEmpty } from "@commercelayer/react-components/orders/OrderListEmpty"
import { OrderListPaginationButtons } from "@commercelayer/react-components/orders/OrderListPaginationButtons"
import { OrderListPaginationInfo } from "@commercelayer/react-components/orders/OrderListPaginationInfo"
import { OrderListRow } from "@commercelayer/react-components/orders/OrderListRow"
import { useContext } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "wouter"

import {
  OrderListWrapper,
  OrderData,
  OrderNumber,
  OrderItemsCount,
  OrderUpdatedDate,
} from "./styled"

import Empty from "#components/composite/Empty"
import { SkeletonMainOrdersTable } from "#components/composite/Skeleton/Main/OrdersTable"
import OrderStatusChip from "#components/ui/StatusChip/OrderStatusChip"
import Title from "#components/ui/Title"
import { AppContext } from "#providers/AppProvider"
import { formatDate, shortDate } from "#utils/dateTimeFormats"

function OrdersPage(): JSX.Element {
  const { t } = useTranslation()
  const ctx = useContext(AppContext)
  const accessToken = ctx?.accessToken

  const colClassName =
    "text-left text-xs font-thin border-b border-gray-200 md:border-none text-gray-300 md:font-semibold md:uppercase md:relative"
  const titleClassName = "flex gap-2"
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
    <>
      <Title>{t("orders.title")}</Title>
      <OrderListWrapper>
        <OrderList
          className="w-full mb-8 table-fixed md:-mx-0"
          columns={columns}
          showActions={true}
          loadingElement={
            <div className="px-5 lg:p-0">
              <SkeletonMainOrdersTable />
            </div>
          }
          actionsContainerClassName="absolute right-1 order-5 align-top hidden md:relative md:align-middle py-5 text-center"
          theadClassName="hidden md:table-row-group"
          rowTrClassName="flex justify-between items-center relative md:content-center bg-white shadow-bottom mb-4 pb-12 md:pb-0 px-5 md:p-0 md:border-b md:border-gray-300 md:table-row md:shadow-none h-[107px] md:h-[96px]"
          showPagination
          pageSize={15}
          paginationContainerClassName="flex justify-between items-center"
        >
          <OrderListEmpty>{() => <Empty type="Orders" />}</OrderListEmpty>
          <OrderListRow
            field="number"
            className="order-1 pt-6 pb-2.5 md:p-0  md:align-middle"
          >
            {({ cell, order, ...p }) => {
              return (
                <>
                  {cell?.map((cell) => {
                    return (
                      <OrderData key={order} {...p} {...cell.getCellProps()}>
                        <Link
                          href={`/orders/${order.id}?accessToken=${accessToken}`}
                        >
                          <OrderNumber># {cell.render("Cell")}</OrderNumber>
                        </Link>
                        <OrderItemsCount>
                          {t("orders.orderContains", {
                            count: order.skus_count as number,
                          })}
                        </OrderItemsCount>
                      </OrderData>
                    )
                  })}
                </>
              )
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
      </OrderListWrapper>
    </>
  )
}

export default OrdersPage
