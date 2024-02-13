import { Flex } from '#components/ui/Common/styled'
import { Children, type ReactNode } from 'react'
import { ChildWrapper, Wrapper } from './styled'

export interface StackProps {
  children: ReactNode
}

function renderChild(child: ReactNode): JSX.Element {
  return (
    <ChildWrapper>
      {child}
    </ChildWrapper>
  )
}

export function Stack({ children, ...props }: StackProps): JSX.Element {
  return (
    <Wrapper {...props}>
      <Flex>
        {Children.map(children, (child) => child != null && renderChild(child))}
      </Flex>
    </Wrapper>
  )
}
