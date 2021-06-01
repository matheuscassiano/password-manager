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
    <TouchableOpacity>
      <Button
        onPress={onPress}
        colors={["#3282B8", "#0F4C75"]}
        start={{
          x: 0,
          y: 0,
        }}
        end={{
          x: 1,
          y: 1,
        }}
      >
        <ButtonText>{title}</ButtonText>
      </Button>
    </TouchableOpacity>
  );
}
