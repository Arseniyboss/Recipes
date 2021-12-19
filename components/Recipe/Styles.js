import styled from 'styled-components/native';
import {HeaderIcon} from '../Header/Styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
MaterialIcons.loadFont();

export const RecipeWrapper = styled.View`
  width: 260px;
  border-radius: 5px;
  margin: 0 auto;
`;

export const RecipeContainer = styled.View`
  border: 1px solid lightgrey;
  border-radius: 5px;
  margin-bottom: 20px;
`;

export const RecipeImage = styled.Image`
  height: 200px;
  width: 258px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const RecipeText = styled.View`
  padding: 13px;
`;

export const RecipeName = styled.Text`
  color: #444;
  font-size: 16px;
`;

export const RecipeRating = styled.View`
  margin: 10px 0;
`;

export const RecipeTime = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TimerIcon = styled(MaterialIcons)`
  font-size: 18px;
`;

export const RecipeDuration = styled.Text`
  letter-spacing: 2px;
  font-size: 18px;
  margin-left: 5px;
`;

export const HeartIcon = styled(HeaderIcon)`
  position: absolute;
  right: 7px;
  top: 7px;
`;
