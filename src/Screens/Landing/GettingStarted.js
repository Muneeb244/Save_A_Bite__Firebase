import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const GettingStarted = () => {
  return (
    <View style={styles.body}>
      <View style={styles.logospace}>
        <Image
          style={styles.logo}
          source={require('../assets/images/logo1.png')}
        />
        <View style={styles.bcontainer}>
          <View style={styles.child}>
            <Text style={styles.title}>Waste Not, Feed All</Text>
            <TouchableOpacity style={styles.btnn}>
              <Text style={styles.txt}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    // backgroundColor: 'white',
    // flexDirection: 'column',
    // alignItems: 'center',
    // flex: 1,
  },

  title: {
    fontSize: 38,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    marginTop: 50,
  },

  bcontainer: {
    backgroundColor: '#F86D3B',
    alignItems: 'center',
    padding: 10,
    flex: 1,
    height: windowHeight * 0.7,
    width: windowWidth,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  btn: {
    backgroundColor: 'white',
    alignItems: 'center',
    height: windowHeight * 0.09,
    width: windowWidth * 0.8,
    marginTop: 60,
    borderRadius: 50,
    justifyContent: 'center',
  },

  btnn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '70%',
    height: 70,
    borderRadius: 50,
  },

  logospace: {
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 80,
  },
  textt: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 80,
    backgroundColor: '#F86D3B',
    width: windowWidth,
  },
  child: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '60%',
  },
  txt: {
    color: 'black',
    fontSize: 20,
    color: '#F86D3B',
  },

  header: {
    backgroundColor: '#F86D3B',
    flexDirection: 'row',
    height: windowHeight * 0.1,
    width: windowWidth,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },

  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  logo: {
    width: 360,
    height: 360,
    alignSelf: 'center',
  },
  logo1: {
    width: 60,
    height: 60,
    marginLeft: 8,
  },
 
  bot: {
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    width: '60%',
    height: 50,
    marginBottom: 10,
    borderRadius: 10,
    color: 'black',
    marginLeft: -12,
  },
  button: {
    backgroundColor: 'yellow',
  },

  buttonText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default GettingStarted;
