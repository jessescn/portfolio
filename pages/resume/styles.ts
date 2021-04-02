import styled from 'styled-components'

export const Container = styled.main`
    min-height: calc(100vh - 13rem);
    max-width: 650px;
    padding-top: 4rem;
    margin: 0 auto;

    h1 {
        width: fit-content;

        font-size: 2.5rem;
        line-height: 2.5rem;
        font-weight: 400;

        border-bottom: 4px solid ${props => props.theme.colors.secundary};
    }
`

export const Experiences = styled.div`

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
            margin: 1rem 0 1.5rem;

            &:hover {
                text-decoration: underline;
            }
        }

        ul {
            margin: 1rem 0 0 2.5rem;

            li {
                margin-top: 1rem;
            }
        }

    }
`