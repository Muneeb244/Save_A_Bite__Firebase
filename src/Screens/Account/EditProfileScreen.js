import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  TouchableHighlight,
  Pressable,
  Modal,
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';

import { EditProfile } from '../../assets/images';
import Button2 from '../../components/Button2';

const EditProfileScreen = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState(null);

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
        <View style={{ marginRight: 15 }}>
          <Ionicons name="share-social-outline" size={30} color="black" />
        </View>
      ),
    });
  }, [navigation]);


  const TakePhotoFromCamera = () => {
    try {
      ImagePicker.openCamera({
        width: 400,
        height: 300,
        cropping: true,
        compressImageQuality: 0.7,
      }).then(image => {
        setImage(image)
        setModalVisible(!modalVisible)
        uploadImage();
      });
    } catch (error) {
      console.log("Error from TakePhotoFromCamera", error);
    }
  }

  const ChoosePhotoFromGallery = () => {
    try {
      ImagePicker.openPicker({
        width: 400,
        height: 400,
        cropping: true,
        compressImageQuality: 0.7,
        mediaType: 'photo',
      }).then(image => {
        console.log(image)
        setModalVisible(!modalVisible)
        setImage(image)
        uploadImage();
      });
    } catch (error) {
      console.log("Error from ChoosePhotoFromGallery", error)
    }
  }

  const uploadImage = async () => {
    try {
      const reference = storage().ref(image.path.substring(image.path.lastIndexOf('/') + 1, image.path.length))
      const pathToFile = image.path;
      await reference.putFile(pathToFile);
    } catch (error) {
      console.log("Error from uploadImage", error)
    }
  }

  return (
    <>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Image source={image ? { uri: image.path } : EditProfile} style={styles.logo1} />
        <Pressable
          style={styles.addIcon} onPress={() => { setModalVisible(!modalVisible) }}>
          <MaterialCommunityIcons
            name="camera-plus"
            size={30}
            color="#000"
            style={{ marginTop: 10 }}
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
              <TextInput placeholder="First Name" style={styles.input} />
            </View>
            <View style={styles.row}>
              <Text style={styles.text2}>Last Name</Text>
              <TextInput placeholder="Last Name" style={styles.input} />
            </View>
            <View style={styles.row}>
              <Text style={styles.text2}>Phone Number</Text>
              <TextInput placeholder="Phone Number" style={styles.input} />
            </View>
            <View style={styles.row}>
              <Text style={styles.text2}>Email Address</Text>
              <TextInput placeholder="Email Address" style={styles.input} />
            </View>
          </View>

          <TouchableHighlight style={{ marginTop: 60 }} onPress={() => { }} underlayColor="#ffffff00">
            <Button2 title="Update Profile" />
          </TouchableHighlight>
        </ScrollView>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.modal}>
          <View style={styles.modalView}>
            <View style={{ alignItems: 'flex-end' }}>
              <MaterialCommunityIcons
                onPress={() => { setModalVisible(!modalVisible) }}
                name="close"
                size={30}
                color="#000"
                style={{ marginTop: 10 }}
              />
            </View>
            <TouchableHighlight style={{ marginTop: 15 }} onPress={TakePhotoFromCamera} underlayColor="#ffffff00">
              <Text style={styles.btn}>Open camera</Text>
            </TouchableHighlight>
            <TouchableHighlight style={{ marginTop: 15 }} onPress={ChoosePhotoFromGallery} underlayColor="#ffffff00">
              <Text style={styles.btn}>Choose Image</Text>
            </TouchableHighlight>

          </View>
        </View>

      </Modal>
    </>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container2: {
    width: '120%',
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
    marginTop: 60,
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
    // marginTop: 20,
    backgroundColor: '#F86D3B',
    textAlign: 'center',

    padding: 10,
    borderRadius: 20,
  }
});
