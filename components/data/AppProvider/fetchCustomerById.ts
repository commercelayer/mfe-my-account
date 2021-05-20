import CLayer, { Customer, CustomerCollection } from "@commercelayer/js-sdk"

interface FetchCustomerByIdProps {
  customerId: string
  accessToken: string
  endpoint: string
}

export interface FetchCustomerByIdResponse {
  email: string
  hasPassword: boolean
}

export const fetchCustomerById = async ({
  customerId,
  accessToken,
  endpoint,
}: FetchCustomerByIdProps): Promise<FetchCustomerByIdResponse> => {
  CLayer.init({
    accessToken,
    endpoint,
  })

  try {
    const fetchCustomer = async () => {
      return Customer.find(customerId)
    }

    const customer: CustomerCollection = await fetchCustomer()

    return {
      email: customer.email,
      hasPassword: customer.hasPassword,
    }
  } catch (e) {
    console.log(`error on retrieving customer: ${e}`)
    return {
      email: "",
      hasPassword: true,
    }
  }
}
