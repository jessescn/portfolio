import { createGlobalStyle } from 'styled-components'

interface GlobalProps {
  showMenu: boolean
}

export default createGlobalStyle<GlobalProps>`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  :root {
    --animation-dur: 800ms;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    height: 100%;

    overflow-y: ${props => (props.showMenu ? 'hidden' : 'inherit')};
  }

  @media (max-width: 1080px){
    html {
        font-size: 93.75%;
    }
  }

  @media (max-width: 720px){
    html {
        font-size: 87.5%;
    }
  }

  body, input, textarea, select, button {
    font: 400 1rem "Roboto", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @keyframes fadeIn {
        0% {
            opacity: 0;
            top: -20px;
        }
        66% {
          opacity: 0;
        }
        100% {
            top: 0;
            opacity: 1;
        }
  }

  @keyframes backgroundFadeIn {
    0% {
      background:rgba(0,0,0,.0);
    }
    100% {
      background:rgba(0,0,0,.6);
    }
  }

  @keyframes backgroundFadeOut {
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
`
