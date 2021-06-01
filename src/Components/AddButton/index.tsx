import React from "react";
import { ButtonContainer, Button, ButtonIcon } from "./styles";

export default function AddButton({ onPress }) {
  return (
    <ButtonContainer onPress={onPress}>
      <Button colors={["#3282B8", "#0F4C75"]}>
        <ButtonIcon name="plus" size={30} />
      </Button>
    </ButtonContainer>
  );
}
