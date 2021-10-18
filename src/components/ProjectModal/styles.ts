import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  display: table;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  
  &.out {
    display: none;
  }

  .modal-background {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
    
    background: rgba(0,0,0,0.6);
  }

  @keyframes fadeIn {
    0% {
      background:rgba(0,0,0,.0);
    }
    100% {
      background:rgba(0,0,0,.6);
    }
  }

  @keyframes fadeOut {
    0% {
      background:rgba(0,0,0, .6);
    }
    100% {
      background:rgba(0,0,0,.0);
    }
  }

  @keyframes quickScaleDown {
    0% {
      transform:scale(1);
    }
    99.9% {
      transform:scale(1);
    }
    100% {
      transform:scale(0);
    }
  }

  @keyframes modalFadeIn {
    0% {
      background-color:transparent;
    }
    100% {
      background-color: ${props => props.theme.colors.background};
    }
  }

  @keyframes modalFadeOut {
    0% {
      background-color: ${props => props.theme.colors.background};
    }
    100% {
      background-color:transparent;
    }
  }

  @keyframes modalContentFadeIn {
    0% {
      opacity:0;
      top:-20px;
    }
    100% {
      opacity:1;
      top:0;
    }
  }

  @keyframes modalContentFadeOut {
    0% {
      opacity:1;
      top:0px;
    }
    100% {
      opacity:0;
      top:-20px;
    }
  }

  &.in {
    transform:scale(1);
    .modal-background {
      animation: fadeIn .3s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
      .modal {
        background-color:transparent;
        animation: modalFadeIn .1s .3s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
        .title, h2, .technologies, .info {
          opacity:0;
          position:relative;
          animation: modalContentFadeIn .3s 1s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
        }
      }

      .overview {
        opacity: 0;
        animation: modalContentFadeIn .3s .6s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
      }
    }
  }

  &.out {
    animation: quickScaleDown 0s .3s linear forwards;
    .modal-background {
      animation: fadeOut .3s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
      .modal {
        animation: modalFadeOut .3s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
        .title, h2, .technologies, .info {
          animation: modalContentFadeOut .3s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
        }
      }

      .overview {
        animation: modalContentFadeOut .3s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
      }
    }
  }
`


export const Modal = styled.div`
  position: relative;
  background-color: ${props => props.theme.colors.background};
  min-height: 450px;
  max-height: 80vh;
  width: 60vw;
  max-width: 850px;
  z-index: 4;
  
  padding: 2.5rem;
  border: 3px solid ${props => props.theme.colors.text};

  .info {
    display: flex;
    flex-wrap: wrap;

    .technologies {
      width: 50%;
    }
  }

  .overview {
    height: 300px;
    width: 100%;
    margin-top: 2rem;
    display: flex;
  }
  
  .overview > div {
    width: 50% !important;
  }

  @media (max-width: 1240px) {
    .overview {
      flex-direction: column;
      overflow: scroll;

      & > div {
        width: 100% !important;
      }
    }
  }

  @media (max-width: 950px) {
    width: 80vw;
    max-width: none;
  }

  .closeButton {
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
  }
`

export const Title = styled.a`
  font-weight: bold;
  display: block;
  font-size: 2.5rem;
  color: ${props => props.theme.colors.secundary};
  margin-bottom: 1rem;
`

export const Subtitle = styled.h2`
  font-weight: bold;
  font-size: 1.4rem;
  margin: 2rem 0 1rem;
`
