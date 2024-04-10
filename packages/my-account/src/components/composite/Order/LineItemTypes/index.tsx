import { LineItemField, type TLineItem } from "@commercelayer/react-components"
import { LineItem } from "@commercelayer/react-components/line_items/LineItem"
import { LineItemAmount } from "@commercelayer/react-components/line_items/LineItemAmount"
import { LineItemCode } from "@commercelayer/react-components/line_items/LineItemCode"
import { LineItemImage } from "@commercelayer/react-components/line_items/LineItemImage"
import { LineItemName } from "@commercelayer/react-components/line_items/LineItemName"
import { LineItemQuantity } from "@commercelayer/react-components/line_items/LineItemQuantity"
import { parseExpression } from "cron-parser"
import cronstrue from "cronstrue"
import "cronstrue/locales/en"
import "cronstrue/locales/it"
import "cronstrue/locales/de"
import { useContext } from "react"
import { useTranslation } from "react-i18next"

import { RepeatIcon } from "./RepeatIcon"

import {
  LineItemWrapper,
  LineItemContent,
  LineItemDescription,
  LineItemFrequency,
  LineItemSku,
  LineItemQty,
} from "#components/ui/LineItem/styled"
import { SettingsContext } from "#providers/SettingsProvider"

interface Props {
  type: TLineItem
}

export function LineItemTypes({ type }: Props): JSX.Element {
  const { t } = useTranslation()
  const ctx = useContext(SettingsContext)

  return (
    <LineItem type={type}>
      <LineItemWrapper>
        <LineItemImage className="self-start p-1 border rounded w-[75px] md:w-[85px] bg-contrast" />
        <LineItemContent>
          <LineItemDescription>
            <div>
              <LineItemSku>
                SKU <LineItemCode className="text-xs text-gray-600" />
              </LineItemSku>
              <LineItemName className="block mb-1 font-bold" />
            </div>
            <LineItemQty>
              <LineItemQuantity>
                {(props) => (
                  <>
                    {!!props.quantity &&
                      t("order.summary.quantity", { count: props.quantity })}
                  </>
                )}
              </LineItemQuantity>
            </LineItemQty>
          </LineItemDescription>
          <LineItemAmount className="pt-4 text-lg font-extrabold" />
        </LineItemContent>
        <div className="absolute bottom-0 right-0">
          <LineItemField attribute="frequency">
            {/*  @ts-expect-error typing on attribute */}
            {({ attributeValue }) => {
              if (!attributeValue) {
                return null
              }
              let isCronValid = true
              try {
                // eslint-disable-next-line import/no-named-as-default-member
                parseExpression(attributeValue as string)
              } catch (e) {
                isCronValid = false
              }
              const frequency = isCronValid
                ? // eslint-disable-next-line import/no-named-as-default-member
                  cronstrue.toString(attributeValue as string, {
                    locale: ctx.settings.language,
                  })
                : t(`order.summary.frequency.${attributeValue}`)

              return (
                <LineItemFrequency data-testid="line-items-frequency">
                  <RepeatIcon />
                  {frequency}
                </LineItemFrequency>
              )
            }}
          </LineItemField>
        </div>
      </LineItemWrapper>
    </LineItem>
  )
}
