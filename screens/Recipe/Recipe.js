import React from 'react';
import {FlatList} from 'react-native';
import {useRecipeContext} from '../../contexts/RecipeContext';
import {
  RecipeImage,
  LeftArrowContainer,
  LeftArrow,
  HeartIcon,
  RecipeHeader,
  RecipeText,
} from './Styles';
import {
  RecipeTime,
  TimerIcon,
  RecipeDuration,
} from '../../components/Recipe/Styles';
import Ingredient from '../../components/Ingredient/Ingredient';
import recipes from '../../data/recipes';

const Recipe = ({route, navigation}) => {
  const {id} = route.params;

  const {toggleFavorites, isAlreadyAdded} = useRecipeContext();

  const favorite = isAlreadyAdded(id);

  const recipe = recipes.find(recipe => recipe.id === id);

  const {name, duration, image} = recipe;

  const {ingredients} = recipe;

  return (
    <>
      <RecipeImage source={image} />
      <LeftArrowContainer onPress={() => navigation.navigate('Home')}>
        <LeftArrow name="arrow-left" />
      </LeftArrowContainer>
      <HeartIcon
        name="heart"
        name={favorite ? 'heart' : 'heart-o'}
        onPress={() => toggleFavorites(favorite, id, recipe)}
      />
      <RecipeHeader>
        <RecipeText>{name}</RecipeText>
        <RecipeTime>
          <TimerIcon name="timer" />
          <RecipeDuration>{duration}</RecipeDuration>
        </RecipeTime>
      </RecipeHeader>
      <RecipeText>Ingredients</RecipeText>
      <FlatList
        data={ingredients}
        renderItem={({item}) => <Ingredient {...item} />}
      />
    </>
  );
};

export default Recipe;
