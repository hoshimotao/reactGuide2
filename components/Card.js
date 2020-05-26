import React from 'react';
import {View, StyleSheet} from 'react-native';

const Card = props => {
  return <View style={{ ...styles.card, ...props.style}}>{props.children}</View> 
};

const styles = StyleSheet.create({

card: {
  shadowColor: 'black',
  shadowOpacity: 0.3,
  shadowOffset: {width: 2, height: 2},
  shadowRadius: 2,
  backgroundColor: 'white',
  elevation: 5,
  padding: 20,
  borderRadius: 8
}
});

export default Card;