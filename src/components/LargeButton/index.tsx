import React from "react";
import { Button, ButtonText } from "./styles";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function LargeButton({
  title,
  onPress,
}: {
  title: string;
  onPress?: Function;
}) {
  const [fontLoaded, error] = useFonts({
    regular: Poppins_400Regular,
    medium: Poppins_500Medium,
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }
  return (
    <TouchableOpacity onPress={onPress}>
      <Button>
        <ButtonText>{title}</ButtonText>
      </Button>
    </TouchableOpacity>
  );
}
