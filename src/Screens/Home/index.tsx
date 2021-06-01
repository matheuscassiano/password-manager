import React, { useEffect, useState } from "react";
import AppLoading from "expo-app-loading";
import { EmptyPasswords } from "./styles";
import {
  Center,
  ScreenContainer,
  WarningTitle,
  WarningText,
} from "../../Components/Styles";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";

import passwords from "../../Services/password.service";

import AddButton from "../../Components/AddButton";
import { FlatList } from "react-native-gesture-handler";
import ListItem from "../../Components/ListItem";

export default function HomeScreen({ navigation }) {
  const [passwordList, setPasswords] = useState([]);
  useEffect(() => {
    setPasswords(passwords as any);
  }, []);
  const [fontLoaded, error] = useFonts({
    regular: Poppins_400Regular,
    medium: Poppins_500Medium,
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }

  return (
    <ScreenContainer>
      {passwordList.length > 0 ? (
        <FlatList
          data={passwordList}
          renderItem={({ item }) => <ListItem {...item} />}
        />
      ) : (
        <Center>
          <EmptyPasswords
            source={require("../../../assets/Storyset/empty-passwords.png")}
          />
          <WarningTitle style={{ fontFamily: "medium" }}>
            Adicione suas senhas
          </WarningTitle>
          <WarningText style={{ fontFamily: "regular" }}>
            Adicione as suas senhas para que elas apareçam bem aqui. Isso vai te
            ajudar na hora de encontra-las
          </WarningText>
        </Center>
      )}
      <AddButton onPress={() => navigation.navigate('Adicionar senha')} />
    </ScreenContainer>
  );
}
