import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity, BackHandler, Alert } from 'react-native'
import React, { useEffect, useState } from 'react';
import Post from '../../components/Post';


const Home = ({ navigation }) => {

  const handleBackPress = () => {
    Alert.alert(
      "Exit app",
      "Exiting the application?",
      [
        {
          text: "Cancel",
          onPress: () => {
            console.log("cancel Pressed")
          },
          styles: 'cancel',
        },
        {
          text: 'ok',
          onPress: () => BackHandler.exitApp(),
        },
      ],
      {
        cancelable: false,
      },
    );
    return true;
  }

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackPress);
    
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackPress);
    }
  })

  const list = [
    {
      image: require('../../assets/temp_images/chicken.jpg'),
      title: 'Chicken Karahi',
      description: 'Made by home chef but some of it got left and now it is available for anyone who would like to have it. It is still fresh',
      location: ' House # 67/A, Street 14, Gulberg, Islamabad.',
    },
    {
      image: require('../../assets/temp_images/rice.jpg'),
      title: 'Shrimp Fried Rice',
      description: 'I made these rice at home. My family had dinner with our relatives and these are available for any needy person.',
      location: 'Home # 12, Street 4, F7, Islamabad.',
    },
    {
      image: require('../../assets/temp_images/chicken.jpg'),
      title: 'Chicken Karahi',
      description: 'Made by home chef but some of it got left and now it is available for anyone who would like to have it. It is still fresh',
      location: ' House # 67/A, Street 14, Gulberg, Islamabad.',
    },
  ]

  const [search, setSearch] = useState('');

  return (
    <View style={styles.container}>
      <TextInput style={styles.search} placeholder='Search' value={search} onChangeText={setSearch} />
      <View style={styles.categories}>
        <TouchableOpacity>
          <Text style={styles.category}>All</Text>
        </TouchableOpacity>
        <Text style={styles.category}>Pizza</Text>
        <Text style={styles.category}>Burger</Text>
        <Text style={styles.category}>Chicken</Text>
        <Text style={styles.category}>Desi</Text>
      </View>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={() => Math.random().toString()}
        renderItem={({ item }) => <Post image={item.image} title={item.title} description={item.description} location={item.location} navigation={navigation} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 10,
  },
  search: {
    width: '90%',
    height: 40,
    backgroundColor: '#C8C8C8',
    borderRadius: 15,
    paddingHorizontal: 15,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '90%',
    marginTop: 10,
    marginBottom: 10,
  },
  category: {
    fontSize: 15,
    backgroundColor: '#C8C8C8',
    marginRight: 5,
    padding: 5,
    borderRadius: 10,
    paddingHorizontal: 7,
  },
  list: {
    flex: 1,
    paddingHorizontal: 15,
    marginBottom: 10,
  }
})