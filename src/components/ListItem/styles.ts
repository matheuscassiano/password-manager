import styled from 'styled-components/native';

export const PasswordContainer = styled.Pressable<{ active: boolean }>`
    width: 100%;
    max-height: 60px;
    padding: 10px;
    margin: 5px 0;
    flex-direction: row;
    border-radius: 10px;
    align-items: center;
    justify-content: space-between;
    background: ${props => props.active ? '#FFFFFF25' : '#1B262C'};
`;

export const RowContainer = styled.View`
    flex-direction: row;
    align-items: center;
`

export const LogoContainer = styled.View`
    width: 45px;
    height: 45px;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
    border-radius: 15px;
    background-color: white;
`;

export const Logo = styled.Image`
    width: 25px;
    height: 25px;
    border-radius: 25px;
`;

export const ServiceName = styled.Text`
    color: white;
    font-size: 17px;
    font-family: medium;
    margin-bottom: -5px;
`;

export const ServiceUser = styled.Text`
    color: white;
    font-size: 13px;
    font-family: regular;
    opacity: .5;
`;

export const ActionButton = styled.TouchableOpacity`
    height: 100%;
    align-self: flex-end;
    justify-content: center;
`
