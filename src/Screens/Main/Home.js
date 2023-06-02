import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity, BackHandler, Alert, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react';
import Post from '../../components/Post';
import firebase from '@react-native-firebase/app';
import { useFocusEffect } from '@react-navigation/native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';


const Home = ({ navigation }) => {

  const [posts, setPosts] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const onRefresh = () => {
    setIsRefreshing(true)
    getData();
  }

  // useFocusEffect(
  //   React.useCallback(() => {
  //     getData();
  //   }, [])
  // );

  const handleBackPress = () => {
    Alert.alert(
      "Exit app",
      "Exiting the application?",
      [
        {
          text: "Cancel",
          onPress: () => {
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


  const getData = async () => {
    setIsRefreshing(true)
    // const snapshot = await firebase.firestore().collection('posts').get();
    // console.log(snapshot.docs[1]._data)
    // snapshot.docs.map(doc => console.log(doc.data()))

    const snapshot = await firebase.firestore().collection('posts').get()
    let documents = [];
    snapshot.forEach(doc => {
      const document = doc.data();
      // console.log("From post", document)
      documents.push(document);
    });
    setPosts(documents)
    setIsRefreshing(false)
  }


  useEffect(() => {
    getData();
    BackHandler.addEventListener("hardwareBackPress", handleBackPress);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackPress);
    }
  }, []);

  // const list = [
  //   {
  //     image: require('../../assets/temp_images/chicken.jpg'),
  //     title: 'Chicken Karahi',
  //     description: 'Made by home chef but some of it got left and now it is available for anyone who would like to have it. It is still fresh',
  //     location: ' House # 67/A, Street 14, Gulberg, Islamabad.',
  //   },
  //   {
  //     image: require('../../assets/temp_images/rice.jpg'),
  //     title: 'Shrimp Fried Rice',
  //     description: 'I made these rice at home. My family had dinner with our relatives and these are available for any needy person.',
  //     location: 'Home # 12, Street 4, F7, Islamabad.',
  //   },
  //   {
  //     image: require('../../assets/temp_images/chicken.jpg'),
  //     title: 'Chicken Karahi',
  //     description: 'Made by home chef but some of it got left and now it is available for anyone who would like to have it. It is still fresh',
  //     location: ' House # 67/A, Street 14, Gulberg, Islamabad.',
  //   },
  // ]

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

      {isRefreshing ?
        <ScrollView style={{width: '100%', height: '100%', paddingHorizontal: 15,}}>
          <SkeletonPlaceholder borderRadius={4}>
            <View style={{ flexDirection: 'column', alignItems: 'flex-start', marginTop: 20 }}>
              <View style={{ width: "100%", height: 189, borderRadius: 20 }} />
              <View style={{ marginLeft: 10, marginVertical: 7, width: 130, height: 20 }}></View>
              <View style={{ marginLeft: 10, width: 250, height: 15 }}></View>
              <View style={{ marginLeft: 10, marginTop: 5, width: 220, height: 15 }}></View>
            </View>
            <View style={{ flexDirection: 'column', alignItems: 'flex-start', marginTop: 20 }}>
              <View style={{ width: "100%", height: 189, borderRadius: 20 }} />
              <View style={{ marginLeft: 10, marginVertical: 7, width: 130, height: 30 }}></View>
              <View style={{ marginLeft: 10, width: 250, height: 20 }}></View>
              <View style={{ marginLeft: 10, marginTop: 5, width: 220, height: 20 }}></View>
            </View>
          </SkeletonPlaceholder>
        </ScrollView>
        :
        <FlatList
          style={styles.list}
          data={posts}
          onRefresh={onRefresh}
          refreshing={isRefreshing}
          keyExtractor={() => Math.random().toString()}
          renderItem={({ item }) => <Post image={item.imageUrl} title={item.name} location={item.location} description={item.details} email={item.email} contact={item.contact} coordinates={item.coordinates} />}
          showsHorizontalScrollIndicator={false}
        />}
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
    width: '100%',
    height: '100%',
    paddingHorizontal: 15,
    marginBottom: 10,
  }
})