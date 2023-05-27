import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import React from 'react';
import { EditProfile} from '../../assets/images';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import Button2 from '../../components/Button2';

const EditProfileScreen = () => {
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
        <View style={{marginRight: 15}}>
          <Ionicons name="share-social-outline" size={30} color="black" />
        </View>
      ),
    });
  }, [navigation]);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {/* <View style={styles.container2}></View> */}
      <Image source={EditProfile} style={styles.logo1} />
      <View
        style={{
          backgroundColor: '#b48d42',
          borderRadius: 30,
          width: 50,
          height: 50,
          alignSelf: 'center',
          alignItems: 'center',
          marginTop: -50,
          zIndex: 999,
          marginLeft: 90,
        }}>
        <MaterialCommunityIcons
          name="camera-plus"
          size={30}
          color="#000"
          style={{marginTop: 10}}
        />
      </View>
      <ScrollView
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
        style={{width: '100%', height: '100%'}}
        contentContainerStyle={{flexGrow: 1}}>
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

        <TouchableHighlight style={{ marginTop: 60 }} onPress={()=>{}} underlayColor="#ffffff00">
                  <Button2 title="Update Profile" />
                </TouchableHighlight>
      </ScrollView>
    </View>
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
  text2: {fontSize: 16, fontWeight: 400, color: 'black'},
});
