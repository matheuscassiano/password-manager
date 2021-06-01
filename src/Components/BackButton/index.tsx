import React from "react";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { Button } from "./styles";

export default function BackButton() {
  const navigation = useNavigation();

  return (
    <Button onPress={() => navigation.goBack()}>
      <Icon name="chevron-left" size={25} color="#FFFFFF" />
    </Button>
  );
}
