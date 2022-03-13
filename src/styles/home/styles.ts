import styled from 'styled-components'

export const HomeContainer = styled.main`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
  height: calc(100vh - 13rem);

  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  -moz-animation: fadeIn 1s;
  -o-animation: fadeIn 1s;
  -webkit-animation: fadeIn 1s;
  animation: fadeIn 1s;

  @media (max-width: 720px) {
    img {
      display: none;
    }
  }
`

export const Hero = styled.section`
  max-width: 600px;
  margin-bottom: 5rem;

  h1 {
    font-size: 4.5rem;
    line-height: 4.5rem;
    font-weight: 400;
    margin-bottom: 2.5rem;

    span {
      display: block;
      background: ${props => props.theme.colors.secundary};
      width: 50%;
      height: 5px;
    }
  }

  span {
    font-size: 2rem;
    font-weight: 400;
  }

  p {
    font-size: 0.9rem;
    line-height: 2.25rem;
  }
`
