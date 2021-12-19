import styled from 'styled-components/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
FontAwesome.loadFont();

export const StarContainer = styled.View`
  margin-right: 5px;
`;

export const Star = styled(FontAwesome)`
  color: #f8e825;
  font-size: 20px;
`;

export const RatingComponent = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Review = styled.View`
  justify-content: center;
  margin-left: 10px;
`;
