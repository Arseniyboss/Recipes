import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Container} from './GlobalStyles';
import RecipeContextProvider from './contexts/RecipeContext';
import Header from './components/Header/Header';
import Home from './screens/Home/Home';
import Favorites from './screens/Favorites/Favorites';
import Recipe from './screens/Recipe/Recipe';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Container>
      <RecipeContextProvider>
        <NavigationContainer>
          <Header />
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Recipe" component={Recipe} />
            <Stack.Screen name="Favorites" component={Favorites} />
          </Stack.Navigator>
        </NavigationContainer>
      </RecipeContextProvider>
    </Container>
  );
};

export default App;
