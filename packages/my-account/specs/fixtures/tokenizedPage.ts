import {
  getIntegrationToken,
  getCustomerToken,
  getSalesChannelToken,
} from "@commercelayer/js-auth"
import CommerceLayer, {
  Address,
  AddressCreate,
  CommerceLayerClient,
} from "@commercelayer/sdk"
import { test as base } from "@playwright/test"
import { config } from "dotenv"
import jwt_decode from "jwt-decode"

import path from "path"

import { AddressesPage } from "#specs/fixtures/AddressesPage"
import { OrdersPage } from "#specs/fixtures/OrdersPage"

config({ path: path.resolve(__dirname, "../../.env.local") })

interface JWTProps {
  owner: {
    id: string
  }
}

interface DefaultParamsProps {
  token?: string
  market?: string
  customer?: {
    email: string
    password: string
  }
  customerAddresses?: Partial<Address>[]
}

type FixtureType = {
  defaultParams: DefaultParamsProps
  ordersPage: OrdersPage
  addressesPage: AddressesPage
}

const getToken = async (market?: string) => {
  const clientId = process.env.E2E_CLIENT_ID as string
  const endpoint = process.env.E2E_ENDPOINT as string
  const scope = market || (process.env.E2E_SCOPE as string)

  const data = await getSalesChannelToken({
    clientId,
    endpoint,
    scope,
  })
  return data?.accessToken as string
}

const getClient = async (token: string) => {
  return CommerceLayer({
    organization: process.env.E2E_SLUG as string,
    accessToken: token,
    domain: process.env.E2E_DOMAIN || "commercelayer.io",
  })
}

const getCustomerUserToken = async ({
  email,
  password,
}: {
  email: string
  password: string
}) => {
  const token = await getSuperToken()
  const cl = await getClient(token)
  const existingUser = await cl.customers.list({
    filters: {
      email_eq: email,
    },
  })

  if (existingUser.length === 0) {
    await cl.customers.create({ email, password })
  }
  const clientId = process.env.E2E_CLIENT_ID as string
  const endpoint = process.env.E2E_ENDPOINT as string
  const scope = process.env.E2E_SCOPE as string

  const data = await getCustomerToken(
    {
      clientId,
      endpoint,
      scope,
    },
    {
      username: email,
      password,
    }
  )
  return data?.accessToken as string
}

const getSuperToken = async () => {
  const clientId = process.env.E2E_INTEGRATION_CLIENT_ID as string
  const clientSecret = process.env.E2E_INTEGRATION_CLIENT_SECRET as string
  const endpoint = process.env.E2E_ENDPOINT as string
  const scope = process.env.E2E_SCOPE as string
  const data = await getIntegrationToken({
    clientId,
    clientSecret,
    endpoint,
    scope,
  })
  return data?.accessToken as string
}

const createCustomerAddresses = async (
  cl: CommerceLayerClient,
  params: DefaultParamsProps
) => {
  if (
    params.customer &&
    params.customerAddresses &&
    params.customerAddresses.length > 0
  ) {
    const token = await getCustomerUserToken({
      email: params.customer.email,
      password: params.customer.password,
    })
    const customerCl = await getClient(token)
    const {
      owner: { id },
    } = jwt_decode(token) as JWTProps

    const promises = params.customerAddresses.map(async (address) => {
      const a = await customerCl.addresses.create({
        ...address,
      } as AddressCreate)
      await customerCl.addresses.update({
        id: a.id,
        reference: a.id,
      })
      return customerCl.customer_addresses.create({
        customer_email: params.customer?.email ?? "",
        customer: customerCl.customers.relationship(id),
        address: customerCl.addresses.relationship(a),
      })
    })
    await Promise.all(promises)
  }
}

export const test = base.extend<FixtureType>({
  defaultParams: {
    customer: {
      email: process.env.E2E_CUSTOMER_USERNAME as string,
      password: process.env.E2E_CUSTOMER_PASSWORD as string,
    },
  },
  ordersPage: async ({ page, defaultParams }, use) => {
    const token = await (defaultParams.customer
      ? getCustomerUserToken(defaultParams.customer)
      : getToken(defaultParams.market))
    const accessToken =
      defaultParams.token === undefined ? token : defaultParams.token

    const ordersPage = new OrdersPage(page)
    await ordersPage.goto({
      pageUrl: "orders",
      token: accessToken,
    })
    await use(ordersPage)
  },
  addressesPage: async ({ page, defaultParams }, use) => {
    const token = await (defaultParams.customer
      ? getCustomerUserToken(defaultParams.customer)
      : getToken(defaultParams.market))

    const cl = await getClient(token)
    await createCustomerAddresses(cl, defaultParams)

    const accessToken =
      defaultParams.token === undefined ? token : defaultParams.token
    const addressesPage = new AddressesPage(page)
    await addressesPage.goto({
      pageUrl: "addresses",
      token: accessToken,
    })
    await use(addressesPage)
  },
})

export { expect } from "@playwright/test"
