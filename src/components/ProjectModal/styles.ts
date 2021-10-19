import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  display: table;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 11;
  
  &.modal-close {
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
    z-index: 12;
    
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

  &.modal-open {
    transform:scale(1);
    .modal-background {
      animation: fadeIn .2s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
      .modal {
        background-color:transparent;
        animation: modalFadeIn .1s .2s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
        .title, h2, .technologies, .info, .overview  {
          opacity:0;
          position:relative;
          animation: modalContentFadeIn .2s .1s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
        }
      }
    }
  }

  &.modal-close {
    animation: quickScaleDown 0s .2s linear forwards;
    .modal-background {
      animation: fadeOut .2s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
      .modal {
        animation: modalFadeOut .2s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
        .title, h2, .technologies, .info,  .overview {
          animation: modalContentFadeOut .2s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
        }
      }
    }
  }
`


export const Modal = styled.div`
  position: relative;
  background: ${props => props.theme.colors.background} !important;
  min-height: 450px;
  max-height: 85vh;
  width: 60vw;
  width: 850px;
  z-index: 13;
  overflow-y: auto;
  
  padding: 2.5rem;
  border: 3px solid ${props => props.theme.colors.text};

  .info {
    padding: 2rem 0 1rem;
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
  
  .closeButton {
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
  }

  @media (max-width: 1240px) {
    .overview {
      flex-direction: column;

      & > div {
        width: 100% !important;
      }
    }
  }

  @media (max-width: 950px) {
    width: 80vw;
    max-width: none;
    padding: 1.5rem;
  }

  @media (max-width: 600px) {
    width: 95vw;

    .info {
      flex-direction: column;

      .technologies {
        width: 100%;
      }
    }

    .title {
      margin-top: 1.5rem;
    }
  }
`

export const Title = styled.a`
  font-weight: bold;
  display: block;
  font-size: 2.5rem;
  color: ${props => props.theme.colors.secundary};
  margin-bottom: 1rem;
  width: fit-content;

  > div {
    margin-top: 0.3rem;
    border-radius: 5px;
    height: 5px;
    width: 50%;
    background-color: ${props => props.theme.colors.secundary};
  }

  @media (max-width: 950px) {
    font-size: 2rem;
  }
`
