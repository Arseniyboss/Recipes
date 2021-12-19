import React from 'react';
import {Text} from 'react-native';
import {RatingComponent, StarContainer, Review, Star} from './Styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
FontAwesome.loadFont();

const Rating = ({value, text}) => {
  const stars = Array.from({length: 5}, (_, index) => {
    const halfStar = index + 0.5;
    return (
      <StarContainer key={index}>
        {value >= index + 1 ? (
          <Star name="star" />
        ) : value >= halfStar ? (
          <Star name="star-half-full" />
        ) : (
          <Star name="star-o" />
        )}
      </StarContainer>
    );
  });
  return (
    <RatingComponent>
      {stars}
      <Review>
        <Text>{text}</Text>
      </Review>
    </RatingComponent>
  );
};

export default Rating;
