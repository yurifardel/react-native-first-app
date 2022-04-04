import styled from "styled-components/native";

export const TextInput = styled.TextInput`
  width: 300px
  height: 50px
  text-align: center
  border-radius: 25px
  background-color: #f2f1ed

  justify-content: space-evenly
  box-shadow: 0 0 1.5px #141414;

`;

export const Box = styled.View`
  flex-direction: row;
  margin: 10px;
  flex-wrap: wrap;
  padding: 10px;
`;

export const Container = styled.View`
  background-color: #757574;
  opacity: 0.2
  margin: 4px
  border-radius: 8px;
  padding: 10px;
`;
export const Text = styled.Text`
  color: white;
  font-weight: bold;
`;
