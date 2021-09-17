import styled from 'styled-components';

export const NavBar = styled.div`
  width: 100vw;
  height: 7vh;
  color: white;
  background-color: black;
  padding:5%;
  display:flex; 
  flex-direction:row;
  
  h1 {
    font-size: 3vw;
    color: white;
  }
  h2 { 
    &:hover { 
      color: #3366ff; 
    }
    
    margin:1vw;
    font-size: 2vw;
    color:white; 
  }
  
  div {
    width: 55%;
  }
`

