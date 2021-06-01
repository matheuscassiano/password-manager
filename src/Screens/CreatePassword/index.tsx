import React from "react";
import AppLoading from "expo-app-loading";
import Input from "../../Components/Input";
import { ScreenContainer } from "../../Components/Styles";
import { Row, SectionTitle } from "./styles";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import LargeButton from "../../Components/LargeButton";
import MidButton from "../../Components/MidButton";
import MidStrokedButton from "../../Components/MidStrokedButton";

const CreatePasswordScreen: React.FC = () => {
  const [fontLoaded, error] = useFonts({
    regular: Poppins_400Regular,
    medium: Poppins_500Medium,
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }
  return (
    <ScreenContainer>
      <SectionTitle>Informações da senha</SectionTitle>
      <Input
        label="Digite o nome do serviço"
        placeholder="Nome"
        type="default"
      />
      <Input
        label="Digite o endereço do serviço"
        placeholder="Endereço"
        type="email-address"
      />
      <Input
        label="Digite seu usuario ou email"
        placeholder="Usuario ou Email"
        type="default"
      />
      <Input
        label="Digite sua senha"
        placeholder="Senha"
        secureTextEntry
        type="default"
      />
      <LargeButton title="Gerar senha segura" />
      <Row>
        <MidButton title="Salvar" />
        <MidStrokedButton title="Cancelar" />
      </Row>
    </ScreenContainer>
  );
};

export default CreatePasswordScreen;
