import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import Input from "../../components/Input";
import { ScreenContainer } from "../../components/Styles";
import { Row, SectionTitle } from "./styles";

import LargeButton from "../../components/LargeButton";
import MidButton from "../../components/MidButton";
import MidStrokedButton from "../../components/MidStrokedButton";
import getRealm from "../../services/realm";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";

const CreatePasswordScreen: React.FC = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const [fontLoaded, error] = useFonts({
    regular: Poppins_400Regular,
    medium: Poppins_500Medium,
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }

  async function savePassword() {
    try {
      const data = {
        name,
        address,
        user,
        password,
      };

      const realm = await getRealm();
      realm.write(() => {
        realm.create("Passeord", data);
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ScreenContainer>
      <SectionTitle>Informações da senha</SectionTitle>
      <Input
        value={name}
        onChangeText={setName}
        label="Digite o nome do serviço"
        placeholder="Nome"
        type="default"
      />
      <Input
        value={address}
        onChangeText={setAddress}
        label="Digite o endereço do serviço"
        placeholder="Endereço"
        type="email-address"
      />
      <Input
        value={user}
        onChangeText={setUser}
        label="Digite seu usuario ou email"
        placeholder="Usuario ou Email"
        type="default"
      />
      <Input
        value={password}
        onChangeText={setPassword}
        label="Digite sua senha"
        placeholder="Senha"
        secureTextEntry
        type="default"
      />
      <LargeButton title="Gerar senha segura" />
      <Row>
        <MidButton title="Salvar" onPress={savePassword} />
        <MidStrokedButton title="Cancelar" />
      </Row>
    </ScreenContainer>
  );
};

export default CreatePasswordScreen;
