import styled from 'styled-components'

interface TitleProps {
  fontSize: number;
}

export const TitleContent = styled.h1<TitleProps>`
    font-weight: 400;
    font-size: ${props => `${props.fontSize}rem`};
    -moz-animation:  delayDisplay 1s;
    -o-animation: delayDisplay 1s;
    -webkit-animation: delayDisplay 1s;
    animation: delayDisplay 1s;

    @keyframes delayDisplay {
      from {
        opacity: 0;
      }

      70% {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    margin-bottom: 3rem;
    width: fit-content;
        
    div {
      margin-top: 0.5rem;
      width: 60%;
      height: 5px;
      background: ${props => props.theme.colors.secundary};
      border-radius: 5px;
      -moz-animation:  divAnim 1s;
      -o-animation: divAnim 1s;
      -webkit-animation: divAnim 1s;
      animation: divAnim 1s;
    }

    @keyframes divAnim {
        from {
          width: 0px;
        }

        60% {
          width: 100%;
        }

        to {
          width: 60%;
        }
    }
`