import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AppLoading from "expo-app-loading";

import HomeScreen from "./src/screens/Home";

import { useFonts, Poppins_500Medium } from "@expo-google-fonts/poppins";
import CreatePasswordScreen from "./src/screens/CreatePassword";
import BackButton from "./src/components/BackButton";

const Stack = createStackNavigator();

function App() {
  const [fontLoaded, error] = useFonts({
    medium: Poppins_500Medium,
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: {
            fontSize: 23,
            color: "white",
            textAlign: "center",
            fontFamily: "medium",
          },
          headerStyle: {
            elevation: 0,
            backgroundColor: "#1B262C",
          },
        }}
      >
        <Stack.Screen name="Senhas" component={HomeScreen} />
        <Stack.Screen
          name="Adicionar senha"
          component={CreatePasswordScreen}
          options={{
            headerLeft: BackButton,
            headerTitleStyle: {
              fontSize: 23,
              color: "white",
              textAlign: "center",
              fontFamily: "medium",
              marginLeft: -35,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
