import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
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


export type Props = { 
  id: string,
  name: string,
  avatar: string
}
let list: Array<Props> = []


const Home = ({ Props }) => {
  const [schema, setSchema] = useState(Props)

  useEffect(() => {
    const axiosReq = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon/");

        response.data["results"].map(
          async (item: {
            name: string;
            url: string;
          }) => {
            const requestImageUrl = await axios.get(item.url);
            const _id =  Math.random().toString(16).slice(2) + Date.now().toString(16).slice(4) 

            setSchema({id: _id, name: item.name, avatar: requestImageUrl.data.sprites.front_default})
          }
        );
      } catch (e) {
        console.log(e);
      }
    };
    axiosReq();
  }, []);


  list.push(schema)


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
              list.map(items => {
                return (
                  <PokemonContents >
                  <Avatar 
                    key={items.id}
                    source={{
                      uri: items.avatar,
                    }}
                  />
                  <BackgroundName>
                    <PokemonName key={items.id} >{items.name}</PokemonName>
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
