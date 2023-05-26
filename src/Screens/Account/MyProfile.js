import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableHighlight,
} from 'react-native';
import React from 'react';
import {EditIcon, EditProfile} from '../../assets/images';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const MyProfile = () => {
  return (
    <View>
      <View style={styles.container2}></View>
      <Image source={EditProfile} style={styles.logo1} />
      <View
        style={{
          backgroundColor: '#ebf0f0',
          borderRadius: 30,
          width: 50,
          height: 50,
          alignSelf: 'center',
          marginTop: -50,
          zIndex: 999,
          marginLeft: 90,
        }}>
        <Image source={EditIcon} style={styles.edit}></Image>
      </View>
      <View style={styles.textpart}>
        <Text style={styles.text1}>Khadija Iqbal</Text>
        <Text>khadija@gmail.com | +92 3035676641</Text>
      </View>

      <View style={styles.button1}>
        <TouchableHighlight
          style={styles.OneButton}
          onPress={() => console.log('Clicked')}
          underlayColor="#ebf0f0">
          <>
            <View style={styles.child}>
              <View style={styles.circle}>
                <Octicons
                  name="pencil"
                  size={23}
                  color="black"
                  style={styles.logo}
                />
              </View>
              <Text style={styles.optionTitle}>Edit Profile</Text>
            </View>
            <Ionicons
              name="chevron-forward-outline"
              size={30}
              color="#F86D3B"
            />
          </>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.OneButton}
          onPress={() => console.log('Clicked')}
          underlayColor="#ebf0f0">
          <>
            <View style={styles.child}>
              <View style={styles.circle}>
              <MaterialCommunityIcons name="lock" size={26} color="#000" style={{
            }} />
              </View>
              <Text style={styles.optionTitle}>Edit Profile</Text>
            </View>
            <Ionicons
              name="chevron-forward-outline"
              size={30}
              color="#F86D3B"
            />
          </>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.OneButton}
          onPress={() => console.log('Clicked')}
          underlayColor="#ebf0f0">
          <>
            <View style={styles.child}>
              <View style={styles.circle}>
              <MaterialIcons name="fastfood" size={25} color="#000" style={{
            }} />
              </View>
              <Text style={styles.optionTitle}>Edit Profile</Text>
            </View>
            <Ionicons
              name="chevron-forward-outline"
              size={30}
              color="#F86D3B"
            />
          </>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  container2: {
    width: '130%',
    alignSelf: 'center',
    height: '23%',
    borderBottomLeftRadius: 190,
    borderBottomRightRadius: 190,
    backgroundColor: '#ebf0f0',
    overflow: 'hidden',
  },
  logo1: {
    width: 130,
    height: 130,
    zIndex: 999,
    borderRadius: 400 / 2,
    alignSelf: 'center',
    marginTop: -70,
  },
  edit: {
    zIndex: 999,
    alignSelf: 'center',
    marginTop: 14,
  },
  textpart: {
    alignItems: 'center',
    marginTop: 5,
  },
  text1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  button1: {
    marginTop: 60,
    alignItems: 'center',
  },
  circle: {
    backgroundColor: '#F86D3B',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  OneButton: {
    width: '90%',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 20,
    elevation: 7,
    paddingHorizontal: 10,
  },
  child: {
    width: '40%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  optionTitle: {
    fontSize: 18,
    color: '#000',
    marginLeft: 10,
    textAlign: 'center',
  },
});
