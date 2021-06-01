import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
    border-style: solid;
    border-color: #555555;
    border-bottom-width: 2px;
`;

export const Label = styled.Text`
    opacity: .5;
    color: white;
    font-family: medium;
    font-size: 12px;
`;

export const StringInput = styled.TextInput`
    width: ${windowWidth - 60};
    color: white;
    font-size: 14px;
    font-family: medium;
    padding: 2px 0;
`;

export const ClearInput = styled.TouchableOpacity`
    opacity: .5;
`;