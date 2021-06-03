import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const Button = styled.View`
   width: ${(windowWidth * .5) - 28};
   align-items: center;
   justify-content: center;
   padding: 9px;
   margin-bottom: 16px;
   border: 2px solid #BBE1FA;
   border-radius: 7px;
`;

export const ButtonText = styled.Text`
   color: #BBE1FA;
   font-family: medium;
   font-size: 18px;
`