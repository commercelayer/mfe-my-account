import {
  OrderContainer,
  OrderList,
  OrderListRow,
} from "@commercelayer/react-components"
import { format } from "date-fns"
import { NextPage } from "next"
import Link from "next/link"
import { useContext } from "react"
import { useTranslation } from "react-i18next"
import styled from "styled-components"
import tw from "twin.macro"

import Title from "components/composite/Title"
import { AppContext } from "components/data/AppProvider"

interface OrderStatus {
  status: string
}

const Orders: NextPage = () => {
  const { t } = useTranslation()
  const ctx = useContext(AppContext)
  const { accessToken } = ctx

  const colClassName =
    "uppercase text-left pb-2.5 pt-9 text-gray-400 text-xs font-extrabold"
  const titleClassName = "flex flex-row items-center"
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

  const ActionsMenu = () => (
    <button
      type="button"
      className="flex items-center text-gray-400 bg-white rounded-full hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
      id="menu-button"
      aria-expanded="true"
      aria-haspopup="true"
    >
      <span className="sr-only">Open menu</span>
      <svg
        className="w-5 h-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
      </svg>
    </button>
  )

  return (
    <OrderContainer>
      <>
        <Title>{t("orders.title")}</Title>
        <OrderList
          className="w-full border-collapse table-fixed"
          columns={columns}
          showActions
          actionsComponent={() => <ActionsMenu />}
          actionsContainerClassName="align-top py-5 border-b"
          infiniteScroll
          windowOptions={{
            height: 600,
            itemSize: 82,
            width: 900,
            column: 180,
          }}
        >
          <OrderListRow field="number">
            {({ cell, order, ...p }) => {
              return cell.map((cell) => {
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
            }}
          </OrderListRow>
          <OrderListRow field="updated_at" className="py-5 align-top border-b">
            {({ cell, order, ...p }) => {
              return cell.map((cell) => {
                return (
                  <OrderData key={order} {...p} {...cell.getCellProps()}>
                    <OrderUpdatedDate>
                      {format(new Date(cell.value), "dd/MM/yy")}
                    </OrderUpdatedDate>
                  </OrderData>
                )
              })
            }}
          </OrderListRow>
          <OrderListRow field="status" className="py-5 align-top border-b">
            {({ cell, order, ...p }) => {
              return cell.map((cell) => {
                return (
                  <OrderData key={order} {...p} {...cell.getCellProps()}>
                    <OrderStatus status={p.row.values.status}>
                      {cell.render("Cell")}
                    </OrderStatus>
                  </OrderData>
                )
              })
            }}
          </OrderListRow>
          <OrderListRow
            field="formatted_total_amount_with_taxes"
            className="py-5 font-bold align-top border-b"
          />
        </OrderList>
      </>
    </OrderContainer>
  )
}

export default Orders

export const OrderData = styled.td`
  ${tw`pt-6 border-b`}
`

export const OrderNumber = styled.p`
  ${tw`text-sm font-bold`}
`

export const OrderItemsCount = styled.p`
  ${tw`text-sm font-normal text-gray-500`}
`

export const OrderUpdatedDate = styled.p`
  ${tw`text-sm font-medium`}
`

export const OrderStatus = styled.p<OrderStatus>(({ status }) => {
  return [
    tw`text-white text-xs text-center uppercase font-extrabold px-1 py-0.5 w-22`,
    handlerStatusColor(status),
  ]
})

const handlerStatusColor = (status: string) => {
  switch (status) {
    case "complete":
      return tw`bg-green-400`
    case "inprogress":
      return tw`bg-yellow-500`
    case "pending":
      return tw`bg-gray-500`
    case "draft":
      return tw`bg-gray-400`
    default:
      return tw`bg-gray-400`
  }
}
