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

import { AppContext } from "components/data/AppProvider"
import Title from "components/ui/Title"

interface OrderStatus {
  status: string
}

const COMPLETED_COLOR = "green-400"
const INPROGRESS_COLOR = "yellow-500"
const PENDING_COLOR = "gray-500"
const DRAFT_COLOR = "gray-400"

const Orders: NextPage = () => {
  const { t } = useTranslation()
  const ctx = useContext(AppContext)
  const accessToken = ctx?.accessToken
  const isDesktop = window.screen.width >= 1280

  const options = isDesktop && {
    actionsComponent: () => <ActionsMenu />,
    infiniteScroll: true,
    windowOptions: {
      height: 600,
      itemSize: 82,
      width: 900,
      column: 180,
    },
  }

  const colClassName =
    "text-left text-xs font-thin text-gray-600 pl-5 pb-1 border-b border-gray-300 xl:border-none xl:text-gray-400 xl:font-semibold xl:uppercase xl:pl-0"
  const titleClassName = "flex flex-row xl:mb-2"
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
      <span className="sr-only">{t("orders.openMenu")}</span>
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
          actionsContainerClassName="align-top"
          {...options}
        >
          <Table>
            <TableBody>
              <TableRow>
                <OrderListRow
                  field="number"
                  className="order-1 px-0 xl:order-none"
                >
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
                <OrderListRow
                  field="updated_at"
                  className="flex justify-end order-4 px-0 text-right align-top xl:order-none xl:text-left"
                >
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
                <OrderListRow
                  field="status"
                  className="order-3 px-0 align-top xl:order-none"
                >
                  {({ cell, order, ...p }) => {
                    return cell.map((cell) => {
                      return (
                        <OrderData key={order} {...p} {...cell.getCellProps()}>
                          <BulletPoint status={p.row.values.status} />
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
                  className="order-2 px-0 font-bold text-right align-top xl:order-none xl:text-left"
                />
              </TableRow>
            </TableBody>
          </Table>
        </OrderList>
      </>
    </OrderContainer>
  )
}

export default Orders

export const Table = styled.table`
  ${tw``}
`

export const TableBody = styled.tbody`
  ${tw``}
`

export const TableRow = styled.tr`
  ${tw`grid grid-cols-2 w-screen px-5 pt-5 mb-2.5 bg-contrast border-b-2 border-gray-300 h-28 xl:(flex w-min border-b pl-0 h-20)`}
`

export const OrderData = styled.td`
  ${tw``}
`

export const OrderNumber = styled.p`
  ${tw`text-sm font-semibold hover:(cursor-pointer)`}
`

export const OrderItemsCount = styled.p`
  ${tw`text-sm font-light text-gray-500`}
`

export const OrderUpdatedDate = styled.p`
  ${tw`text-sm font-extralight text-gray-600 bg-gray-200 px-3 rounded-full h-5 xl:(bg-contrast px-0 w-min)`}
`

export const OrderStatus = styled.p<OrderStatus>(({ status }) => {
  return [
    handlerStatusColor(status),
    tw`inline text-sm text-center capitalize px-1.5 py-0.5 xl:(block text-white text-3xs w-22 uppercase font-bold px-1 leading-snug)`,
  ]
})

const handlerStatusColor = (status: string) => {
  switch (status) {
    case "placed":
      return tw`text-${COMPLETED_COLOR} xl:(bg-${COMPLETED_COLOR})`
    case "inprogress":
      return tw`text-${INPROGRESS_COLOR} xl:(bg-${INPROGRESS_COLOR})`
    case "pending":
      return tw`text-${PENDING_COLOR} xl:(bg-${PENDING_COLOR})`
    case "draft":
      return tw`text-${DRAFT_COLOR} xl:(bg-${DRAFT_COLOR})`
    default:
      return tw`text-${DRAFT_COLOR} xl:(bg-${DRAFT_COLOR})`
  }
}

export const BulletPoint = styled.div<OrderStatus>(({ status }) => {
  return [
    tw`w-2.5 h-2.5 inline-block rounded-full xl:(hidden)`,
    handlerStatusBulletPointColor(status),
  ]
})

const handlerStatusBulletPointColor = (status: string) => {
  switch (status) {
    case "placed":
      return tw`bg-${COMPLETED_COLOR}`
    case "inprogress":
      return tw`bg-${INPROGRESS_COLOR}`
    case "pending":
      return tw`bg-${PENDING_COLOR}`
    case "draft":
      return tw`bg-${DRAFT_COLOR}`
    default:
      return tw`bg-${DRAFT_COLOR}`
  }
}
