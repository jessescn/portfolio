import styled from 'styled-components'

export const Content = styled.section`

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem 4rem;

    @media (max-width: 900px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 600px){
        grid-template-columns: 1fr;
    }

    
    @keyframes projectFadeIn {
        0% {
            opacity: 0;
            transform: scale(0.95);
        }
        66% {
            opacity: 0;
            transform: scale(1.02);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    } 
`

export const Project = styled.a`
    max-width: 24rem;
    border: 3px solid ${props => props.theme.colors.primary};
    padding: 0.6rem;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    transition: all 0.2s;
    -moz-animation:  projectFadeIn var(--animation-dur) ease-out;
    -o-animation: projectFadeIn var(--animation-dur) ease-out;
    -webkit-animation: projectFadeIn var(--animation-dur) ease-out;
    animation: projectFadeIn var(--animation-dur) ease-out;

    h1 {
        font-size: 1.3rem;
        color: ${props => props.theme.colors.secundary};
        font-weight: bold;
        width: fit-content;
    }

    strong {
        display: block;
        font-size: 0.8rem;
        margin: 0.5rem 0 1rem;
    }
    
    p {
        font-size: 0.7rem;
        font-weight: bold;
    }

    span {
        font-size: 0.6rem;
    }

    &:hover {
        color: ${props => props.theme.colors.background};
        background: ${props => props.theme.colors.primary};
        transform: scale(1.02);
    }
`
