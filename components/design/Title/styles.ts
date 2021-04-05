import styled from 'styled-components'

interface TitleProps {
  alignItems: string;
  fontSize: number;
}

export const Container = styled.h1<TitleProps>`
    display: flex;
    flex-direction: column;
    align-items: ${props => props.alignItems};
    
    font-weight: 400;
    font-size: ${props => `${props.fontSize}rem`};
    margin-bottom: 3rem;
    width: fit-content;
        
      div {
        margin-top: 0.5rem;
        width: 60%;
        height: 5px;
        background: ${props => props.theme.colors.secundary};
        border-radius: 5px;
      }
`