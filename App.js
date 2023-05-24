import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen'

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
import Account from './src/Screens/Main/Account.js';
import AccountNavigation from './src/Navigations/AccountNavigation.js';
import Requests from './src/Screens/Main/Requests.js';
import BottomTaBNavigation from './src/Navigations/BottomTaBNavigation.js';
import AddPost from './src/Screens/Main/AddPost.js';


const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    // <NavigationContainer>
    //   <AuthNavigation />
    // </NavigationContainer>
    <View>
      <AddPost />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})