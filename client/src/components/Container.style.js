// represent div that goes around whole page
import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${ (props) => props.backgroundColor };
  };
  color: ${ (props) => props.textColor};
`
export const RowContainer = styled.div`
  display:flex; 
  flex-direction:row;
`
export const CalenderContainer = styled.div`
  background-color: ${ (props) => props.backgroundColor };
  color: ${(props) => props.textColor};
  padding: 5%;
  align-items: center;
  display: flex;
  justify-content: center;
`

export const AppointmentsContainer = styled.div`
  background-color: ${ (props) => props.backgroundColor };
  color: ${(props) => props.textColor};
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`