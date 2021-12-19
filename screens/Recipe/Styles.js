import styled from 'styled-components/native';
import {HeaderIcon} from '../../components/Header/Styles';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
EvilIcons.loadFont();

export const RecipeImage = styled.Image`
  width: 100%;
  height: 300px;
  margin-bottom: 10px;
`;

export const LeftArrowContainer = styled.TouchableOpacity`
  position: absolute;
  top: 5px;
  left: 5px;
`;

export const LeftArrow = styled(EvilIcons)`
  font-size: 40px;
  color: white;
  position: absolute;
  top: 10px;
  left: 5px;
`;

export const HeartIcon = styled(HeaderIcon)`
  position: absolute;
  right: 15px;
  top: 15px;
`;

export const RecipeHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 0 15px;
  margin-bottom: 15px;
  align-items: center;
`;

export const RecipeText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;
