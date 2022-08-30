import CommerceLayer, { Parcel } from "@commercelayer/sdk"
import { createContext, useState, useEffect, ReactNode } from "react"

import { fetchParcel } from "utils/fetchParcel"
import { getInfoFromJwt } from "utils/getInfoFromJwt"

interface ParcelProviderData {
  parcel?: Parcel
}

interface ParcelStateData {
  parcel?: Parcel
}

const initialState: ParcelStateData = {
  parcel: undefined,
}

export const ParcelContext = createContext<ParcelProviderData | null>(null)

interface ParcelProviderProps {
  parcelId: string
  accessToken: string
  children: ((props: ParcelProviderData) => ReactNode) | ReactNode
}

export const ParcelProvider: React.FC<ParcelProviderProps> = ({
  children,
  parcelId,
  accessToken,
}) => {
  const [state, setState] = useState(initialState)

  const fetchInitialParcel = async (
    parcelId?: string,
    accessToken?: string
  ) => {
    if (!parcelId || !accessToken) {
      return
    }

    const { slug } = getInfoFromJwt(accessToken)
    if (!slug) {
      return
    }

    const domain = process.env.NEXT_PUBLIC_DOMAIN || "commercelayer.io"

    const cl = CommerceLayer({
      organization: slug,
      accessToken,
      domain,
    })

    const parcel = await fetchParcel(cl, parcelId)

    setState({
      ...state,
      parcel,
    })
  }

  useEffect(() => {
    fetchInitialParcel(parcelId, accessToken)
  }, [parcelId, accessToken])

  const value = {
    ...state,
    parcel: state.parcel,
  }

  return (
    <ParcelContext.Provider value={value}>
      {typeof children === "function" ? children(value) : children}
    </ParcelContext.Provider>
  )
}
