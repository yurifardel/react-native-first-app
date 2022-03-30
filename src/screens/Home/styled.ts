import styled from "styled-components/native";
import LinearGradient from "react-native-linear-gradient";

export const Containers = styled.View`
  flex: 1
  background-color: #E5E5E5;
`;

export const HeadContents = styled.View`
  align-items: center;
  margin: 20px;
  padding: 20px;
`;

export const Contents = styled.View`
  height: 100%;
`;

export const PokemonContainers = styled.View`
  flex-direction: row;
  margin: 20px;
  flex-wrap: wrap;
`;

export const PokemonContents = styled.View`
  background-color:  #bbbcbd ;
  margin: 20px;
  height: 95.85px;
  width: 147px;
  border-radius: 20px
  align-items: center;
  justify-content: flex-end;
  box-shadow: 3px 3px 3px #141414;
`;

export const BackgroundName = styled.View`
  background-color: #676767;
  margin-bottom: 10px;
  width: 125px;
  height: 22px;
  align-items: center
  justify-content: center
  border-radius: 20px
`;

export const PokemonName = styled.Text`
  color: #d7d9db;
  font-weight: bold;
  font-size: 12px;
  font-style: normal;
`;

export const Logo = styled.Image`
  width: 117px
  height: 41px
  resize-mode: stretch
  align-self: center
  position: relative
  bottom: 20px
`;

export const Avatar = styled.Image`
  width: 120px
  height: 76px
  align-self: center
  position: relative
  bottom: 15px
`;

export const LoadMore = styled.View`
  justify-content: center
  align-items: center
  background-color: #2E6EB5
  height: 50px
  margin: 0px 50px 20px 50px
  border-radius: 8px
  box-shadow: 3px 3px 3px #141414;
`;

export const Card = styled.View`
  background-color: #c4c5cc
  height: 450px
  width: 300px
  align-items: center
  justify-content: center
  border-radius: 20px
  box-shadow:  0 0 5px #141414;

`;
