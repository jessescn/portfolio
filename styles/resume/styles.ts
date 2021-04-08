import styled from 'styled-components'

export const Experiences = styled.div`
    max-width: 650px;
    padding: 0 2rem;

    position: relative;

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

    div {
        margin-bottom: 4rem;

        h2 {
            font-size: 1.6rem;
            line-height: 1.6rem;
            margin: 2rem 0 0.5rem;
        }

        span {
            display: block;
            color: ${props => props.theme.colors.secundary};
            font-size: 1rem;
            margin-top: 1rem;
        }

        time {
            display: block;
            color: ${props => props.theme.colors.secundary};
            font-size: 0.8rem;
            margin: 0.5rem 0 1rem;
        }

        ul {
            margin: 1rem 0 0 2.5rem;

            li {
                margin-top: 1rem;
            }
        }

    }
`