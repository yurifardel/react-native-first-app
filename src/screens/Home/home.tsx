import React from "react";
import { Containers } from "./styled";

import { PokemonProvider } from "../../context/context-app";
import List from "../components/List/list";
import Header from "../components/Header/header";
import { ScrollView } from "react-native";

const Home: React.FC = () => {
  return (
    <PokemonProvider>
      <Containers>
        <ScrollView
          automaticallyAdjustContentInsets={true}
          contentContainerStyle={{ backgroundColor: "#E5E5E5" }}
        >
          <Header />
          <List />
        </ScrollView>
      </Containers>
    </PokemonProvider>
  );
};

export default Home;
