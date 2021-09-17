import styled from 'styled-components';

export const ListItem = styled.li`
  list-style-type: none;
  width: 100%;
  height: 10%;
  color: #fff;
  text-align:center;
  margin-top: 2%;
  padding: 10px;
  border-radius: 2px;
  background-color:#3366ff;
  opacity: ${props => props.opacity };
  outline: none;
  cursor: pointer;
  border: none;
  
  &:hover { 
    & label {
      color: white;
    }
    background-color: #809fff;
  }
  
`
