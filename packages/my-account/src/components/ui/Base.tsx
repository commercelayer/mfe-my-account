export function Base({ className, children }: React.HTMLAttributes<HTMLDivElement>): JSX.Element {
  return <div className={`bg-gray-50 min-h-screen w-auto ${className ?? ''}`}>{children}</div>
}
