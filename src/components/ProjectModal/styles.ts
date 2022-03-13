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

    background: rgba(0, 0, 0, 0.6);
  }

  &.modal-open {
    transform: scale(1);
    .modal-background {
      animation: backgroundFadeIn 0.2s cubic-bezier(0.165, 0.84, 0.44, 1)
        forwards;
      -moz-animation: backgroundFadeIn 0.2s cubic-bezier(0.165, 0.84, 0.44, 1)
        forwards;
      -o-animation: backgroundFadeIn 0.2s cubic-bezier(0.165, 0.84, 0.44, 1)
        forwards;
      -webkit-animation: backgroundFadeIn 0.2s
        cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
      .modal {
        background-color: transparent;
        animation: modalFadeIn 0.1s 0.2s cubic-bezier(0.165, 0.84, 0.44, 1)
          forwards;
        -moz-animation: modalFadeIn 0.1s 0.2s cubic-bezier(0.165, 0.84, 0.44, 1)
          forwards;
        -o-animation: modalFadeIn 0.1s 0.2s cubic-bezier(0.165, 0.84, 0.44, 1)
          forwards;
        -webkit-animation: modalFadeIn 0.1s 0.2s
          cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
        .title,
        h2,
        .technologies,
        .info,
        .overview {
          opacity: 0;
          position: relative;
          animation: modalContentFadeIn 0.2s 0.1s
            cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
          -moz-animation: modalContentFadeIn 0.2s 0.1s
            cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
          -o-animation: modalContentFadeIn 0.2s 0.1s
            cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
          -webkit-animation: modalContentFadeIn 0.2s 0.1s
            cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
        }
      }
    }
  }

  &.modal-close {
    animation: quickScaleDown 0s 0.2s linear forwards;
    -moz-animation: quickScaleDown 0s 0.2s linear forwards;
    -o-animation: quickScaleDown 0s 0.2s linear forwards;
    -webkit-animation: quickScaleDown 0s 0.2s linear forwards;
    .modal-background {
      animation: backgroundFadeOut 0.2s cubic-bezier(0.165, 0.84, 0.44, 1)
        forwards;
      -moz-animation: backgroundFadeOut 0.2s cubic-bezier(0.165, 0.84, 0.44, 1)
        forwards;
      -o-animation: backgroundFadeOut 0.2s cubic-bezier(0.165, 0.84, 0.44, 1)
        forwards;
      -webkit-animation: backgroundFadeOut 0.2s
        cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
      .modal {
        animation: modalFadeOut 0.2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
        -moz-animation: modalFadeOut 0.2s cubic-bezier(0.165, 0.84, 0.44, 1)
          forwards;
        -o-animation: modalFadeOut 0.2s cubic-bezier(0.165, 0.84, 0.44, 1)
          forwards;
        -webkit-animation: modalFadeOut 0.2s cubic-bezier(0.165, 0.84, 0.44, 1)
          forwards;
        .title,
        h2,
        .technologies,
        .info,
        .overview {
          animation: modalContentFadeOut 0.2s cubic-bezier(0.165, 0.84, 0.44, 1)
            forwards;
          -moz-animation: modalContentFadeOut 0.2s
            cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
          -o-animation: modalContentFadeOut 0.2s
            cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
          -webkit-animation: modalContentFadeOut 0.2s
            cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
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
  width: 50vw;
  max-width: 700px;
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
    height: 150px;
    width: 100%;
    margin-top: 2rem;
  }

  .closeButton {
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
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

    .overview {
      height: 100px;
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
