import styled from "styled-components";

export const Experience = styled.div`
  margin-bottom: 4rem;

  h2 {
    font-size: 1.6rem;
    line-height: 1.6rem;
    margin: 2rem 0 0.5rem;
  }

  span {
    display: block;
    color: ${(props) => props.theme.colors.secundary};
    font-size: 1rem;
    margin-top: 1rem;
    font-style: italic;
  }

  time {
    display: block;
    color: ${(props) => props.theme.colors.secundary};
    font-size: 0.8rem;
    margin: 0.5rem 0 1rem;
  }

  ul {
    margin: 1rem 0 0 2.5rem;

    li {
      margin-top: 1rem;
    }
  }
`;
