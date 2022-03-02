import styled from "styled-components/native";

export const Container = styled.View`
  justify-content: center;
`;

export const Image = styled.Image`
  width: 252px
  height: 88px
  resize-mode: stretch
  align-self: center
  position: relative
  bottom: 45px
`

export const Content = styled.View`
  background-color: white;
  justify-content: center;
  padding: 20px;
  margin: 15px;
  height: 450px;
  border-radius: 10px;
`

export const Input = styled.TextInput`
  height: 70px;
  margin-bottom: 20px;
  background-color: #f2f1ed
  padding: 10px;
  border-top-end-radius: 6px;
  border-top-left-radius: 6px;
  border-bottom-width: 3px;
  border-bottom-color: #2E6EB5;
 
`

export const Button = styled.View`
  align-items: center
  justify-content: center
  padding-vertical: 12px
  background-color: #2E6EB5
  height: 60px
  borderRadius: 10px
`

