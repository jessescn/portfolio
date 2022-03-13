import styled from 'styled-components'

export const Experiences = styled.div`
  max-width: 650px;
  padding: 0 2rem;
  -moz-animation: fadeIn var(--animation-dur) ease-out;
  -o-animation: fadeIn var(--animation-dur) ease-out;
  -webkit-animation: fadeIn var(--animation-dur) ease-out;
  animation: fadeIn var(--animation-dur) ease-out;

  .loading {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
  }

  font-size: 0.9rem;
  line-height: 1.2rem;

  a {
    padding: 0.8rem 1.5rem;
    border-radius: 10px;

    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.background};

    font-weight: bold;
    font-size: 1rem;

    transition: font-size 0.2s ease;

    &:hover {
      font-size: 1.05rem;
    }
  }
`
