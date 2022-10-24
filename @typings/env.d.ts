declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number
      NEXT_PUBLIC_BASE_PATH: string
      NEXT_PUBLIC_DOMAIN: string
      NEXT_PUBLIC_HOSTED: string
    }
  }
}

export {}
