import { StyleSheet, Text, View } from 'react-native'
import React from 'react';

import Login from './src/Screens/Login_SignUp/Login.js';
import SignUp from './src/Screens/Login_SignUp/SignUp.js';

const App = () => {
  return (
    <View>
      {/* <SignUp/> */}
      <Login/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})