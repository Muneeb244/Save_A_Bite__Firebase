import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  Image,
  ScrollView,
  TextInput,
  Pressable,
  ImageBackground,
} from 'react-native';
import * as yup from 'yup';
import { Formik } from 'formik';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Button from '../../components/Button.js';
import ErrorMessage from '../../components/ErrorMessage';
import React, { useState } from 'react';
import { Email, Group, Pen, Phone } from '../../assets/images';
import Loader from '../../components/Loader.js';


const SignUp = ({ navigation }) => {


  useEffect(() => {
    AsyncStorage.setItem("start", "true");
  });

  const [loader, setLoader] = useState(false);


  const addData = (values) => {
    delete values.password;
    delete values.cpassword;

    let promise = new Promise((resolve, reject) => {
      firestore()
        .collection('users')
        .add(values)
        .then(() => {
          console.log('User added!');
          resolve(true)
        })
        .catch((error) => {
          console.log(error);
          throw new Error("SignUp failed");
        });
    });
    return promise;
  }

  const onSubmitValue = async (values, { resetForm }) => {
    setLoader(true);
    resetForm();
    try {
      const user = await auth().createUserWithEmailAndPassword(values.email, values.password);
      if (user) {
        addData(values)
          .then((bool) => {
            setLoader(false)
            auth().currentUser.sendEmailVerification()
              .then(async () => {
                alert("Please verify your email address. An email has been sent to your email address")
                await auth().signOut();
                navigation.navigate('Login');
              })
              .catch((error) => alert("Error: ", error))
          }).catch((error) => alert("Signup failed1"))

      } else alert("Signup failed")


    } catch (error) {
      setLoader(false)
      console.log("Error", error.message)
      alert(error.message);
    }
  };


  const validationSchema = yup.object().shape({
    email: yup.string().email().required('Email is required'),
    fname: yup.string().required(),
    PhNumber: yup.string().required().min(11),
    lname: yup.string().required(),
    password: yup.string().min(6).required(),
    cpassword: yup.string().min(6).required("Confirm password field is required").oneOf([yup.ref('password'), null], 'Passwords must match'),

  });
  return (
    <Formik
      initialValues={{ email: '', password: '', fname: '', lname: '', PhNumber: '', cpassword: '' }}
      validateOnMount={true}
      onSubmit={onSubmitValue}
      validationSchema={validationSchema}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        errors,
        isValid,
      }) => (
        <ImageBackground source={require('../../assets/images/Background2.jpeg')} resizeMode='cover'>
          {loader ? <Loader size="large" color="#F86D3B" /> : ""}
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>
            <View style={styles.box1}>
              <ScrollView
                keyboardShouldPersistTaps='always'
                showsVerticalScrollIndicator={false}
                style={{ width: '100%', height: '100%' }}
                contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
                <Text style={{ color: 'black', fontSize: 28, fontWeight: 'bold', marginTop: 20 }}>SignUp</Text>
                <View style={styles.field}>
                  <Image source={Pen} style={styles.icon} />
                  <TextInput
                    placeholder="First Name"
                    style={styles.input}
                    onChangeText={handleChange('fname')}
                    onBlur={handleBlur('fname')}
                    value={values.fname}
                  />
                  <ErrorMessage
                    error={errors['fname']}
                    visible={touched['fname']}
                  />
                </View>
                <View style={styles.field}>
                  <Image source={Pen} style={styles.icon} />
                  <TextInput
                    placeholder="Last Name"
                    style={styles.input}
                    onChangeText={handleChange('lname')}
                    onBlur={handleBlur('lname')}
                    value={values.lname}
                  />
                  <ErrorMessage
                    error={errors['lname']}
                    visible={touched['lname']}
                  />
                </View>
                <View style={styles.field}>
                  <Image source={Phone} style={styles.icon} />
                  <TextInput
                    placeholder="Phone Number"
                    style={styles.input}
                    onChangeText={handleChange('PhNumber')}
                    onBlur={handleBlur('PhNumber')}
                    value={values.PhNumber}
                    keyboardType="numeric"
                  />
                  <ErrorMessage
                    error={errors['PhNumber']}
                    visible={touched['PhNumber']}
                  />
                </View>
                <View style={styles.field}>
                  <Image source={Email} style={styles.icon} />
                  <TextInput
                    placeholder="Email"
                    style={styles.input}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    keyboardType="email-address"
                  />
                  <ErrorMessage
                    error={errors['email']}
                    visible={touched['email']}
                  />
                </View>

                <View style={styles.field}>
                  <Image source={Group} style={styles.icon} />
                  <TextInput
                    placeholder="Password"
                    secureTextEntry={true}
                    style={styles.input}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                  />
                  <ErrorMessage
                    error={errors['password']}
                    visible={touched['password']}
                  />
                </View>
                <View style={styles.field}>
                  <Image source={Group} style={styles.icon} />
                  <TextInput
                    placeholder="Confirm Password"
                    secureTextEntry={true}
                    style={styles.input}
                    onChangeText={handleChange('cpassword')}
                    onBlur={handleBlur('cpassword')}
                    value={values.cpassword}
                  />
                  <ErrorMessage
                    error={errors['cpassword']}
                    visible={touched['cpassword']}
                  />
                </View>

                <Pressable style={{ marginTop: 20 }} onPress={handleSubmit}>
                  <Button title="SignUp" />
                </Pressable>

                <Text style={styles.text3} onPress={() => navigation.navigate('Login')}>
                  Already have an account?
                  <Text style={styles.text4}> LogIn</Text>
                </Text>


              </ScrollView>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  box1: {
    backgroundColor: '#fff',
    width: '80%',
    height: '82%',
    borderWidth: 1,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  input: {
    width: 250,
    alignSelf: 'center',
    height: 49,
    fontSize: 13,
    elevation: 4,
    paddingLeft: 60,
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 15,
    color: '#00437a',
  },
  icon: {
    position: 'relative',
    top: 35,
    marginLeft: 20,
    zIndex: 1,
  },
  text2: {
    alignSelf: 'flex-end',
    marginRight: 20,
    marginTop: 5,
  },
  text3: {
    marginBottom: -50,
    marginTop: 20,
  },
  text4: {
    color: '#F86D3B',
    fontWeight: 'bold',
  },
  field: { marginTop: -10 },
});

export default SignUp;
