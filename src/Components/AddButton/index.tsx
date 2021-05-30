import React from "react";
import { ButtonContainer, Button, ButtonIcon } from "./styles";

export default function AddButton() {
  return (
    <ButtonContainer>
      <Button colors={["#3282B8", "#0F4C75"]}>
        <ButtonIcon name="plus" color="white" size={30} />
      </Button>
    </ButtonContainer>
  );
}
