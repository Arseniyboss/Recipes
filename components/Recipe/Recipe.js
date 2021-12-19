import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useRecipeContext} from '../../contexts/RecipeContext';
import {TouchableOpacity} from 'react-native';
import Rating from '../Rating/Rating';
import {
  RecipeWrapper,
  RecipeContainer,
  RecipeImage,
  RecipeText,
  RecipeName,
  RecipeRating,
  RecipeTime,
  TimerIcon,
  RecipeDuration,
  HeartIcon,
} from './Styles';
import recipes from '../../data/recipes';

const Recipe = ({id, name, duration, image, rating, numReviews}) => {
  const navigation = useNavigation();

  const {toggleFavorites, isAlreadyAdded} = useRecipeContext();

  const favorite = isAlreadyAdded(id);

  const recipe = recipes.find(recipe => recipe.id === id);
  return (
    <RecipeWrapper>
      <RecipeContainer>
        <TouchableOpacity onPress={() => navigation.navigate('Recipe', {id})}>
          <RecipeImage source={image} alt={name} />
          <HeartIcon
            name={favorite ? 'heart' : 'heart-o'}
            onPress={() => toggleFavorites(favorite, id, recipe)}
          />
        </TouchableOpacity>
        <RecipeText>
          <RecipeName>{name}</RecipeName>
          <RecipeRating>
            <Rating
              value={rating}
              text={`${numReviews} ${numReviews === 1 ? 'review' : 'reviews'} `}
            />
          </RecipeRating>
          <RecipeTime>
            <TimerIcon name="timer" />
            <RecipeDuration>{duration}</RecipeDuration>
          </RecipeTime>
        </RecipeText>
      </RecipeContainer>
    </RecipeWrapper>
  );
};

export default Recipe;
