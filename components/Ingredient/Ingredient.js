import React from 'react';
import {Text} from 'react-native';
import {
  IngredientContainer,
  IngredientGroup,
  IngredientImage,
  IngredientName,
} from './Styles';

const Ingredient = ({image, name, quantity}) => {
  return (
    <IngredientContainer>
      <IngredientGroup>
        <IngredientImage source={image} />
        <IngredientName>{name}</IngredientName>
      </IngredientGroup>
      <Text>{quantity}</Text>
    </IngredientContainer>
  );
};

export default Ingredient;
