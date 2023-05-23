import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Account from '../Screens/Main/Account';

const Stack = createNativeStackNavigator();

const AccountNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{animation: 'slide_from_right', headerStyle: {backgroundColor: '#F86D3B'}, headerShadowVisible: false ,headerTintColor: '#fff', headerTitleAlign: 'center'}}>
        <Stack.Screen name="Account" component={Account} />
    </Stack.Navigator>
  )
}

export default AccountNavigation

const styles = StyleSheet.create({})