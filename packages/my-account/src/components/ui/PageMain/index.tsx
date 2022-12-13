import { Wrapper } from "./styled"

function PageMain({ children }: { children: React.ReactNode }): JSX.Element {
  return <Wrapper>{children}</Wrapper>
}

export default PageMain
