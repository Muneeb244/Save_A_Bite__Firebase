import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Settings = () => {
  const navigation = useNavigation();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleStyle: {
        color: 'black',
      },
      headerTintColor: '#000',
    });
  }, [navigation]);

  return (
    <View style={styles.screen}>
      <View style={{ marginHorizontal: 20,}}>
        <View style={styles.row}>
          <FontAwesome5 name="users-cog" size={30} color="#F86D3B" />
          <Text style={styles.text1}>Account</Text>
        </View>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
            marginBottom:10,
          }}
        />
       <View>
          <Text onPress={()=>{console.log('clicked')}} style={styles.text2}>
            Edit Profile
          </Text>
          <Text  onPress={()=>{console.log('clicked')}} style={styles.text2}>
           Change Password
          </Text>
          <Text  onPress={()=>{console.log('clicked')}} style={styles.text2}>
           Privacy
          </Text>
        </View>
        <View style={styles.row}>
          <MaterialCommunityIcons name="bell-circle" size={35} color="#F86D3B" />
          <Text style={styles.text1}>Notifications</Text>
        </View>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
            marginBottom:10,
          }}
        />

      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom:6,
    width: '100%',
    alignItems: 'center',
    height: 40,
  },
  text1: {
    fontSize: 21,
    fontWeight: 700,
    color: '#F86D3B',
    marginLeft: 10,
  
  },
  text2:{
    fontSize:19,
    fontWeight:'bold',
    marginVertical:6,
  }
});
