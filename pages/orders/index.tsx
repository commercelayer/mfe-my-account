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
import PageMain from "components/ui/PageMain"
import ActionsMenu from "components/ui/ActionsMenu"
import ActionsMenuItem from "components/ui/ActionsMenuItem"
import Title from "components/ui/Title"
import OrderStatusChip from "components/composite/Order/OrderStatusChip"


const Orders: NextPage = () => {
  const { t } = useTranslation()
  const ctx = useContext(AppContext)
  const accessToken = ctx?.accessToken
  const isDesktop = window.screen.width >= 1280

  const options = isDesktop && {
    actionsComponent: () => <ActionsMenu>
      <ActionsMenuItem label="Invoice" />
      <ActionsMenuItem label="Print" />
      </ActionsMenu>,
    infiniteScroll: false,
    windowOptions: {
      height: 600,
      itemSize: 82,
    },
  }

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
      <>
        <PageMain>
          <Title>{t("orders.title")}</Title>
          <OrderList
            className="relative w-full mb-8"
            columns={columns}
            showActions
            actionsContainerClassName="align-top md:align-middle border-b border-gray-350 py-5 text-center"
            theadClassName="hidden md:table-row-group"
            rowTrClassName="grid grid-cols-2 md:content-center bg-white shadow-bottom mb-2 -mx-5 px-5 md:-mx-0 md:p-0 md:border-b md:border-gray-350 md:table-row md:shadow-none"
            {...options}
          >
            <OrderListRow field="number" className="order-1 pt-5 pb-2.5 md:py-5 md:align-middle">
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
              className="order-4 pb-5 text-right align-top md:align-middle md:py-5 md:text-left"
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
              className="order-3 px-0 align-top md:align-middle md:py-5"
            >
              {({ cell, order, ...p }) => {
                return cell.map((cell) => {
                  return (
                    <OrderData key={order} {...p} {...cell.getCellProps()}>
                      <OrderStatusChip status={ p.row.values.status } />
                    </OrderData>
                  )
                })
              }}
            </OrderListRow>
            <OrderListRow
              field="formatted_total_amount_with_taxes"
              className="order-2 pt-4 pb-5 md:py-5 font-bold text-right align-top md:align-middle md:text-left md:text-lg"
            />
          </OrderList>
        </PageMain>
      </>
    </OrderContainer>
  )
}

export default Orders

export const StyledOrderList = styled.td`
  ${tw`relative w-full mb-8`}
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
  ${tw`inline-block text-sm font-extralight text-gray-600 bg-gray-200 px-3 rounded-full h-5 md:(bg-contrast px-0 w-min)`}
`
