import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.main`
    min-height: calc(100vh - 13rem);
    max-width: 1120px;
    padding-top: 4rem;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    > h1 {

        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        
        font-weight: 400;
        font-size: 2.2rem;
        margin-bottom: 4rem;
        
        div {
            margin-top: 0.5rem;
            width: 60%;
            height: 5px;
            background: ${props => props.theme.colors.secundary};
            border-radius: 5px;
        }
    }
`

export const Content = styled.div`

    max-width: 650px;

    h2 {
        font-weight: 400;
    }

    a {
        display: block;
        margin-bottom: 5rem;
        cursor: pointer;

        h1 {
            color: ${props => props.theme.colors.secundary};
            font-size: 2rem;
            line-height: 2rem;
            font-weight: 400;
            margin-bottom: 2rem;

            &:hover {
                color: ${shade(0.15, "#C83E4D")}
            }
        }

        p {
            font-size: 0.9rem;
            line-height: 1.5rem;
        }
    }
`