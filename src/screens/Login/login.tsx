import React from "react";
import { Text, Pressable, ImageBackground, View } from "react-native";
import { RootTabScreenProps } from "../../../types";
import { Button, Container, Content, Input, Image } from "./styled";
import img from "../../../assets/images/img.png";
import pokemon from "../../../assets/images/pokemon.png";

const Login = ({ navigation }: RootTabScreenProps<any>) => {
  return (
    <ImageBackground
      source={img}
      resizeMode="cover"
      style={{ flex: 1, justifyContent: "center" }}
    >
      <Image source={pokemon} />
      <Container>
        <Content>
          <Text style={{ fontSize: 34 }}>Bem-vindo</Text>
          <Text style={{ marginBottom: 100, fontSize: 14 }}>
            Insira os seus dados para acessar
          </Text>

          <View style={{ position: "relative", bottom: 40 }}>
            <Input />
            <Input />
          </View>
          <Pressable onPress={() => navigation.navigate("Home")}>
            <Button>
              <Text style={{ color: "white", fontSize: 20 }}>Entrar</Text>
            </Button>
          </Pressable>
        </Content>
      </Container>
    </ImageBackground>
  );
};

export default Login;
