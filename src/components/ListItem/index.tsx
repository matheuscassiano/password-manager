import React, { useState } from "react";
import { View, Vibration } from "react-native";
import Icon from "react-native-vector-icons/Feather";

import {
  PasswordContainer,
  LogoContainer,
  Logo,
  ServiceName,
  ServiceUser,
  ActionButton,
  RowContainer,
} from "./styles";

export default function ListItem({ id, name, user, address }) {
  const [active, setActive] = useState(false);

  return (
    <PasswordContainer
      active={active}
      onLongPress={() => {
        setActive(true);
        Vibration.vibrate(50);
      }}
      onPress={() => setActive(false)}
    >
      <RowContainer>
        <LogoContainer>
          <Logo
            source={{
              uri: `https://logo.clearbit.com/spotify.com/${address}`,
            }}
          />
        </LogoContainer>
        <View>
          <ServiceName>{name}</ServiceName>
          <ServiceUser>{user}</ServiceUser>
        </View>
      </RowContainer>
      <ActionButton onPress={() => action(id, active)}>
        <Icon
          name={active ? "trash-2" : "copy"}
          color={active ? "#750F0F" : "white"}
          size={25}
        />
      </ActionButton>
    </PasswordContainer>
  );
}

function action(id: number, conditional: boolean) {
  console.log(id)
  if (conditional) {
    console.log('Delete')
  } else {
    console.log('Copy')
  }
}