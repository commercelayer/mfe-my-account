import { Settings } from "HostedApp"
import Head from "next/head"
import { useTranslation } from "react-i18next"

type MyAccountHeadProps = Pick<Settings, "faviconUrl"> & {
  title: string
}

export const MyAccountHead: React.FC<MyAccountHeadProps> = (props) => {
  const { t } = useTranslation()

  return (
    <Head>
      <title>{t("general.title", { companyName: props.title })}</title>
      <link rel="icon" href={props.faviconUrl} />
    </Head>
  )
}
