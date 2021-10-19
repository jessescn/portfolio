import styled from 'styled-components';

type ContentProps = {
  fontSize: number;
}

export const Container = styled.div`
  width: fit-content;
  margin-bottom: 1rem;

  > div {
    margin-top: 0.2rem;
    border-radius: 5px;
    height: 3px;
    width: 90%;
    background-color: ${props => props.theme.colors.secundary};
  }
`

export const Content = styled.h2<ContentProps>`
  font-weight: bold;
  font-size: ${props => `${props.fontSize}rem`};

  @media (max-width: 950px) {
    font-size: 1.2rem;
  }
`