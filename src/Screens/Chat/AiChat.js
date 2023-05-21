import React, {useState, useCallback, useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import {View,Text,StyleSheet,FlatList,Dimensions,Image, TextInput, TouchableOpacity} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const logo = require('../assets/images/robot.png');

const API_URL = 'https://api.openai.com/v1/completions';
const YOUR_API_KEY = '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';
const MAX_TOKENS = 100;

export default function AiChat() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    firstMessage();
  }, []);

  const firstMessage = () =>{
    setMessages([
      {
        _id: 1,
        text: 'Hello! Welcome to the help and support section, Please tell how can I help you?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Chatbot GPT',
          avatar: logo,
        },
      },
    ]);
  };

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
    const value = messages[0].text;
    callApi(value);
  }, []);

  const callApi = async value => {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          `Bearer ${YOUR_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'text-davinci-003',
        prompt: value,
        max_tokens: MAX_TOKENS,
        temperature: 0,
      }),
    });

    const data = await res.json();

    if (data) {
      const value = data?.choices[0]?.text;
      addNewMessage(value);
      console.log('Data: ', value);
    }
  };

  const addNewMessage = data => {
    const value = {
      _id: Math.random(999999999999),
      text: data,
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'Chatbot GPT',
        avatar: logo,
      },
    };

    setMessages(previousMessages => GiftedChat.append(previousMessages, value));
  };

  return (
    <SafeAreaView style={{flex: 1,backgroundColor:'white'}}>
      <View style = {styles.body}>
   <View style={styles.header}>
    <Image
        style={styles.logo}
        source={require('../assets/images/robot.png')}
      />
    <Text style = {styles.headerText}>Help and Support Chatbot</Text>
    </View>
    </View>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </SafeAreaView>
  );
}

  const styles = StyleSheet.create({
    body: {
      backgroundColor: 'white',   
      flexDirection: 'column',
      alignItems:'center',
      flex:1
    },

    header: {
      backgroundColor: '#F86D3B',   
      flexDirection: 'row',
      height:windowHeight*0.1,
      width:windowWidth,
      justifyContent:'center',
      alignItems:'center',
      alignSelf:'flex-start',
    },

    headerText:{
      fontSize:20,
      fontWeight:'bold',
      justifyContent:'center',
      alignItems:'center',
      alignSelf:'center',
    },
    logo:{
      width:60,
      height:60,
      alignSelf:'center',
    },
    logo1:{
      width:80,
      height:80,
      marginLeft:8,
    },

  });


