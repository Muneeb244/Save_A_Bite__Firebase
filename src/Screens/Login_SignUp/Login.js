import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
  ScrollView,
  TextInput,
  Pressable,
} from 'react-native';
import * as yup from 'yup';
import { Formik } from 'formik';
import Button from '../../components/Button.js';
import ErrorMessage from '../../components/ErrorMessage';
import React from 'react';
import { Background1 } from '../../assets/images';
import { logo } from '../../assets/images';
import { Email,  Group } from '../../assets/images';
const Login = () => {
  const onSubmitValue = (values, { resetForm }) => {
    console.log('abc');
    resetForm();
    console.log(values);
  };
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email()
      .required('Email is required'),
    password: yup
      .string()
      .min(8)
      .required('Password is required'),
  });
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validateOnMount={true}
      onSubmit={onSubmitValue}
      validationSchema={validationSchema}
      >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        errors,
        isValid,
      }) => (
        <ScrollView showsVerticalScrollIndicator={false} style={{ width: "100%", height: "200%" }} contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.container}>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={styles.container}>
              <ImageBackground
                source={Background1}
                resizeMode="cover"
                style={styles.image}>
                <Text style={styles.text1}>LogIn</Text>
                <Image source={logo} style={styles.logo1} />
                <View style={styles.box1}>
                  <View style={{ marginTop: 1 }}>
                    <View >
                    <Image source={Email} style={styles.icon} />
                    <TextInput
                      placeholder="Email"
                      style={styles.input}
                      png={Email}
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
                    


                    <View>
                    <Image source={Group} style={styles.icon} />
                    <TextInput
                      placeholder="Password"
                      secureTextEntry={true}
                      style={styles.input}
                      name='Email'
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                    />
                    <ErrorMessage
                      error={errors['password']}
                      visible={touched['password']}
                    />
                     </View>
                  </View>
                  <Text style={styles.text2}>
                    Forgot Password ?{' '}
                  </Text>

                  <Pressable style={{marginTop: 30}} onPress={handleSubmit}>
                    <Button title="LogIn" />
                  </Pressable>

                  <Text style={styles.text3}>
                    Don’t have an account?{' '}
                    <Text style={styles.text4}>Sign Up</Text>
                  </Text>
                </View>
              </ImageBackground>
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
  image: {
    flex: 1,
  },
  text1: {
    color: 'white',
    fontSize: 32,
    marginTop: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  box1: {
    backgroundColor: 'white',
    width: 300,
    height: 430,
    borderWidth: 2,
    alignSelf: 'center',
    marginTop: -70,
    borderRadius: 9,
    alignItems: 'center',
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
    width:250,
    alignSelf: 'center',
    height: 49,
    fontSize: 13,
    elevation:4,
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
  text2:{
    alignSelf: 'flex-end', marginRight: 20, marginTop:5 
  },
  text3:{
    marginBottom: -50, marginTop: 20 
  },
  text4:{
    color: '#F86D3B', fontWeight: 'bold' 
  }
});

export default Login;