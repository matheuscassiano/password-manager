import styled from 'styled-components/native';
import { LinearGradient } from "expo-linear-gradient";

export const Button = styled(LinearGradient)`
   width: 100%;
   align-items: center;
   justify-content: center;
   border-radius: 5px;
   padding: 10px;
   margin-bottom: 16px;
`;

export const ButtonText = styled.Text`
   color: white;
   font-family: medium;
   font-size: 16px;
`