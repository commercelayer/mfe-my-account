import type {
  TResourceError,
  TErrorComponent,
} from "@commercelayer/react-components"
import { AddressInput } from "@commercelayer/react-components/addresses/AddressInput"
import { AddressCountrySelector } from "@commercelayer/react-components/addresses/AddressCountrySelector"
import { AddressStateSelector } from "@commercelayer/react-components/addresses/AddressStateSelector"
import { Errors } from "@commercelayer/react-components/errors/Errors"
import type { Address } from "@commercelayer/sdk"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

import type { AddressFormFields } from "#types/addresses"

interface Props {
  type: string
  fieldName: `billing_address_${Extract<keyof Address, AddressFormFields>}`
  resource: TResourceError
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

  const messages: TErrorComponent["messages"] = [
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
          <AddressCountrySelector
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
          <label className="form-label" htmlFor={fieldName}>{label}</label>
        </>
      )
    } else if (isState) {
      return (
        <>
          <AddressStateSelector
            id={fieldName}
            selectClassName="form-select"
            inputClassName="form-input"
            data-test-id={`input_${fieldName}`}
            name={fieldName}
            value={value?.toUpperCase()}
          />
          <label className="form-label" htmlFor={fieldName}>{label}</label>
        </>
      )
    } else {
      return (
        <>
          <AddressInput
            id={fieldName}
            data-cy={`input_${fieldName}`}
            name={fieldName}
            type={type}
            value={valueStatus}
            required={required}
            className="form-input"
          />
          <label className="form-label" htmlFor={fieldName}>{label}</label>
        </>
      )
    }
  }

  return (
    <div className="mb-8">
      <div className="relative">
        <div className="relative h-10">{renderInput()}</div>
      </div>
      <Errors
        className="inline-block text-xs pt-3 pl-3 border-red-400 text-red-400 placeholder-red-400 focus:ring-red-500 focus:border-red-500"
        data-cy={`error_${fieldName}`}
        resource={resource}
        field={fieldName}
        messages={messages}
      />
    </div>
  )
}
