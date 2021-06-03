import React from "react";
import { ButtonContainer, Button, ButtonIcon } from "./styles";

export default function AddButton({ onPress }) {
  return (
    <ButtonContainer onPress={onPress}>
      <Button>
        <ButtonIcon name="plus" size={30} />
      </Button>
    </ButtonContainer>
  );
}
