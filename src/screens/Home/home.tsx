import React, { Fragment, useEffect, useState } from "react";
import { Modal, Pressable, ScrollView, View, Text, Image } from "react-native";
import {
  Containers,
  BackgroundName,
  PokemonName,
  HeadContents,
  Contents,
  PokemonContainers,
  PokemonContents,
  Logo,
  Avatar,
  LoadMore,
  Card,
} from "./styled";

import pokemonIMG from "../../../assets/images/pokemon.png";
import { backgroundColors } from "../components/Colors/colors";
import SearchComponent from "../components/Search/search";

type mapProps = {
  name: string;
  sprites: {
    front_default: string;
  };
  types: {
    name: string;
  };
};

const Home: React.FC = () => {
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
  };

  useEffect(() => {
    getAllPokemon();
  }, []);

  return (
    <Containers>
      <ScrollView
        automaticallyAdjustContentInsets={true}
        contentContainerStyle={{ backgroundColor: "#E5E5E5" }}
      >
        <HeadContents>
          <Logo source={pokemonIMG} />
          <SearchComponent />
        </HeadContents>
        <Contents>
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

            {(function mood() {
              if (modalVisible) {
                return (
                  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(!modalVisible)}
                  >
                    <View
                      style={{
                        flex: 1,
                        backgroundColor: "#c5c9d1",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Pressable onPress={() => setModalVisible(!modalVisible)}>
                        <Text
                          style={{
                            position: "relative",
                            bottom: 50,
                            fontSize: 30,
                            fontWeight: "bold",
                            color: "#000000",
                            padding: 10,
                          }}
                        >
                          x
                        </Text>
                      </Pressable>
                      <Card>
                        <Avatar
                          source={{
                            uri: data.sprites.front_default,
                          }}
                        />
                        <Text>{data.name}</Text>
                      </Card>
                    </View>
                  </Modal>
                );
              }
            })()}
          </PokemonContainers>
          <Pressable onPress={() => getAllPokemon()}>
            <LoadMore>
              <Text style={{ color: "#ffff" }}>Load More</Text>
            </LoadMore>
          </Pressable>
        </Contents>
      </ScrollView>
    </Containers>
  );
};

export default Home;
