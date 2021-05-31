declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number
      NEXT_PUBLIC_CLAYER_DOMAIN: string
      NEXT_PUBLIC_CLAYER_HOSTNAME: string
    }
  }
}

export {}
