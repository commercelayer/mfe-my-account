import { Children, type ReactNode } from 'react'

export interface StackProps {
  children: ReactNode
}

function renderChild(child: ReactNode): JSX.Element {
  return (
    <div className='flex-1 flex flex-col items-start py-2 first:pl-0 last:pr-0 px-4 border-l border-gray-100 first:border-l-0'>
      {child}
    </div>
  )
}

export function Stack({ children, ...props }: StackProps): JSX.Element {
  return (
    <div className="border-t border-b border-gray-100 py-6" {...props}>
      <div className='flex'>
        {Children.map(children, (child) => child != null && renderChild(child))}
      </div>
    </div>
  )
}
