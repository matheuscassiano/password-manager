import React, { useState } from "react";
import Icon from "react-native-vector-icons/Feather";
import { Container, Label, StringInput, ClearInput } from "./styles";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";

const Input: React.FC = ({ value, onChangeText, label, placeholder, type, secureTextEntry }) => {
  const [textInput, setTextInput] = useState();
  const [fontLoaded, error] = useFonts({
    regular: Poppins_400Regular,
    medium: Poppins_500Medium,
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <Label>{label}</Label>
      <Container>
        <StringInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="white"
          keyboardType={type}
          secureTextEntry={secureTextEntry}
          ref={input => { setTextInput(input as any) }}
        />
        <ClearInput onPress={() => (textInput as any).clear()}>
          <Icon name="x-circle" size={18} color="#FFFFFF" />
        </ClearInput>
      </Container>
    </>
  );
};

export default Input;
