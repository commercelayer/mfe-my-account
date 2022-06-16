import {
  getIntegrationToken,
  getCustomerToken,
  getSalesChannelToken,
} from "@commercelayer/js-auth"
import CommerceLayer, {
  CommerceLayerClient
} from "@commercelayer/sdk"
import { test as base } from "@playwright/test"
import dotenv from "dotenv"
import jwt_decode from "jwt-decode"

import path from "path"

import { OrdersPage } from "./OrdersPage"

dotenv.config({ path: path.resolve(__dirname, "../../.env.local") })

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
}

type FixtureType = {
  defaultParams: DefaultParamsProps
  ordersPage: OrdersPage
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
    domain: process.env.NEXT_PUBLIC_DOMAIN
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
      password: password,
    }
  )
  return data?.accessToken as string
}

const getSuperToken = async () => {
  const clientId = process.env.E2E_INTEGRATION_CLIENT_ID as string
  const clientSecret = process.env
    .E2E_INTEGRATION_CLIENT_SECRET as string
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

export const test = base.extend<FixtureType>({
  defaultParams: { customer: { email: process.env.E2E_CUSTOMER_USERNAME as string, password: process.env.E2E_CUSTOMER_PASSWORD as string } },
  ordersPage: async ({ page, defaultParams }, use) => {
    const token = await (defaultParams.customer
      ? getCustomerUserToken(defaultParams.customer)
      : getToken(defaultParams.market))
    const accessToken =
      defaultParams.token === undefined ? token : defaultParams.token

    const ordersPage = new OrdersPage(page)
    await ordersPage.goto({
      token: accessToken,
    })
    await use(ordersPage)
  },
})

export { expect } from "@playwright/test"
