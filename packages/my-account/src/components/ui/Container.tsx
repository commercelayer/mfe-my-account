export function Container({ children }: React.HTMLAttributes<HTMLDivElement>): JSX.Element {
  return <div className="container 2xl:max-w-screen-xl 2xl:mx-auto">{children}</div>
}
