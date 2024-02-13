import { OrderList } from "@commercelayer/react-components/orders/OrderList"
import { OrderListEmpty } from "@commercelayer/react-components/orders/OrderListEmpty"
import { OrderListPaginationButtons } from "@commercelayer/react-components/orders/OrderListPaginationButtons"
import { OrderListPaginationInfo } from "@commercelayer/react-components/orders/OrderListPaginationInfo"
import { OrderListRow } from "@commercelayer/react-components/orders/OrderListRow"
import { Trans, useTranslation } from "react-i18next"

import {
  OrderDate,
  OrderListWrapper,
  OrderNumber,
  SubscriptionFrequency,
} from "./styled"

import Empty from "#components/composite/Empty"
import { SkeletonMainSubscriptionsTable } from "#components/composite/Skeleton/Main/SubscriptionsTable"
import SubscriptionNextRunProgress from "#components/composite/Subscription/SubscriptionNextRunProgress"
import SubscriptionStatusChip from "#components/composite/Subscription/SubscriptionStatusChip"
import Title from "#components/ui/Title"
import { AppContext } from "#providers/AppProvider"
import { formatDate, shortDate } from "#utils/dateTimeFormats"
import { useContext } from "react"
import { Link } from "wouter"

function SubscriptionsPage(): JSX.Element {
  const { t } = useTranslation()
  const ctx = useContext(AppContext)
  const accessToken = ctx?.accessToken

  const colClassName =
    "text-left text-xs font-thin border-b border-gray-200 md:border-none text-gray-300 md:font-semibold md:uppercase md:relative"
  const titleClassName = "flex gap-2"
  const columns = [
    {
      header: t("subscriptions.columns.subscription"),
      accessorKey: "number",
      className: colClassName,
      titleClassName,
    },
    {
      header: t("subscriptions.columns.status"),
      accessorKey: "status",
      className: colClassName,
      titleClassName,
    },
    {
      header: t("subscriptions.columns.frequency"),
      accessorKey: "frequency",
      className: colClassName,
      titleClassName,
    },
    {
      header: t("subscriptions.columns.next_run_at"),
      accessorKey: "next_run_at",
      className: colClassName,
      titleClassName,
    },
  ]

  return (
    <>
      <Title>{t("subscriptions.title")}</Title>
      <OrderListWrapper>
        <OrderList
          type="subscriptions"
          className="w-full mb-8 table-fixed md:-mx-0"
          columns={columns}
          showActions={true}
          loadingElement={
            <div className="px-5 lg:p-0">
              <SkeletonMainSubscriptionsTable />
            </div>
          }
          actionsContainerClassName="absolute right-1 order-5 align-top hidden md:relative md:align-middle py-5 text-center"
          theadClassName="hidden md:table-row-group"
          rowTrClassName="flex justify-between items-center relative md:content-center bg-white shadow-bottom mb-4 pb-12 md:pb-0 px-5 md:p-0 md:border-b md:border-gray-300 md:table-row md:shadow-none h-[107px] md:h-[96px]"
          showPagination
          pageSize={15}
          paginationContainerClassName="flex justify-between items-center"
        >
          <OrderListEmpty>{() => <Empty type="Subscriptions" />}</OrderListEmpty>
          <OrderListRow
            field="number"
            className="order-1 pt-6 pb-2.5 md:p-0  md:align-middle"
          >
            {({ cell, row, ...p }) => {
              const order = row?.original
              if (!order) return <></>
              return (
                <>
                  {cell?.map(() => {
                    return (
                      <div key={order.number} {...p}>
                        <Link
                          href={`/subscriptions/${order.id}?accessToken=${accessToken}`}
                        >
                          <a>
                            <OrderNumber># {order.number}</OrderNumber>
                          </a>
                        </Link>
                        {order.type === 'order_subscriptions' && order.starts_at != null && (
                          <OrderDate>
                            <Trans i18nKey="subscription.starts_at">{formatDate(order.starts_at as string, shortDate)}</Trans>
                          </OrderDate>
                        )}
                      </div>
                    )
                  })}
                </>
              )
            }}
          </OrderListRow>
          <OrderListRow
            field="status"
            className="absolute order-3 bottom-4 md:bottom-auto md:relative"
          >
            {({ cell, row, ...p }) => {
              const order = row?.original
              if (!order || order.type != 'order_subscriptions') return <></>
              const cols = cell?.map(() => {
                return (
                  <div key={order.number} {...p}>
                    <SubscriptionStatusChip status={order.status} />
                  </div>
                )
              })
              return <>{cols}</>
            }}
          </OrderListRow>
          <OrderListRow
            field="frequency"
            className="absolute order-2 text-right bottom-4 right-5 md:bottom-auto md:relative md:right-auto md:text-left"
          >
            {({ cell, row, ...p }) => {
              const order = row?.original
              if (!order || order.type != 'order_subscriptions') return <></>
              const cols = cell?.map((cell) => {
                return (
                  <div key={order.frequency} {...p}>
                    <SubscriptionFrequency>
                      {cell.getValue() != null &&
                        t(`subscriptionFrequency.${cell.getValue()}`)}
                    </SubscriptionFrequency>
                  </div>
                )
              })
              return <>{cols}</>
            }}
          </OrderListRow>
          
          <OrderListRow
            field="next_run_at"
            className="order-4 font-bold text-right md:text-left md:text-lg"
          >
            {({ cell, row, ...p }) => {
              const order = row?.original
              if (!order || order.type != 'order_subscriptions') return <></>
              return (<SubscriptionNextRunProgress variant="list" subscription={order} />)
            }}
          </OrderListRow>
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

export default SubscriptionsPage
