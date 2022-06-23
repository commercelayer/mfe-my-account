import {
  AddressCountrySelectName,
  AddressInputName,
  BaseInputType,
} from "@commercelayer/react-components/dist/typings"
import {
  ResourceErrorType,
  ErrorComponentProps,
} from "@commercelayer/react-components/dist/typings/errors"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

import { Label } from "components/ui/form/Label"

import {
  Wrapper,
  StyledAddressInput,
  StyledAddressCountrySelector,
  StyledErrors,
} from "./styled"

interface Props {
  type: BaseInputType
  fieldName: AddressInputName | AddressCountrySelectName | "email"
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
      resource: "customerAddress",
      field: fieldName,
      message: t("input.mustBeValidFormat"),
    },
    {
      code: "EMPTY_ERROR",
      resource: "customerAddress",
      field: fieldName,
      message: t("input.cantBlank"),
    },
  ]

  const label = t(`addressForm.${fieldName}`)

  const [valueStatus, setValueStatus] = useState(value)

  const isCountry = fieldName === "customer_address_country_code"

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
              data-cy={`input_${fieldName}`}
              name={fieldName as AddressCountrySelectName}
              placeholder={{
                label: t(`addressForm.${fieldName}_placeholder`),
                value: "",
              }}
              value={
                shippingCountryCodeLock &&
                fieldName.indexOf('shipping') >= 0
                  ? shippingCountryCodeLock
                  : value
              }
              disabled={Boolean(
                shippingCountryCodeLock &&
                fieldName.indexOf('shipping') >= 0
              )}
            />
          ) : (
            <>
              <StyledAddressInput
                id={fieldName}
                data-cy={`input_${fieldName}`}
                name={fieldName as AddressInputName}
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
