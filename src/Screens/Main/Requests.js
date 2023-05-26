import { StyleSheet, Text, View, FlatList, BackHandler } from 'react-native'
import React, { useEffect } from 'react'
import Request from '../../components/Request'

const Requests = ({navigation}) => {

  const handleBackPress = () => {
    navigation.goBack();
    return true;
  }

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackPress);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackPress);
    }
  })

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
      {/* <View style={styles.header}>
        <Text style={styles.text}>Requests</Text>
      </View> */}
      {/* <Request image={data[0].image} name={data[0].name} location={data[0].location} description={data[0].description} /> */}
      <FlatList 
        data={data}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={({item}) => <Request image={item.image} name={item.name} location={item.location} description={item.description} />}
        style={styles.list}
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