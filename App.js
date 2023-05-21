import { StyleSheet, Text, View } from 'react-native'
import React from 'react';

import Login from './src/Screens/Login_SignUp/Login.js';
import SignUp from './src/Screens/Login_SignUp/SignUp.js';
import EmailScreen from './src/Screens/Login_SignUp/EmailScreen.js';
import VerficationScreen from './src/Screens/Login_SignUp/VerficationScreen.js';
import LandingPage from './src/Screens/Login_SignUp/LandingPage.js';

const App = () => {
  return (
    <View>
      {/* <SignUp/> */}
      {/* <Login/> */}
      {/* <EmailScreen/> */}
      {/* <VerficationScreen/>
       */}
       <LandingPage/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})