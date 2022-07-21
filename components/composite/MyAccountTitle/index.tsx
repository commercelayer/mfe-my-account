import { Settings } from "HostedApp"
import Head from "next/head"
import { useTranslation } from "react-i18next"

type MyAccountHeadProps = Pick<Settings, "favicon"> & {
  title: string
}

export const MyAccountHead: React.FC<MyAccountHeadProps> = (props) => {
  const { t } = useTranslation()

  return (
    <Head>
      <title>{t("general.title", { companyName: props.title })}</title>
      <link rel="icon" href={props.favicon} />
    </Head>
  )
}
