import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Main/Home';
import PostDetail from '../Screens/Main/PostDetail';
import SendRequest from '../Screens/Main/SendRequest';

const Stack = createNativeStackNavigator();

const PostNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{animation: 'fade_from_bottom', headerStyle: {backgroundColor: '#F86D3B'}, headerTintColor: '#fff', headerTitleAlign: 'center'}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Post Detail" component={PostDetail} />
    </Stack.Navigator>
  )
}

export default PostNavigation

const styles = StyleSheet.create({})