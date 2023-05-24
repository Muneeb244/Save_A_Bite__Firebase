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
  import { Background1, Phone } from '../../assets/images';
  import { logo } from '../../assets/images';
  import { Email,  Group, Pen , Maps} from '../../assets/images';
import Btn from '../../components/Btn.js';
  
  
  const SendRequest = ({navigation}) => {
    const onSubmitValue = (values, { resetForm }) => {
      console.log('abc');
      resetForm();
      console.log(values);
    };
    const validationSchema = yup.object().shape({
      name: yup
        .string()
        .required('name is required'),
      reason: yup
        .string()
        .required('reason is required'),
    });
    return (
      <Formik
        initialValues={{ name: '', reason: '' }}
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
          <ScrollView showsVerticalScrollIndicator={false} style={{ width: "100%", height: "100%" }} contentContainerStyle={{ flexGrow: 1 }}>
              <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}>
                <View style = {styles.container}>
                    <View style = {styles.header}>
                    <Text style={styles.text1}>Send Request</Text>
                    </View>
                  <View style={styles.box1}>
                    <View style={{ marginTop: 1 }}>
                      <Image source={Pen} style={styles.icon} />
                      <TextInput
                        placeholder="Your Name"
                        style={styles.input}
                        // png={Email}
                        onChangeText={handleChange('name')}
                        onBlur={handleBlur('name')}
                        value={values.name}
                        placeholderTextColor='black'
                        // keyboardType="email-address"
                      />
                      <ErrorMessage
                        error={errors['name']}
                        visible={touched['name']}
                      />
                      </View>
                      <View style={{flexDirection:'column'}}>
                      <Image source={Pen} style={styles.icon} />
                      <TextInput
                        // placeholder="Enter a Valid Reason"
                        style={styles.input1}
                        name='reason'
                        onChangeText={handleChange('reason')}
                        onBlur={handleBlur('reason')}
                        value={values.details}
                        placeholderTextColor='black'
                      />
                      <ErrorMessage
                        error={errors['reason']}
                        visible={touched['reason']}
                      />
                    </View>
                    
                    
                    <Pressable style={{marginTop: 30}} onPress={handleSubmit}>
                      <Btn title="Send Request" />
                    </Pressable>
  
                 
                  </View>
                  </View>
              </KeyboardAvoidingView>
          </ScrollView>
        )}
      </Formik>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
    //   alignItems: 'center',
    //   justifyContent:'center',
      flex:1,
      backgroundColor:'white'
    },
    header: {
      width: '100%',
      height: '8%',
      alignItems: 'center',
      backgroundColor:'#F86D3B',
    //   marginTop:-180,
        
    },
    text1: {
      color: 'white',
      fontSize: 32,
      marginTop: 10,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    box1: {
      backgroundColor: '#F86D3B',
      width: '90%',
      height: '85%',
      borderWidth: 1,
      alignSelf: 'center',
      borderRadius: 9,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:25,
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
      width:330,
      alignSelf: 'center',
      height: 70,
      fontSize: 13,
      elevation:4,
      paddingLeft: 60,
      backgroundColor: '#fff',
      padding: 10,
      borderRadius: 15,
      color: '#00437a',
    },
    input1: {
        width:330,
        // alignSelf: 'center',
        height: 350,
        fontSize: 13,
        elevation:4,
        paddingLeft: 60,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 15,
        justifyContent:'flex-start',
        color: '#00437a',
      },
    icon: {
      position: 'relative',
      top: 45,
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
  
  export default SendRequest;