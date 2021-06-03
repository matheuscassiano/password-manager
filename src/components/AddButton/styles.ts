import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import { LinearGradient } from "expo-linear-gradient";

export const ButtonContainer = styled.TouchableOpacity`
    position: absolute;
    bottom: 30px;
    right: 30px;
`;

export const Button = styled(LinearGradient).attrs({
   colors: ["#3282B8", "#0F4C75"],
   start: {
      x: 0,
      y: 0,
   },
   end: {
      x: 1,
      y: 1,
   }
})`
   width: 65px;
   height: 65px;
   align-items: center;
   justify-content: center;
   border-radius: 80px;
`;

export const ButtonIcon = styled(Icon)`
   color: white;
`