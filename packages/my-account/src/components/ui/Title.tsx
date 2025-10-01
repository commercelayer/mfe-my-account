interface Props {
  children: React.ReactNode
}

function Title({ children }: Props): JSX.Element {
  return (
    <div className="flex h-8 items-center mb-8">
      <h2 className="block text-lg font-medium">{children}</h2>
    </div>
  )
}

export default Title
