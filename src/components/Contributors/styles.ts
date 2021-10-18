import styled from 'styled-components';

export const ContributorWrapper = styled.div`

margin: 2rem 0;

  a {
    img {
      margin-top: 1rem;
      width: 45px;
      height: 45px;
      border-radius: 50%;
      border: 2px solid ${props => props.theme.colors.text};

      transition: 0.2s ease;

      &:hover {
        transform: scale(1.08);
      }
    }
  } 

`

export const Title = styled.a`
  font-weight: bold;
  font-size: 1.4rem;
  margin: 2rem 0 1rem;
`