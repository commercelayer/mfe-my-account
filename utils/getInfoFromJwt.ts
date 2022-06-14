import jwtDecode from "jwt-decode"

interface JWTProps {
  organization: {
    slug: string
    id: string
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
      owner,
      test
    } = jwtDecode(accessToken) as JWTProps
    return { slug, customerId: owner?.id, isTest: test }
  } catch (e) {
    return {}
  }
}
