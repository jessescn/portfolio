import styled from 'styled-components'

export const Container = styled.footer`
    height: 8rem;
    padding-bottom: 1rem;
    
    position: absolute;
    left: 0;
    right: 0;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    div, p {
        position: relative;
        -moz-animation:  basicFadeIn 2s ease-out;
        -o-animation: basicFadeIn 2s ease-out;
        -webkit-animation: basicFadeIn 2s ease-out;
        animation: basicFadeIn 2s ease-out;
    }

    svg {
        margin: 1rem 1rem 0 0;
        transition: all 0.2s;            

        &:hover {
            transform: scale(1.1);
            fill: ${props => props.theme.colors.secundary};
        }
    }

    @keyframes basicFadeIn {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }
`