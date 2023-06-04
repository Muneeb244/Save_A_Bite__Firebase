import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Request = ({ image, name, reason }) => {
  return (
    <View style={styles.container}>
      <View style={styles.child}>
        <Image source={image ? image : require('../assets/temp_images/girl.png')} style={styles.image} resizeMode='cover' />
        <View style={styles.info}>
          <Text style={styles.name} numberOfLines={1} >{name}</Text>
          <Text style={styles.location} numberOfLines={1} >{location}</Text>
        </View>
      </View>
      <View style={styles.description}>
        <Text style={styles.descriptionText} numberOfLines={4} >{reason}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.logoContainer, {backgroundColor: '#22DD22',}]}>
            <Ionicons name='checkmark' size={30} color='#fff' />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.logoContainer, {backgroundColor: 'red'}]}>
            <Ionicons name='close' size={30} color='#fff' />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Request

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 20,
    height: 140,
    backgroundColor: '#C8C8C8',
    padding: 10,
    borderRadius: 20,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#000",
  },
  location: {
    color: '#737171',
  },
  child: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  descriptionText: {
    width: '70%',
    color: '#000',
  },
  logoContainer: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    width: '100%',
    height: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '25%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
})