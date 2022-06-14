import jwtDecode from "jwt-decode"

interface JWTProps {
  organization: {
    slug: string
    id: string
  },
  application: {
    kind: string
  },
  owner?: {
    id?: string
  },
  test: boolean
}

export const getInfoFromJwt = (accessToken: string) => {
  try {
    const {
      organization: { slug },
      application: { kind },
      owner,
      test
    } = jwtDecode(accessToken) as JWTProps
    return { slug, kind, customerId: owner?.id, isTest: test }
  } catch (e) {
    return {}
  }
}
