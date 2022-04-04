import React, { useContext, useState } from "react";
import { ScrollView } from "react-native";
import { AppContext } from "../../../context/context-app";
import { Container, TextInput, Text, Box } from "./styled";

const Filter = () => {
  const { user } = useContext(AppContext);
  const [search, setSearch] = useState<string>("");

  const searchPokemon = search && search.toLowerCase();

  const filtered = user.filter((data: { name: string }) =>
    data.name.toLowerCase().includes(searchPokemon)
  );

  return (
    <>
      <TextInput
        placeholder="Buscar pokemon"
        value={search}
        onChangeText={(search) => setSearch(search)}
      />
      <Box>
        {search
          ? filtered.map(({ name }, index) => {
              return (
                <Container key={index}>
                  <Text key={index}>{name}</Text>
                </Container>
              );
            })
          : null}
      </Box>
    </>
  );
};

export default Filter;
