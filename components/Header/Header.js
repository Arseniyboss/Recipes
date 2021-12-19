import React from 'react';
import {HeaderContainer, HeaderTitle, HeaderIcon} from './Styles';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  return (
    <HeaderContainer>
      <HeaderTitle onPress={() => navigation.navigate('Home')}>
        Recipes
      </HeaderTitle>
      <HeaderIcon
        name="heart"
        onPress={() => navigation.navigate('Favorites')}
      />
    </HeaderContainer>
  );
};

export default Header;
