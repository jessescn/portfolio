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

    img {
        margin: 1rem 1.4rem 0;
        transition: all 0.2s;
        fill: ${props => props.theme.colors.primary};

        &:hover {
            transform: scale(1.1);
            fill: ${props => props.theme.colors.secundary};
        }
    } 
`