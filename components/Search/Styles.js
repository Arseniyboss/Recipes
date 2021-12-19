import styled from 'styled-components';
import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont();

export const SearchInput = styled.TextInput`
  width: 260px;
  padding: 11px 33px;
  margin: 30px auto;
  border: 1px solid #444;
  border-radius: 20px;
`;

export const SearchIcon = styled(Ionicons)`
  font-size: 20px;
  position: absolute;
  transform: translate(75px, 40px);
`;

export const CloseIcon = styled(SearchIcon)`
  transform: translate(297px, 40px);
`;
