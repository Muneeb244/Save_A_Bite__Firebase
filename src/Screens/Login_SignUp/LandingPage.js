import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Bg} from '../../assets/images';
const LandingPage = () => {
  return (
    <View>
      <ImageBackground
        source={Bg}
        resizeMode="cover"
        style={styles.image}></ImageBackground>
      <View style={{marginTop: 150}}>
        <Text style={styles.text1}>
          Revolutionizing the Fight Against Food Waste and Enabling Communities
          to Thrive!
        </Text>
        <TouchableOpacity style={styles.button} onPress={()=> {}}>
          <Text style={styles.text2}>LogIn</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={()=> {}}>
          <Text style={styles.text2}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  image: {
    width: 300,
    alignSelf: 'center',
    height: 300,
  },
  text1:{
    textAlign: 'center', color:'white'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#F86D3B',
    padding: 13,
    width: 250,
    marginTop:30,
    borderRadius:10,
    alignSelf:'center'
  },
  button2: {
    alignItems: 'center',
    padding: 13,
    width: 250,
    borderColor:'#F86D3B',
    borderWidth:1,
    marginTop:10,
    borderRadius:10,
    alignSelf:'center'
  },
  text2:{
    color:'white',
    fontSize:20,
    fontWeight:'bold'
  }
});
