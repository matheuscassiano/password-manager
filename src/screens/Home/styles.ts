import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const EmptyPasswords = styled.Image`
    width: ${windowWidth * .65};
    height: ${windowWidth * .65};
`;
