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
import Field from '../../components/Field';
import Button from '../../components/Button';
import { PasswordIcon, EmailIcon } from '../../assets/icons';
import ErrorMessage from '../../components/ErrorMessage';
import React from 'react';
import { Background1 } from '../../assets/images';
import { logo } from '../../assets/images';

const App = () => {
  const onSubmitValue = (values, { resetForm }) => {
    console.log('abc');
    resetForm();
    console.log(values);
  };
  const image = { uri: 'https://reactjs.org/logo-og.png' };
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Email is required')
      .required(),
    password: yup
      .string()
      .min(8)
      .required(),
  });
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
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
                    <Field
                      placeholder="Email"
                      svg={EmailIcon}
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                      keyboardType="email-address"
                    />
                    <ErrorMessage
                      error={errors['email']}
                      visible={touched['email']}
                    />

                    <Field
                      placeholder="Password"
                      secureTextEntry={true}
                      svg={PasswordIcon}
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                    />
                    <ErrorMessage
                      error={errors['password']}
                      visible={touched['password']}
                    />
                  </View>
                  <Text style={{ alignSelf: 'flex-end', marginRight: 20 }}>
                    Forgot Password ?{' '}
                  </Text>

                  <Pressable style={{ marginTop: 30 }} onPress={handleSubmit}>
                    <Button title="LogIn" />
                  </Pressable>

                  <Text style={{ marginBottom: -50, marginTop: 20 }}>
                    Don’t have an account?{' '}
                    <Text style={{ color: '#F86D3B', fontWeight: 'bold' }}>Sign Up</Text>
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
    height: 400,
    borderWidth: 2,
    alignSelf: 'center',
    marginTop: -60,
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
});

export default App;