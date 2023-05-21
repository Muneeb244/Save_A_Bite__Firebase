import {
StyleSheet,
  View,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
  Image,
  ScrollView,
  TextInput,
  Pressable,
  Dimensions,
  AppRegistry,
} from 'react-native';
'use strict';
let width = Dimensions.get('window').width
import * as yup from 'yup';
import {Formik} from 'formik';
import Button from '../../components/Button.js';
import ErrorMessage from '../../components/ErrorMessage';
import React from 'react';
import {Background2} from '../../assets/images';
import Background from '../../components/Background.js';

import {Email, Group, Pen, Phone} from '../../assets/images';
import {ImportOutlined} from '@ant-design/icons';
const SignUp = () => {
  const onSubmitValue = (values, {resetForm}) => {
    console.log('abc');
    resetForm();
    console.log(values);
  };
  const validationSchema = yup.object().shape({
    email: yup.string().email('Email must be a valid Email').required('Email is required'),
    fname: yup.string().required('First Name is required'),
    PhNumber: yup.string().required('Phone Number is required'),
    lname: yup.string().required('Last Name is required'),
    password: yup.string().min(8).required('Password is required'),
    cpassword: yup.string().min(8).required('Password is required').matches(),

  });
  return (
    <Formik
      initialValues={{email: '', password: '', fname:'', lname:'', PhNumber:'', cpassword:''}}
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
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{width: '100%', height: '100%'}}
          contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.container}>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={styles.container}>
              <Background>
                <View style={styles.box1}>
                  <Text style={{color:'black', fontSize:28, fontWeight:'bold', marginTop:-20}}>SignUp</Text>
                  <View>
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

                    <Pressable style={{marginTop: 20}} onPress={handleSubmit}>
                      <Button title="SignUp" />
                    </Pressable>

                    {/* <Text style={styles.text3}>
                      Don’t have an account?{' '}
                      <Text style={styles.text4}>Sign Up</Text>
                    </Text> */}
                  </View>
                </View>
          
               
                
              </Background>
           
            </KeyboardAvoidingView>

          </View>
          </ScrollView>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  box1: {
    backgroundColor: 'white',
    width: 300,
    height: 620,
    marginTop: 100,
    marginLeft:30,
    borderWidth: 2,

    borderRadius: 9,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  logo1: {
    width: 130,
    height: 130,
    zIndex: 999,
    borderRadius: 400 / 2,
    alignSelf: 'center',
    marginTop: 50,
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
  field:{marginTop:-10},
});

export default SignUp;


// const SignUp = () => {
//   return (
//     <KeyboardAvoidingView
//                   behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//                 //   style={styles.container}
//     >

//     <Background>

//     </Background>
//     </KeyboardAvoidingView>
//   )
// }

// export default SignUp

// const styles = StyleSheet.create({})