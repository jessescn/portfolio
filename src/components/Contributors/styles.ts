import styled from 'styled-components';

export const ContributorWrapper = styled.div`
  div {
    max-height: 300px;
    overflow-y: auto;
  }

  a {
    padding-right: 0.375rem;
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


  @media (max-width: 950px) {
    margin: 1.5rem 0 0;

    a {
        img {
          width: 35px;
          height: 35px;
        }
      }
    }

`