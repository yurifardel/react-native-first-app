import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'

export const Containers = styled.View`
  flex: 1
  background-color: #E5E5E5;
`

export const SearchContents = styled.View`
  align-items: center;
  margin: 20px; 
  padding: 20px
`

export const TextInput =  styled.TextInput`
  width: 300px
  height: 50px
  text-align: center
  border-radius: 25px
  background-color: #f2f1ed
  justify-content: space-evenly
`

export const Contents = styled.View`
  height: 100%
`

export const PokemonContainers = styled.View`
  flex-direction: row;

  margin: 20px;
  flex-wrap: wrap
`

export const PokemonContents = styled.View`
  background-color:  #bbbcbd ;
  margin: 20px;
  height: 95.85px;
  width: 147px;
  border-radius: 20px
  align-items: center;
  justify-content: flex-end;
  box-shadow: 5px 5px 5px #949494;
`

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
`

export const Avatar = styled.Image`
  width: 120px
  height: 76px
  align-self: center
  position: relative
  bottom: 15px
`