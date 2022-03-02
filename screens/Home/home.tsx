import React, { useEffect, useState } from "react";
import { ScrollView, SectionList } from "react-native";
import {
  Containers,
  BackgroundName,
  PokemonName,
  SearchContents,
  Contents,
  PokemonContainers,
  PokemonContents,
  Logo,
  TextInput,
  Avatar,
} from "./styled";

import pokemon from "../../assets/images/pokemon.png";
import axios from "axios";
const arr = new Array()


const Home: React.FC = () => {
  const [name, setName] = useState();
  const [avatar, setAvatar] = useState();
  const schema = {
    name,
    avatar
  }
  arr.push(schema)

  useEffect(() => {
    const getAxios = async () => {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon/");
      for (let i in response.data.results) {
        setName(response.data.results[i].name);
        const responseUrl = await axios.get(response.data.results[i].url);

        setAvatar(responseUrl.data["sprites"]["front_default"]);
      }
    };

    getAxios();
  }, []);


  return (
    <Containers>
      <ScrollView
        automaticallyAdjustContentInsets={true}
        contentContainerStyle={{ backgroundColor: "#E5E5E5" }}
      >
        <SearchContents>
          <Logo source={pokemon} />
          <TextInput placeholder="Buscar pokemon" />
        </SearchContents>
        <Contents>
          <PokemonContainers>
            {
              arr.map(items => {
                return (
                  <PokemonContents>
                  <Avatar key={items.avatar}
                    source={{
                      uri: items.avatar,
                    }}
                  />
                  <BackgroundName>
                    <PokemonName key={items.name}>{items.name}</PokemonName>
                  </BackgroundName>
                </PokemonContents>
                )
              })
            }
       
          </PokemonContainers>
        </Contents>
      </ScrollView>
    </Containers>
  );
};

export default Home;
