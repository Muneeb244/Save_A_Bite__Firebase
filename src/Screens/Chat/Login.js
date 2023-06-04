import React from 'react';
import {Button,Text, StyleSheet, TextInput, View,Dimensions} from 'react-native';
const handleBackPress = () => {
  navigation.goBack();
  return true;
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function Login({onLogin, username, setUsername}) {
  return (
    <><View style={styles.header}>
      <Text style={styles.text}>Welcome to Chat Room</Text>
    </View><View style={styles.container}>

        <TextInput
          style={styles.input}
          onChangeText={setUsername}
          placeholder='Enter Your name'
          placeholderTextColor='black'
          value={username} />
          <View style={styles.btn}>
          <Button  title={'Click to Preceed to Chats'} onPress={onLogin} color='#F86D3B' />
          </View>
        
      </View></>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    alignSelf: 'center',
    height: '8%',
    fontSize: 15,
    borderColor: 'black',
    paddingLeft: 30,
    backgroundColor: '#fff',
    padding: 10,
    borderWidth: 1,
    borderRadius: 15,
    color: '#00437a',
  },
   header: {
    backgroundColor: '#F86D3B',
    height:windowHeight*0.09,
    width:windowWidth,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  btn:{
    width:windowWidth*0.7,
    marginTop:50,
    height:100,
  },
  text: {
    fontSize:22,
    fontWeight:'bold',
    color:'white'
  },
  // input: {
  //   backgroundColor: 'white',
  //   width: '80%',
  //   marginBottom: 20,
  //   borderRadius: 20,
  //   paddingHorizontal: 20,
  // },
});
