import {Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
const Button = props => {
  console.log(props)
  return (
   
  <Pressable style={styles.press}>
      <Text style={styles.text1}>{props.title}</Text>
    </Pressable>
  
  );
};
const styles = StyleSheet.create({
  press: {
    backgroundColor: '#274116',
    width: 120,
    padding: 13,
    borderRadius: 30,
    alignSelf: 'center',
  },
  text1: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default Button;
