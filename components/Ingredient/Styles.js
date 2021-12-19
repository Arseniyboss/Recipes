import styled from 'styled-components/native';

export const IngredientContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 20px;
  margin-top: 10px;
`;

export const IngredientGroup = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const IngredientImage = styled.Image`
  height: 40px;
  width: 40px;
`;

export const IngredientName = styled.Text`
  margin-left: 20px;
`;
