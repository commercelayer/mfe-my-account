import jwtDecode from "jwt-decode"

interface JWTProps {
  organization: {
    slug: string
    id: string
  }
  owner: {
    id: string
  },
  test: boolean
}

export const getInfoFromJwt = (accessToken: string) => {
  try {
    const {
      organization: { slug },
      owner: { id },
      test
    } = jwtDecode(accessToken) as JWTProps
    return { slug, customerId: id, isTest: test }
  } catch (e) {
    return {}
  }
}
