import jwtDecode from "jwt-decode"

interface JWTProps {
  organization: {
    slug: string
    id: string
  }
  owner: {
    id: string
  }
}

export const getInfoFromJwt = (accessToken: string) => {
  try {
    const {
      organization: { slug },
      owner: { id },
    } = jwtDecode(accessToken) as JWTProps
    console.log(jwtDecode(accessToken))
    return { slug, customerId: id }
  } catch (e) {
    return {}
  }
}
