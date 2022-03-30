import React, { Fragment, useEffect, useState } from "react";
import { View, Text } from "react-native";
import { TextInput } from "./styled";

const SearchComponent = () => {
  const [search, setSearch] = useState<string>("");
  const [pokemons, setPokemons] = useState<[]>([]);

  const searchPokemon = search && search.toLowerCase();

  const filtered = pokemons.filter((data: { name: string }) =>
    data.name.toLowerCase().includes(searchPokemon)
  );

  const getPokemon = async () => {
    const request = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
    const data = await request.json();

    setPokemons(data.results);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <Fragment>
      <TextInput
        placeholder="Buscar pokemon"
        value={search}
        onChangeText={(search) => setSearch(search)}
      />
      {search ? (
        <View>
          {filtered.map(({ name }, index) => {
            return <Text key={index}>{name}</Text>;
          })}
        </View>
      ) : null}
    </Fragment>
  );
};

export default SearchComponent;
