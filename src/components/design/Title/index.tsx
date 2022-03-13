import { ReactNode } from 'react'
import { Container, TitleContent } from './styles'

interface TitleProps {
  children: ReactNode
  fontSize: number
}

export function Title({ children, fontSize }: TitleProps) {
  return (
    <Container>
      <TitleContent fontSize={fontSize}>{children}</TitleContent>
      <div></div>
    </Container>
  )
}
