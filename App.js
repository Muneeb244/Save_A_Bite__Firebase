import { StyleSheet, Text, View } from 'react-native'
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


const App = () => {
  return (
    <NavigationContainer>
      <AuthNavigation />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})