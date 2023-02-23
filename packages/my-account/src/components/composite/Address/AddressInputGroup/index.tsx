import type {
  BaseInputType,
  ResourceErrorType,
  ErrorComponentProps,
} from "@commercelayer/react-components"
import type { Address } from "@commercelayer/sdk"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

import {
  Wrapper,
  StyledAddressInput,
  StyledAddressCountrySelector,
  StyledAddressStateSelector,
  StyledErrors,
} from "./styled"

import { Label } from "#components/ui/form/Label"
import type { AddressFormFields } from "#types/addresses"

interface Props {
  type: BaseInputType
  fieldName: `billing_address_${Extract<keyof Address, AddressFormFields>}`
  resource: ResourceErrorType
  value?: string
  required?: boolean
}

export function AddressInputGroup({
  fieldName,
  resource,
  type,
  value,
  required,
}: Props): JSX.Element {
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

  const label = t(`addresses.addressForm.fields.${fieldName}`)

  const [valueStatus, setValueStatus] = useState(value)

  const isCountry = fieldName === "billing_address_country_code"

  const isState = fieldName === "billing_address_state_code"

  const shippingCountryCodeLock = ""

  useEffect(() => {
    setValueStatus(value || "")
  }, [value])

  function renderInput() {
    if (isCountry) {
      return (
        <>
          <StyledAddressCountrySelector
            className="form-select"
            data-cy={`input_billing_address_country_code`}
            name={fieldName}
            placeholder={{
              label: t(
                "addresses.addressForm.billing_address_country_code_placeholder"
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
          <Label htmlFor={fieldName}>{label}</Label>
        </>
      )
    } else if (isState) {
      return (
        <>
          <StyledAddressStateSelector
            id={fieldName}
            selectClassName="form-select"
            inputClassName="form-input"
            data-test-id={`input_${fieldName}`}
            name={fieldName}
            value={value?.toUpperCase()}
          />
          <Label htmlFor={fieldName}>{label}</Label>
        </>
      )
    } else {
      return (
        <>
          <StyledAddressInput
            id={fieldName}
            data-cy={`input_${fieldName}`}
            name={fieldName}
            type={type}
            value={valueStatus}
            required={required}
            className="form-input"
          />
          <Label htmlFor={fieldName}>{label}</Label>
        </>
      )
    }
  }

  return (
    <div className="mb-8">
      <Wrapper>
        <div className="relative h-10">{renderInput()}</div>
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
