import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native'
import React from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Account = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/temp_images/girl.png')} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.name}>Khadija Iqbal</Text>
          <Text style={styles.location}>House # 26, Street 1, I8, Islamabad</Text>
        </View>
        <View style={styles.logoContainer}>
          <Octicons name="pencil" size={23} color="#F86D3B" style={styles.logo} />
        </View>
      </View>

      <TouchableHighlight style={styles.option} onPress={() => console.log("Clicked")} underlayColor="#ffffff00">
        <>
          <View style={styles.child}>
            <Ionicons name="settings-outline" size={30} color="#000" />
            <Text style={styles.optionTitle}>Settings</Text>
          </View>
          <Ionicons name="chevron-forward-outline" size={30} color="#000" />
        </>
      </TouchableHighlight>
      <TouchableHighlight style={styles.option} onPress={() => console.log("Clicked")} underlayColor="#ffffff00">
        <>
          <View style={styles.child}>
            <FontAwesome5 name="robot" size={25} color="#000" />
            <Text style={styles.optionTitle}>Chatbot</Text>
          </View>
          <Ionicons name="chevron-forward-outline" size={30} color="#000" />
        </>
      </TouchableHighlight>

      <TouchableHighlight style={styles.option} onPress={() => console.log("Clicked")} underlayColor="#ffffff00">
        <>
          <View style={styles.child}>
            <MaterialCommunityIcons name="logout" size={30} color="#000" style={{
              transform: [
                { scaleX: -1 }
              ]
            }} />
            <Text style={styles.optionTitle}>Logout </Text>
          </View>
          <Ionicons name="chevron-forward-outline" size={30} color="#000" />
        </>
      </TouchableHighlight>

    </View>
  )
}

export default Account

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    height: '17%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#F86D3B',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
    color: '#fff',
  },
  location: {
    color: '#DCDCDC',
  },
  logoContainer: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  options: {
    width: '90%',
    marginTop: 20,
    backgroundColor: 'red'
  },
  option: {
    width: '90%',
    backgroundColor: '#DCDCDC',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  child: {
    width: '40%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  optionTitle: {
    fontSize: 18,
    color: '#000',
  }
})