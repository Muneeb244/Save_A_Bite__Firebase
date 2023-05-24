import {Text, Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
const Btn = props => {
  return (
   
    <View style={styles.press}>
      <Text style={styles.text1}>{props.title}</Text>
    </View>
  
  );
};
const styles = StyleSheet.create({
  press: {
    backgroundColor: 'white',
    width: 250,
    padding: 10,
    borderRadius: 30,
    alignSelf: 'center',
  },
  text1: {
    color: '#F86D3B',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default Btn;