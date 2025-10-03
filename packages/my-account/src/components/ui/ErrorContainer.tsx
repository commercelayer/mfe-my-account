import { Base } from "#components/ui/Base"
import { Container } from "#components/ui/Container"
import Footer from "#components/ui/Footer"
import { LogoCL } from "#components/ui/LogoCL"

export function ErrorContainer({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <Base>
      <Container>
        <div className="flex flex-wrap justify-end items-stretch flex-col h-screen p-5 md:p-10 lg:px-20 lg:pb-10">
          <div className="md:max-w-xs">
            <LogoCL className="self-center text-black md:pl-4 md:self-auto" />
          </div>
          <div className="flex flex-col flex-1 justify-center items-center text-center">
            <div className="flex flex-col items-center md:flex-row">{children}</div>
          </div>
          <div className="absolute bottom-0 block lg:hidden pb-2">
            <Footer />
          </div>
        </div>
      </Container>
    </Base>
  )
}
