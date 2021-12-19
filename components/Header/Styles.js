import styled from 'styled-components/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
FontAwesome.loadFont();

export const HeaderContainer = styled.View`
  padding: 15px 20px;
  background: orange;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderTitle = styled.Text`
  font-size: 25px;
  color: white;
`;

export const HeaderIcon = styled(FontAwesome)`
  font-size: 25px;
  color: white;
`;
