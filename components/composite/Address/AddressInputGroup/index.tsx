import type {
  BaseInputType,
  ResourceErrorType,
  ErrorComponentProps,
} from "@commercelayer/react-components"
import { Address } from "@commercelayer/sdk"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

import { Label } from "components/ui/form/Label"

import {
  Wrapper,
  StyledAddressInput,
  StyledAddressCountrySelector,
  StyledErrors,
} from "./styled"

type Props = {
  type: BaseInputType
  fieldName: `billing_address_${Extract<
    keyof Address,
    | "first_name"
    | "last_name"
    | "line_1"
    | "line_2"
    | "city"
    | "zip_code"
    | "country_code"
    | "state_code"
    | "phone"
  >}`
  resource: ResourceErrorType
  value?: string
}

export const AddressInputGroup: React.FC<Props> = ({
  fieldName,
  resource,
  type,
  value,
}) => {
  const { t } = useTranslation()

  const messages: ErrorComponentProps["messages"] = [
    {
      code: "VALIDATION_ERROR",
      resource: "billing_address",
      field: fieldName,
      message: t("input.mustBeValidFormat"),
    },
    {
      code: "EMPTY_ERROR",
      resource: "billing_address",
      field: fieldName,
      message: t("input.cantBlank"),
    },
  ]

  const label = t(`addressForm.fields.${fieldName}`)

  const [valueStatus, setValueStatus] = useState(value)

  const isCountry = fieldName === "billing_address_country_code"

  const shippingCountryCodeLock = ""

  useEffect(() => {
    setValueStatus(value || "")
  }, [value])

  return (
    <div className="mb-8">
      <Wrapper>
        <div className="relative h-10">
          {isCountry ? (
            <StyledAddressCountrySelector
              className="form-select"
              data-cy={`input_billing_address_country_code`}
              name={fieldName}
              placeholder={{
                label: t(
                  `addressForm.billing_address_country_code_placeholder`
                ),
                value: "",
              }}
              value={
                shippingCountryCodeLock &&
                fieldName === "billing_address_country_code"
                  ? shippingCountryCodeLock
                  : value
              }
              disabled={Boolean(
                shippingCountryCodeLock &&
                  fieldName === "billing_address_country_code"
              )}
            />
          ) : (
            <>
              <StyledAddressInput
                id={fieldName}
                data-cy={`input_${fieldName}`}
                name={fieldName}
                type={type}
                value={valueStatus}
                className="form-input"
              />
              <Label htmlFor={fieldName}>{label}</Label>
            </>
          )}
        </div>
      </Wrapper>
      <StyledErrors
        data-cy={`error_${fieldName}`}
        resource={resource}
        field={fieldName}
        messages={messages}
      />
    </div>
  )
}
