import React from "react";
import { Button, Text } from "./styled";

type Props = {
  text: string;
};

const ButtonComponent: React.FC<Props> = ({ text }: Props) => {
  return (
    <Button>
      <Text>{text}</Text>
    </Button>
  );
};

export default ButtonComponent;
