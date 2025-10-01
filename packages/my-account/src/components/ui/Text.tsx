
interface Props {
  children: React.ReactNode
}

export default function Text(props: Props): JSX.Element {
  return (
    <p className="ml-1.5 border-b border-gray-200/10">
      {props.children}
    </p>
  )
}
