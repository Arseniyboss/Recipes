import React from 'react';
import {FlatList} from 'react-native';
import {useRecipeContext} from '../../contexts/RecipeContext';
import {PageHeading} from '../../GlobalStyles';
import {RecipeText} from './Styles';
import Search from '../../components/Search/Search';
import Recipe from '../../components/Recipe/Recipe';

const Home = () => {
  const {filteredRecipes} = useRecipeContext();
  return (
    <>
      <PageHeading>Latest Recipes</PageHeading>
      <Search />
      {filteredRecipes.length === 0 && (
        <RecipeText>No recipes matched your search criteria</RecipeText>
      )}
      <FlatList
        data={filteredRecipes}
        renderItem={({item}) => <Recipe {...item} />}
      />
    </>
  );
};

export default Home;
