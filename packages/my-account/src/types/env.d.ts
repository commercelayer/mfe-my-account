interface ImportMeta {
  env: ImportMetaEnv & {
    PORT: number
    PUBLIC_BASE_PATH: string
    PUBLIC_SLUG: string
    PUBLIC_DOMAIN: string
    PUBLIC_HOSTED: string
  }
}
