import { ReactNode } from "react";
import { Container } from "./styles";

interface TitleProps {
    children: ReactNode;
    alignItems?: string;
    fontSize: number;
}

export function Title({ children, alignItems="center", fontSize }: TitleProps){

    return(
      <Container alignItems={alignItems} fontSize={fontSize}>
        {children}
        <div></div>
      </Container>
    )

}