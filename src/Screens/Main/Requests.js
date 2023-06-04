import { StyleSheet, Text, View, FlatList, BackHandler } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Request from '../../components/Request';
import firebase from '@react-native-firebase/app';
import LoginContext from '../../context/Context';

const Requests = ({navigation}) => {

  const [requests, setRequests] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const {userData, setUser} = useContext(LoginContext);
  // console.log("user data from context api",userData)


  const getData = async () =>{
    setIsRefreshing(true)
    const snapshot = await firebase.firestore().collection('requests').get()
    let documents = [];
    snapshot.forEach(doc => {
      const document = doc.data();
      console.log(document)
      // document.pid = doc.id;
      documents.push(document);
    });
    setRequests(documents)
    setIsRefreshing(false)
  }

  const onRefresh = () => {
    setIsRefreshing(true)
    getData();
  }

  const handleBackPress = () => {
    navigation.goBack();
    return true;
  }

  
  useEffect(() => {
    getData();
    BackHandler.addEventListener("hardwareBackPress", handleBackPress);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackPress);
    }
  }, [])


  const data = [
    {
      id: 1,
      image: require('../../assets/temp_images/p1.jpg'),
      name: 'Meverik',
      location: 'I8, Islamabad',
      description: 'I have some needy people in my neighbors who might need this food. Thanks in Advance.',
    },
    {
      id: 2,
      image: require('../../assets/temp_images/p2.jpg'),
      name: 'Naim ahmad',
      location: 'Gulberg, Islamabad',
      description: 'Need this food for an NGO to feed orphans and old people.',
    },
  ]
  return (
    <View style={styles.container}>
      <FlatList 
        data={requests}
        keyExtractor={(item, index) => Math.random().toString()}
        renderItem={({item}) => <Request image={item.image} name={item.name} reason={item.reason} description={item.description} />}
        style={styles.list}
        refreshing={isRefreshing}
        onRefresh={onRefresh}
      />
    </View>
  )
}

export default Requests

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    height: '10%',
    backgroundColor: '#F86D3B',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  text: {
    fontSize: 25,
    color: '#fff',
  },
  logoContainer: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  list: {
    width: '100%',
    height: '90%',
    padding: 10,
  }
})