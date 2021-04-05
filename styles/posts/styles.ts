import styled from 'styled-components'
import { shade } from 'polished'

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