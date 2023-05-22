import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Login from './src/Screens/Login_SignUp/Login.js';
import SignUp from './src/Screens/Login_SignUp/SignUp.js';
import EmailScreen from './src/Screens/Login_SignUp/EmailScreen.js';
import VerficationScreen from './src/Screens/Login_SignUp/VerficationScreen.js';
import LandingPage from './src/Screens/Login_SignUp/LandingPage.js';
import ForgotPassword from './src/Screens/Login_SignUp/ForgotPassword.js';
import GettingStarted from './src/Screens/Landing/GettingStarted.js';
import AiChat from './src/Screens/Chat/AiChat.js';
import AuthNavigation from './src/Navigations/AuthNavigation.js';
import Home from './src/Screens/Main/Home.js';
import Post from './src/components/Post.js';
import PostNavigation from './src/Navigations/PostNavigation.js';


const App = () => {
  return (
    <NavigationContainer>
      <PostNavigation />
    </NavigationContainer>
    // <View>
    //   <Home />
    // </View>
  )
}

export default App

const styles = StyleSheet.create({})