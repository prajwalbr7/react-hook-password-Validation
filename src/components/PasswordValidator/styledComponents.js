// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  background-color: #24263c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const SubContainer = styled.div`
  width: 400px;

  background-color: #383a4e;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  border-radius: 10px;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 35px;
  font-weight: bold;
  color: #edeeff;
`
export const Para = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 400;
  color: #edeeff;
`
export const Input = styled.input`
  height: 30px;
  width: 100%;
  border-width: 0px;
  border-radius: 30px;
  margin-top: 30px;
  padding-left: 10px;
  outline: none;
`
export const ErrorMessage = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 400;
  color: #ef4444;
`
