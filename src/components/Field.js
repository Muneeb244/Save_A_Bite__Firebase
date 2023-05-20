import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  TextInput,
} from 'react-native';

function Field(props) {
  return (
    <View>
      <View style={styles.icon}>
        {props.svg ? <props.svg /> : null}
      </View>
      <TextInput
        {...props}
        style={styles.input}
        placeholderTextColor={'#B48D42'}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    width: 290,
    alignSelf: 'center',
    height: 49,
    fontSize: 13,
    margin: 7,
    elevation:4,
    paddingLeft: 60,
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 15,
    color: '#00437a',
  },
  icon: {
    position: 'absolute',
    top: 10,
    marginLeft: 20,
    zIndex: 1,
  },
});
export default Field;
