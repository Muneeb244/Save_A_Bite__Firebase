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
import { TouchableOpacity } from 'react-native-gesture-handler';
  
// const selectImage = async camera => {
//   let options = {
//     mediaType: 'photo',
//   };

//   let response;
//   if (camera) {
//     response = await launchCamera(options);
//   } else {
//     response = await launchImageLibrary(options);
//   }

//   if (response.didCancel) {
//     console.log('User cancelled image picker');
//   } else if (response.error) {
//     console.log('ImagePicker Error: ', response.error);
//   } else {s
//     setImage(response.assets[0].uri);
//   }
// };
  const AddPost = ({navigation}) => {
    const onSubmitValue = (values, { resetForm }) => {
      console.log('abc');
      resetForm();
      console.log(values);
    };
    const validationSchema = yup.object().shape({
      name: yup
        .string()
        .required('name is required'),
      details: yup
        .string()
        .required('details is required'),
     location: yup
        .string()
        .required('location is required'),
     contact: yup
        .string(),
     pics: yup
        .string(),
    });
    return (
      <Formik
        initialValues={{ name: '', details: '',location: '',contact:'',pics:'' }}
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
                    <Text style={styles.text1}>Add Details</Text>
                    </View>
                  <View style={styles.box1}>
                    <View style={{ marginTop: 1 }}>
                      <Image source={Pen} style={styles.icon} />
                      <TextInput
                        placeholder="Name of the item"
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
                      <View>
                      <Image source={Pen} style={styles.icon} />
                      <TextInput
                        placeholder="Add Details"
                        style={styles.input}
                        name='details'
                        onChangeText={handleChange('details')}
                        onBlur={handleBlur('details')}
                        value={values.details}
                        placeholderTextColor='black'
                      />
                      <ErrorMessage
                        error={errors['details']}
                        visible={touched['details']}
                      />
                    </View>
                    
                    <View>
                      <Image source = {require('../../assets/images/maps.png')} style={styles.icon} />
                      <TextInput
                        placeholder="Add your Location"
                        secureTextEntry={true}
                        style={styles.input}
                        name='location'
                        onChangeText={handleChange('location')}
                        onBlur={handleBlur('location')}
                        value={values.location}
                        placeholderTextColor='black'
                      />
                      <ErrorMessage
                        error={errors['location']}
                        visible={touched['location']}
                      />
                    </View>
                    <View>
                      <Image source={Phone} style={styles.icon} />
                      <TextInput
                        placeholder="Contact Number (optional)"
                        secureTextEntry={true}
                        style={styles.input}
                        name='contact'
                        onChangeText={handleChange('contact')}
                        onBlur={handleBlur('contact')}
                        value={values.contact}
                        placeholderTextColor='black'
                      />
                      <ErrorMessage
                        error={errors['contact']}
                        visible={touched['contact']}
                      />
                    </View>
                    <View>
                      <Image source = {require('../../assets/images/plus.png')} style={styles.icon} />
                      <TextInput
                        placeholder="Upload Images (max 2)"
                        secureTextEntry={true}
                        style={styles.input}
                        name='pics'
                        onChangeText={handleChange('pics')}
                        onBlur={handleBlur('pics')}
                        value={values.pics}
                        placeholderTextColor='black'
                      />
                      <ErrorMessage
                        error={errors['pics']}
                        visible={touched['pics']}
                      />
               </View>
                    <Pressable style={{marginTop: 30}} >
                      <Btn title="Post" />
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
  
  export default AddPost;