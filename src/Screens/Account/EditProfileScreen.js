import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  TouchableHighlight,
  Pressable,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

import React, { useContext, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import firestore from '@react-native-firebase/firestore';
import { EditProfile } from '../../assets/images';
import ImageModal from '../../components/ImageModal';
import storage from '@react-native-firebase/storage';
import LoginContext from '../../context/Context';
import firebase from '@react-native-firebase/app';


const EditProfileScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const [user, setUserData] = useState('');

  const {userData} = useContext(LoginContext);


  const getData = async () => {
    try {
      await firestore().collection('users').where("email", "==", userData.email).get()
        .then((querySnapshot) => {
          setUserData(querySnapshot.docs[0].data());
        }).catch((error) => {
          console.log("Error getting documents: ", error);
        });
    } catch (error) {
      alert("Error getting profile data");
      console.log("Error from account", error);
    }
  }




  const [loader, setLoader] = useState(false);

  const handleInputChange = (field, value) => {
    setUserData(prevData => ({
      ...prevData,
      [field]: value,
    }));
  };



  const navigation = useNavigation();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: 'white',
      },
      headerTitleStyle: {
        color: '#000', // Set the title color to black
      },
      headerTintColor: '#000',
      headerTitle: 'Edit Profile',
      color: 'black',
      headerRight: () => (
        <Ionicons name="share-social-outline" size={30} color="black" />
      ),
    });
  }, [navigation]);


  const uploadImage = async image => {

    let promise = new Promise(async (resolve, reject) => {

      try {
        const reference = storage().ref(
          image.path.substring(
            image.path.lastIndexOf('/') + 1,
            image.path.length,
          ),
        );
        const pathToFile = image.path;
        await reference.putFile(pathToFile);

        const url = await storage()
          .ref(
            image.path.substring(
              image.path.lastIndexOf('/') + 1,
              image.path.length,
            ),
          )
          .getDownloadURL();
        if (url) setLoader(false);
        setImageUrl(url);
        console.log(url)
        resolve(url);
      } catch (error) {
        alert('Error uploading image');
        reject("Error uploading image");
        console.log('Error from uploadImage', error);
      }
    });
    return promise;
  };



  const handleUpdate = async () => {
    setLoader(true);
    if (!image) return alert("Please select an image");
    uploadImage(image)
      .then(async (url) => {
        try {
          const querySnapshot = await firestore()
            .collection('users')
            .where('email', '==', firebase.auth().currentUser.email)
            .get();
    
          querySnapshot.forEach(async (documentSnapshot) => {
            try {
              await documentSnapshot.ref.update({
                fname: user.fname,
                lname: user.lname,
                PhNumber: user.PhNumber,
                imageURL: url,
              });
              alert('Your profile has been updated successfully.');
              setLoader(false);
            } catch (error) {
              console.log('Error updating document:', error);

              alert("Error updating profile data")
              setLoader(false);
            }
          });
        } catch (error) {
          alert('Error updating profile data');
          console.log('Error fetching user:', error);
          setLoader(false);
        }
      })
      .catch((error) => {
        console.log("error from function: ", error);
        setLoader(false);
      })
  };

  useEffect(() => {
    getData();
  }, [])
  return (
    <>
      <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={userData.imageURL ? { uri: userData.imageURL } : EditProfile}
          style={styles.logo1}
        />
        <Pressable
          style={styles.addIcon}
          onPress={() => {
            setModalVisible(!modalVisible);
          }}>
          <MaterialCommunityIcons
            name="camera-plus"
            size={30}
            color="#000"
            style={{ marginTop:10 }}
          />
        </Pressable>
        <ScrollView
          keyboardShouldPersistTaps="always"
          showsVerticalScrollIndicator={false}
          style={{ width: '100%', height: '100%' }}
          contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.textpart}>
            <Text>Change Profile Picture</Text>
          </View>
          <View style={styles.editpart}>
            <View style={styles.row}>
              <Text style={styles.text2}>First Name</Text>
              <TextInput
                placeholder="First Name"
                style={styles.input}
                value={user.fname}
                onChangeText={text => handleInputChange('fname', text)}
              />
            </View>
            <View style={styles.row}>
              <Text style={styles.text2}>Last Name</Text>
              <TextInput
                placeholder="Last Name"
                style={styles.input}
                value={user.lname}
                onChangeText={text => handleInputChange('lname', text)}
              />
            </View>
            <View style={styles.row}>
              <Text style={styles.text2}>Phone Number</Text>
              <TextInput
                placeholder="Phone Number"
                style={styles.input}

                value={user.PhNumber}
                onChangeText={text => handleInputChange('PhNumber', text)}
              />
            </View>
            <View style={styles.row}>
              <Text style={styles.text2}>Email Address</Text>
              <TextInput
                placeholder="Email Address"
                style={styles.input}
                value={user.email}
                onChangeText={text => handleInputChange('email', text)}
              />
            </View>

          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btn} onPress={handleUpdate}>
              {loader ? <ActivityIndicator color="#fff" /> : <Text style={styles.text}>Send Request</Text>}
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      <ImageModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setImage={setImage}
        image={image}
        setLoader={setLoader}
      />
    </>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container2: {
    width: '100%',
    alignSelf: 'center',
    height: '14%',
    borderBottomLeftRadius: 90,
    borderBottomRightRadius: 90,
    backgroundColor: '#e1e3e1',
    overflow: 'hidden',
  },
  logo1: {
    width: 130,
    height: 130,
    zIndex: 999,
    borderRadius: 600 / 2,
    alignSelf: 'center',
    marginTop: 30,
  },

  textpart: {
    alignItems: 'center',
    marginTop: 5,
  },
  editpart: {
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    marginHorizontal: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  input: {
    width: '60%',
    alignSelf: 'center',
    height: '100%',
    fontSize: 15,
    borderColor: 'black',
    paddingLeft: 30,
    backgroundColor: '#fff',
    padding: 10,
    borderWidth: 1,
    borderRadius: 15,
    color: '#00437a',
  },
  text2: { fontSize: 16, fontWeight: 400, color: 'black' },
  addIcon: {
    backgroundColor: '#b48d42',
    borderRadius: 30,
    width: 50,
    height: 50,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: -50,
    zIndex: 999,
    marginLeft: 90,
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    width: '70%',
    height: '30%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    // alignItems: 'flex-end',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  btn: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#F86D3B',
    textAlign: 'center',
    padding: 10,
    borderRadius: 20,
    alignSelf: 'center',
  },
  loader: {
    width: '100%',
    height: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  btn: {
    width: 250,
    height: 50,
    backgroundColor: '#F86D3B',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
  btnContainer: {
    width: '100%',
    height: '5%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  }
});
