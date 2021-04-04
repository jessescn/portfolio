import styled from 'styled-components'

export const Container = styled.main`
    min-height: calc(100vh - 13rem);
    max-width: 1120px;
    padding: 4rem 2rem;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {

        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        
        font-weight: 400;
        font-size: 2.2rem;
        
        div {
            margin-top: 0.5rem;
            width: 60%;
            height: 5px;
            background: ${props => props.theme.colors.secundary};
            border-radius: 5px;
        }
    }
`

export const Content = styled.section`

    margin-top: 4rem; 

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem 4rem;

    a {
        max-width: 24rem;
        border: 3px solid ${props => props.theme.colors.primary};
        padding: 0.6rem;
        cursor: pointer;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        transition: all 0.2s;

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
    }

    @media (max-width: 900px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 600px){
        grid-template-columns: 1fr;
    }
`
