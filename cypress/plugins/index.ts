/**
 * @type {Cypress.PluginConfig}
 */

import axios from "axios"
import { oneLineTrim } from "common-tags"

interface EnvVariables {
  RECORD: boolean
  BASE_URL: string
  CLIENT_ID: string
  SCOPE: string
  USERNAME: string
  PASSWORD: string
  ACCESS_TOKEN: string
}

export default async (
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
) => {
  const { RECORD, BASE_URL, CLIENT_ID, SCOPE, USERNAME, PASSWORD } =
    config.env as EnvVariables

  if (RECORD) {
    const {
      data: { access_token },
    } = await axios.post(oneLineTrim`
        ${BASE_URL}/oauth/token?grant_type=password
        &client_id=${CLIENT_ID}
        &scope=${SCOPE}
        &username=${USERNAME}
        &password=${PASSWORD}
      `)

    config.env.ACCESS_TOKEN = access_token
  } else {
    config.env.ACCESS_TOKEN = "validToken"
  }
  return config
}
