import { ReactNode } from "react";
import { Container, Content } from "./styles";

interface TitleProps {
    children: ReactNode;
    fontSize?: number;
}

export function Subtitle({ children, fontSize=1.4 }: TitleProps){

  return(
    <Container>
      <Content fontSize={fontSize}>
        {children}
      </Content>
      <div></div>
    </Container>
  )

}