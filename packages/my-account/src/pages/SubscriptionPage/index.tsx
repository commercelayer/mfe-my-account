import { OrderSubscription } from "@commercelayer/sdk"
import { useContext } from "react"
import { Trans, useTranslation } from "react-i18next"
import { Redirect } from "wouter"

import {
  OrderAccordionWrapper,
  OrderSubscriptionHeader,
  OrderSubscriptionHeaderMain,
  OrderSubscriptionNextRunProgressWrapper,
  OrderSubscriptionNextRunWrapper,
  OrderWrapper,
} from "./styled"

import { SkeletonMainOrder } from "#components/composite/Skeleton/Main"
import SubscriptionNextRunProgress from "#components/composite/Subscription/SubscriptionNextRunProgress"
import SubscriptionOrders from "#components/composite/Subscription/SubscriptionOrders"
import SubscriptionPaymentAlert from "#components/composite/Subscription/SubscriptionPaymentAlert"
import SubscriptionPayments from "#components/composite/Subscription/SubscriptionPayments"
import SubscriptionStack from "#components/composite/Subscription/SubscriptionStack"
import SubscriptionStatusChip from "#components/composite/Subscription/SubscriptionStatusChip"
import SubscriptionSummary from "#components/composite/Subscription/SubscriptionSummary"
import {
  DateWrapper,
  LittleDateWrapper,
  PageSecondaryTitle,
  PageTitle,
} from "#components/ui/Common/styled"
import FormattedDate from "#components/ui/FormattedDate"
import { OrderSection, OrderSectionItem } from "#components/ui/OrderSection"
import { ScrollToTop } from "#components/ui/ScrollToTop"
import { AppContext } from "#providers/AppProvider"
import { OrderSubscriptionProvider } from "#providers/OrderSubscriptionProvider"

interface SubscriptionPageProps {
  subscriptionId?: string
}

function SubscriptionPage({
  subscriptionId,
}: SubscriptionPageProps): JSX.Element {
  const ctx = useContext(AppContext)
  const accessToken = ctx?.accessToken
  const { t } = useTranslation()

  if (subscriptionId == null) {
    return <Redirect to={`/subscriptions?accessToken=${accessToken}`} />
  }

  return (
    <OrderSubscriptionProvider
      orderSubscriptionId={subscriptionId}
      accessToken={accessToken as string}
      domain={ctx?.domain as string}
    >
      {({
        isInvalid,
        isLoading,
        orderSubscription,
        orderSubscriptionLastOrder,
      }) => {
        return (
          <>
            {isInvalid ? (
              <Redirect to={`/subscriptions?accessToken=${accessToken}`} />
            ) : (
              <>
                {/*  TODO: Create a new skeleton for the subscription */}
                <SkeletonMainOrder visible={isLoading} />
                {!isLoading && orderSubscription != null && (
                  <OrderWrapper hidden={isLoading}>
                    <SubscriptionPaymentAlert
                      orderSubscription={orderSubscription}
                      orderSubscriptionLastOrder={orderSubscriptionLastOrder}
                    />
                    <OrderSubscriptionHeader>
                      <OrderSubscriptionHeaderMain>
                        <PageTitle>
                          <Trans i18nKey="subscription.title">
                            {orderSubscription.number}
                          </Trans>
                        </PageTitle>
                        <DateWrapper>
                          <Trans i18nKey="subscription.starts_at">
                            <FormattedDate date={orderSubscription.starts_at} />
                          </Trans>
                        </DateWrapper>
                        <SubscriptionStatusChip
                          status={orderSubscription.status}
                        />
                      </OrderSubscriptionHeaderMain>
                    </OrderSubscriptionHeader>
                    {(orderSubscription?.last_run_at != null ||
                      orderSubscription?.expires_at != null) && (
                      <OrderSubscriptionNextRunWrapper>
                        <PageSecondaryTitle>
                          <Trans i18nKey="subscription.next_run" />
                        </PageSecondaryTitle>
                        <OrderSubscriptionNextRunProgressWrapper>
                          {orderSubscription?.last_run_at != null && (
                            <SubscriptionNextRunProgress
                              subscription={
                                orderSubscription as OrderSubscription
                              }
                              variant="detail"
                            />
                          )}
                          {orderSubscription?.expires_at != null && (
                            <LittleDateWrapper>
                              <Trans i18nKey="subscription.expires_at">
                                <FormattedDate
                                  date={orderSubscription?.expires_at}
                                />
                              </Trans>
                            </LittleDateWrapper>
                          )}
                        </OrderSubscriptionNextRunProgressWrapper>
                      </OrderSubscriptionNextRunWrapper>
                    )}
                    <SubscriptionStack
                      orderSubscription={orderSubscription}
                      orderSubscriptionLastOrder={orderSubscriptionLastOrder}
                    />
                    <OrderAccordionWrapper>
                      <OrderSection noBorder>
                        <OrderSectionItem
                          index={1}
                          header={<span>{t("subscription.summary")}</span>}
                        >
                          <SubscriptionSummary
                            orderSubscription={orderSubscription}
                          />
                        </OrderSectionItem>
                        <OrderSectionItem
                          index={2}
                          header={<span>{t("subscription.payments")}</span>}
                        >
                          <SubscriptionPayments
                            orderSubscription={orderSubscription}
                          />
                        </OrderSectionItem>
                        <OrderSectionItem
                          index={3}
                          header={
                            <span>{t("subscription.order_history")}</span>
                          }
                        >
                          <SubscriptionOrders
                            orderSubscription={orderSubscription}
                          />
                        </OrderSectionItem>
                      </OrderSection>
                    </OrderAccordionWrapper>
                    <ScrollToTop />
                  </OrderWrapper>
                )}
              </>
            )}
          </>
        )
      }}
    </OrderSubscriptionProvider>
  )
}

export default SubscriptionPage
