import styled from 'styled-components';

export const Container = styled.header`
   height: 5rem;
`

export const Content = styled.div`
   max-width: 650px;
   margin: 0 auto;

   .themeButton {
      position: absolute !important;
      right: 30px;
      top: 30px;

      @media (max-width: 720px){
         right: 0;
         left: 30px;
      }
   }

   nav {
        height: 5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

        font-size: 1.2rem;

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

   div.menu {
         
         display: none;
         width: 40px;

         div {
            width: 100%;
            height: 5px;
            background: ${ props => props.theme.colors.primary };
            transition-duration: 0.3s;

            & + div {
                margin-top: 5px;
            }
         }
   }
   
   @media (max-width: 720px){

      position: relative;

      div.menu {
         display: block;
         position: absolute;
         right: 20px;
         top: 30px;
         z-index: 100;
      }

      nav {
         display: none;
      }

      &.on {

         nav {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 10;
            position: absolute;
            right: 0;
            left: 0;
            bottom: 0;
            top: 0;
            height: 100vh;
            background: ${props => props.theme.colors.background};

            a {
               display: block;
               text-align: center;
               font-size: 2rem;
               line-height: 4rem;
            }
         }

         div.menu {
            .one {
               transform: rotate(45deg) translate(7px, 7px);
            }

            .two {
               opacity: 0; 
            }

            .three {
               transform: rotate(-45deg) translate(7px, -7px)
            }
         }
      }
   }
`