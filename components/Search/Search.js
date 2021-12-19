import React from 'react';
import {View} from 'react-native';
import {useRecipeContext} from '../../contexts/RecipeContext';
import {SearchInput, SearchIcon, CloseIcon} from './Styles';

const Search = () => {
  const {name, setName, handleSearch} = useRecipeContext();
  return (
    <View>
      <SearchInput
        placeholder="Search Recipes"
        value={name}
        onChangeText={name => setName(name)}
      />
      <SearchIcon name="search-outline" onPress={handleSearch} />
      <CloseIcon name="close" onPress={() => setName('')} />
    </View>
  );
};

export default Search;
