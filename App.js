import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import auth from '@react-native-firebase/auth';
console.disableYellowBox = true; 

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
import SendRequest from './src/Screens/Main/SendRequest.js';
import Chat from './src/Screens/Chat/ChatApp.js';
import Loader from './src/components/Loader.js';
import MyProfile from './src/Screens/Account/MyProfile.js';
import ChangePas from './src/Screens/Account/ChangePas.js';
import LoginContext from './src/context/Context.js';
import firestore from '@react-native-firebase/firestore';
import Users from './src/Screens/Chat/Users.js';

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyD9OvxCFkCzysPg83b-1dgQwj8z-fVrkLg",
//   authDomain: "save-a-bite-3d411.firebaseapp.com",
//   databaseURL: "https://save-a-bite-3d411-default-rtdb.firebaseio.com",
//   projectId: "save-a-bite-3d411",
//   storageBucket: "save-a-bite-3d411.appspot.com",
//   messagingSenderId: "511659661320",
//   appId: "1:511659661320:web:81e3e7a95baa34305559bd",
//   measurementId: "G-PPTTRJMYRH"
// };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


const App = () => {

  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);

  const getData = async (email) => {
    try {
      await firestore().collection('users').where("email", "==", email).get()
        .then((querySnapshot) => {
          setUserData(querySnapshot.docs[0].data());
        }).catch((error) => {
          console.log("Error getting documents: ", error);
        });
    } catch (error) {
      alert("Error getting profile data");
      console.log("Error from account", error);
    }
  }

  useEffect(() => {
    SplashScreen.hide();
    auth().onAuthStateChanged((user) => {
      if (user?.emailVerified) {
        setUser(user);
        getData(user.email);
      }
    })
  }, []);


  return (

    <LoginContext.Provider value={{user, setUser, userData, setUserData}}>
      <NavigationContainer>
        {user ? <BottomTaBNavigation/> : <AuthNavigation />}
      </NavigationContainer>
     </LoginContext.Provider>
    // <View style={{backgroundColor: 'red', width: '100%', height: '100%'}}>
    //   <Loader />
    // </View>

    // <View>
    //   <Users />
    // </View>
  )
}

export default App

const styles = StyleSheet.create({})