import styled from 'styled-components';

export const Button = styled.button`
  width: 10%;
  height: 50px;
  color: #fff;
  background-color: ${(props) => props.backgroundColor };
  border-radius: 20px;
  outline: none;
  cursor: pointer;
  border: none;
  
  &:hover { 
    & label {
      color: white;
    }
    background-color: grey;
  }
  
`

