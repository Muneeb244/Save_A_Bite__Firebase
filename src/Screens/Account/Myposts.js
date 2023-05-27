import { StyleSheet, Text, View, TouchableHighlight,Image } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
const Myposts = ({route}) => {
  // const {description, location, title, navigation } = route.params

    // const navigation = useNavigation();
  // React.useLayoutEffect(() => {
  //   navigation.setOptions({
  //       headerTitleStyle: {
  //           color: 'black', 
  //         },
  //         headerTintColor: '#000',
  //     headerRight: () => (
  //       <View style={{marginRight: 15}}>
  //         <MaterialCommunityIcons
  //           name="account-circle"
  //           size={30}
  //           color="black"
  //           onPress={() => {
  //                   navigation.navigate('Account')
  //           }}
  //         />
  //       </View>
  //     ),
  //   });
  // }, [navigation]);
  return (
    <View style={{flex:1,backgroundColor:'white',alignItems:'center'}}>
     <TouchableHighlight
          style={styles.OneButton}
          // onPress={()=> navigation.navigate('EditProfileScreen')}
          underlayColor="#ebf0f0">
          <>

           <Text>
            djdjdj
           </Text>
          </>
        </TouchableHighlight>
    </View>
  )
}

export default Myposts

const styles = StyleSheet.create({
  OneButton: {
    width: '90%',
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 20,
    elevation: 7,
    zIndex:999,
    paddingHorizontal: 10,
  },
})