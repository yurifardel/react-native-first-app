import React, { Fragment, useContext, useEffect, useState } from "react";
import { Pressable, ScrollView, Text } from "react-native";
import { AppContext } from "../../../context/context-app";
import { backgroundColors } from "../Colors/colors";
import Header from "../Header/header";
import ModalComponent from "../Modal/modal";
import {
  Avatar,
  BackgroundName,
  LoadMore,
  PokemonContainers,
  PokemonContents,
  PokemonName,
} from "./styled";

type mapProps = {
  name: string;
  sprites: {
    front_default: string;
  };
  types: {
    name: string;
  };
};

const List = () => {
  const { setToPokedex } = useContext(AppContext);
  const [allPokemon, setAllPokemon] = useState<any>([]);
  const [load, setLoad] = useState<string>(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [data, setData] = useState<any>({});

  const getAllPokemon = async () => {
    const request = await fetch(load);
    const data = await request.json();

    setLoad(data.next);

    function pokemonObject(results: [{ pokemon: object; name: string }]) {
      results.forEach(async (pokemon) => {
        const request = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const dataDetails = await request.json();

        setAllPokemon((current: []) => [...current, dataDetails]);
        await allPokemon.sort(
          (a: { id: number }, b: { id: number }) => a.id - b.id
        );
      });
    }

    pokemonObject(data.results);
    setToPokedex(data.results);
  };

  useEffect(() => {
    getAllPokemon();
  }, []);
  return (
    <>
      <PokemonContainers>
        {allPokemon.map((pokemon: mapProps, index: number) => {
          return (
            <Fragment key={index}>
              <Pressable
                onPress={() => {
                  setData(pokemon);
                  setModalVisible(true);
                }}
              >
                <PokemonContents
                  key={index}
                  style={{
                    backgroundColor:
                      backgroundColors[pokemon.types[0].type.name],
                  }}
                >
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
              </Pressable>
            </Fragment>
          );
        })}

        {modalVisible ? (
          <ModalComponent
            visible={modalVisible}
            setToVisible={setModalVisible}
            data={data}
          />
        ) : null}
      </PokemonContainers>
      <Pressable onPress={() => getAllPokemon()}>
        <LoadMore>
          <Text style={{ color: "#ffff" }}>Load More</Text>
        </LoadMore>
      </Pressable>
    </>
  );
};

export default List;
