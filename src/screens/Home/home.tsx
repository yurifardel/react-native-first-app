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

import pokemonIMG from "../../../assets/images/pokemon.png";

const Home: React.FC = () => {
  const [allPokemon, setAllPokemon] = useState<any>([]);
  const [load, setLoad] = useState<string>(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );

  const getAllPokemon = async () => {
    const request = await fetch(load);
    const data = await request.json();

    setLoad(data.next);

    function pokemonObject(results: any[]) {
      results.forEach(async (pokemon) => {
        const request = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const dataDetails = await request.json();

        setAllPokemon((current: []) => [...current, dataDetails]);
        await allPokemon.sort((a: { id: number }, b: { id: number }) => a.id - b.id)
      });
    }

    pokemonObject(data.results);
  };

  useEffect(() => {
    getAllPokemon();
  }, []);

  if (!allPokemon) {
    return null;
  }

  return (
    <Containers>
      <ScrollView
        automaticallyAdjustContentInsets={true}
        contentContainerStyle={{ backgroundColor: "#E5E5E5" }}
      >
        <SearchContents>
          <Logo source={pokemonIMG} />
          <TextInput placeholder="Buscar pokemon" />
        </SearchContents>
        <Contents>
          <PokemonContainers>
            {allPokemon.map((pokemon: any, index: number) => {
              return (
                <PokemonContents key={index}>
                  <Avatar
                    key={index}
                    source={{
                      uri: pokemon.sprites.front_default,
                    }}
                  />
                  <BackgroundName>
                    <PokemonName key={index}>{pokemon.name}</PokemonName>
                  </BackgroundName>
                </PokemonContents>
              );
            })}
          </PokemonContainers>
        </Contents>
      </ScrollView>
    </Containers>
  );
};

export default Home;
