import React from 'react';
import {useRecipeContext} from '../../contexts/RecipeContext';
import {PageHeading} from '../../GlobalStyles';
import {FavoriteRecipes, Message} from './Styles';
import Recipe from '../../components/Recipe/Recipe';

const Favorites = () => {
  const {favoriteRecipes} = useRecipeContext();

  return favoriteRecipes.length === 0 ? (
    <Message>No favorite recipes</Message>
  ) : (
    <>
      <PageHeading>Favorite Recipes</PageHeading>
      <FavoriteRecipes
        data={favoriteRecipes}
        renderItem={({item}) => <Recipe {...item} />}
      />
    </>
  );
};

export default Favorites;
