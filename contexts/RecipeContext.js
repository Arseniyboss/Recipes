import React, {useState, useContext, createContext} from 'react';
import {useAsyncStorage} from '../hooks/useAsyncStorage';
import recipes from '../data/recipes';

export const RecipeContext = createContext();

const RecipeContextProvider = ({children}) => {
  const [name, setName] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const [favoriteRecipes, setFavoriteRecipes] = useAsyncStorage(
    'favoriteRecipes',
    [],
  );

  const handleSearch = () => {
    const filteredRecipes = recipes.filter(recipe => {
      return recipe.name.toLowerCase().startsWith(name.toLowerCase().trim());
    });
    setFilteredRecipes(filteredRecipes);
  };

  const addItem = recipe => {
    setFavoriteRecipes([...favoriteRecipes, {...recipe}]);
  };

  const deleteItem = id => {
    setFavoriteRecipes(favoriteRecipes.filter(item => item.id !== id));
  };

  const isAlreadyAdded = id => {
    return favoriteRecipes.find(item => item.id === id);
  };

  const toggleFavorites = (favorite, id, recipe) => {
    if (favorite) {
      deleteItem(id);
    } else {
      addItem(recipe);
    }
  };

  const value = {
    name,
    setName,
    filteredRecipes,
    handleSearch,
    favoriteRecipes,
    isAlreadyAdded,
    toggleFavorites,
  };
  return (
    <RecipeContext.Provider value={value}>{children}</RecipeContext.Provider>
  );
};

export const useRecipeContext = () => {
  return useContext(RecipeContext);
};

export default RecipeContextProvider;
