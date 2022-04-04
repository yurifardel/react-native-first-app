import React from "react";
import {
  Text,
  Pressable,
  ImageBackground,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { RootTabScreenProps } from "../../../types";
import { Container, Content, Image } from "./styled";
import InputComponent from "../components/Input/input";
import img from "../../../assets/images/img.png";
import pokemon from "../../../assets/images/pokemon.png";
import ButtonComponent from "../components/Button/button";

const Login = ({ navigation }: RootTabScreenProps<any>) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        source={img}
        resizeMode="cover"
        style={{ flex: 1, justifyContent: "center" }}
      >
        <ScrollView>
          <Image source={pokemon} />
          <Container>
            <Content>
              <Text style={{ fontSize: 34 }}>Bem-vindo</Text>
              <Text style={{ marginBottom: 100, fontSize: 14 }}>
                Insira os seus dados para acessar
              </Text>

              <View style={{ position: "relative", bottom: 40 }}>
                <KeyboardAvoidingView behavior="position" enabled>
                  <InputComponent />
                  <InputComponent />
                </KeyboardAvoidingView>
              </View>
              <Pressable onPress={() => navigation.navigate("Home")}>
                <ButtonComponent text={"Enter"} />
              </Pressable>
            </Content>
          </Container>
        </ScrollView>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

export default Login;
