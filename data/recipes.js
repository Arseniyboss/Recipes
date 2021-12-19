const recipes = [
  {
    id: 1,
    name: 'Spaghetti With Shrimp Sauce',
    image: require('../images/recipes/spagetti.png'),
    duration: '30 mins',
    rating: 4.5,
    numReviews: 6,
    ingredients: [
      {
        id: 1,
        image: require('../images/ingredients/pasta.png'),
        name: 'Spaghetti pasta',
        quantity: '100g',
      },
      {
        id: 2,
        image: require('../images/ingredients/oil.png'),
        name: 'Olive Oil',
        quantity: '2 tbsp',
      },
      {
        id: 3,
        image: require('../images/ingredients/shrimp.png'),
        name: 'Fresh Shrimp',
        quantity: '100g',
      },
      {
        id: 4,
        image: require('../images/ingredients/tomato.png'),
        name: 'Campari tomatoes',
        quantity: '100g',
      },
      {
        id: 5,
        image: require('../images/ingredients/salt.png'),
        name: 'Salt',
        quantity: '¾ tbsp',
      },
      {
        id: 6,
        image: require('../images/ingredients/pepper.png'),
        name: 'Black Pepper',
        quantity: '¼ tbsp',
      },
    ],
  },
  {
    id: 2,
    name: 'Malaysian Chicken Satay',
    image: require('../images/recipes/satay.png'),
    duration: '50 mins',
    rating: 5,
    numReviews: 4,
    ingredients: [
      {
        id: 1,
        image: require('../images/ingredients/chicken.png'),
        name: 'Boneless Chicken Thighs',
        quantity: '1kg',
      },
      {
        id: 2,
        image: require('../images/ingredients/lemongrass.png'),
        name: 'Lemongrass stalk',
        quantity: '1 stalk',
      },
      {
        id: 3,
        image: require('../images/ingredients/onion.png'),
        name: 'Large Onion',
        quantity: '1',
      },
      {
        id: 4,
        image: require('../images/ingredients/garlic.png'),
        name: 'Garlic cloves',
        quantity: '5',
      },
      {
        id: 5,
        image: require('../images/ingredients/coriander.png'),
        name: 'Coriander',
        quantity: '1 tsp',
      },
    ],
  },
  {
    id: 3,
    name: 'Sarawak Laksa',
    image: require('../images/recipes/laksa.png'),
    duration: '30 mins',
    rating: 4,
    numReviews: 9,
    ingredients: [
      {
        id: 1,
        image: require('../images/ingredients/garlic.png'),
        name: 'Garlic cloves',
        quantity: '3',
      },
      {
        id: 2,
        image: require('../images/ingredients/lemongrass.png'),
        name: 'Lemongrass',
        quantity: '2 stalks',
      },
      {
        id: 3,
        image: require('../images/ingredients/egg.png'),
        name: 'Egg',
        quantity: '2',
      },
      {
        id: 4,
        image: require('../images/ingredients/shrimp.png'),
        name: 'Fresh Shrimp',
        quantity: '100g',
      },
      {
        id: 5,
        image: require('../images/ingredients/shallot.png'),
        name: 'Shallot',
        quantity: '4',
      },
      {
        id: 6,
        image: require('../images/ingredients/pasta.png'),
        name: 'vermicelli',
        quantity: '100g',
      },
    ],
  },
];

export default recipes;
