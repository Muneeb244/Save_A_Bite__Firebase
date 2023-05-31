import React, { useState, useCallback, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import axios from 'axios';
import { View, Text, StyleSheet, FlatList, Dimensions, Image, TextInput, TouchableOpacity,ScrollView } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// const logo = require('../../assets/images/person.png');

export default function Chat() {
  const [messages, setMessages] = useState([]);

  return (
    // <View style={styles.body}>
    //   <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
    //     <View style={styles.header}>
    //       <Image
    //         style={styles.logo}
    //         source={require('../../assets/images/person.png')}
    //       />
    //       <Text style={styles.headerText}>Naim Ahmed</Text>
    //     </View>
    //     <GiftedChat
    //       messages={messages}
    //       user={{
    //         _id: 1,
    //       }}
    //     />
    //   </SafeAreaView>
    // </View>
    <ScrollView style={{}}>

      <SkeletonPlaceholder borderRadius={4}>
        <View style={{ flexDirection: 'column', alignItems: 'flex-start', marginTop: 30 }}>
          <View style={{ width: "100%", height: 270, borderRadius: 20 }} />
          <View style={{ marginLeft: 10, marginVertical: 10, width: 130, height: 30 }}></View>
          <View style={{ marginLeft: 10, width: 250, height: 20 }}></View>
          <View style={{ marginLeft: 10, marginTop: 5, width: 220, height: 20 }}></View>
        </View>
        <View style={{ flexDirection: 'column', alignItems: 'flex-start', marginTop: 30 }}>
          <View style={{ width: "100%", height: 270, borderRadius: 20 }} />
          <View style={{ marginLeft: 10, marginVertical: 10, width: 130, height: 30 }}></View>
          <View style={{ marginLeft: 10, width: 250, height: 20 }}></View>
          <View style={{ marginLeft: 10, marginTop: 5, width: 220, height: 20 }}></View>
        </View>
      </SkeletonPlaceholder>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  body: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white'
  },


  header: {
    backgroundColor: '#F86D3B',
    flexDirection: 'row',
    height: windowHeight * 0.09,
    width: windowWidth,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },

  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    color: 'white',
  },
  logo: {
    width: 60,
    height: 60,
    alignSelf: 'center',
  },
  logo1: {
    width: 80,
    height: 80,
    marginLeft: 8,
  },

});