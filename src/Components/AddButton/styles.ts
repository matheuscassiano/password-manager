import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import { LinearGradient } from "expo-linear-gradient";

export const ButtonContainer = styled.TouchableOpacity`
    position: absolute;
    bottom: 30px;
    right: 30px;
`;

export const Button = styled(LinearGradient)`
   width: 65px;
   height: 65px;
   align-items: center;
   justify-content: center;
   border-radius: 80px;
   transform: rotate(-45deg);
`;

export const ButtonIcon = styled(Icon)`
   transform: rotate(45deg);
`