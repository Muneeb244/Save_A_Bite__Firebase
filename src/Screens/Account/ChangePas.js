import { View, Text } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';
const ChangePas = () => {
  const navigation = useNavigation();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: 'white',
      },
      headerTitleStyle: {
        color: '#000', 
      },
      headerTintColor: '#000',
      headerTitle: 'Change Password',
      color: 'black',
    });
  }, [navigation]);
  return (
    <View>
      <Text>ChangePas</Text>
    </View>
  )
}

export default ChangePas