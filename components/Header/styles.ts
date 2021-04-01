import styled from 'styled-components';

export const Container = styled.header`
   height: 5rem;
`

export const Content = styled.div`
   max-width: 900px;
   margin: 0 auto;

   nav {
        height: 5rem;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        font-size: 1.25rem;

        a {
            transition: color 0.2s;
            
            div {
               height: 1px;
               width: 0;
               background: #fff;
               transition: width 0.5s;
            }

            &:hover {
               color: ${ props => props.theme.colors.secundary };
               
               div {
                  width: 100%;
               }
            }

            &.active {
               color: ${ props => props.theme.colors.secundary }
            }
        } 
   }
`