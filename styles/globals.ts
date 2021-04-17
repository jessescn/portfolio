import { createGlobalStyle } from 'styled-components'

interface GlobalProps{
  showMenu: boolean;
}

export default createGlobalStyle<GlobalProps>`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    height: 100%;

    overflow-y: ${props => props.showMenu ? "hidden" : "inherit"};
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
`