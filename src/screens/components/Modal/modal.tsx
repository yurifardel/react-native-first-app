import React, { Fragment, ReactNode, useState } from "react";
import { Modal, Pressable, Text, View } from "react-native";
import { Avatar } from "../List/styled";
import { Card } from "./styled";

type ModalProps = {
  visible: boolean;
  data: { name: string; sprites: { front_default: string } };

  setToVisible(visible: boolean): void;
};

const ModalComponent: React.FC<ModalProps> = ({
  visible,
  setToVisible,
  data,
}: ModalProps) => {
  return (
    <Fragment>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => setToVisible(!visible)}
      >
        <View
          style={{
            flex: 1,
            marginTop: 70,
            backgroundColor: "#c5c9d1",
            alignItems: "center",
            justifyContent: "center",
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}
        >
          <Pressable onPress={() => setToVisible(!visible)}>
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
    </Fragment>
  );
};

export default ModalComponent;
