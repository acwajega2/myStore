import styled from 'styled-components'
export const ButtonContainer = styled.button`
 text-transform: capitalize;
 font-size: 1.4rem; 
 color:var(--mainWhite);
 padding:0.2rem 0.5rem;
 margin:0.2rem 0.5rem 0.2rem 0;
 height:3rem;
 background: ${props => (props.cart? "#000066" : "#ff0066")};
 border: none;
 border-radius: 6px;
 transition: all 0.5s ease-in-out;
 &:hover{
     background:${props => (props.cart? "#0000b3" : "#ff80b3")};
     color:var(--mainWhite)
 }
 &:focus{
     outline:none;
 }
 `

