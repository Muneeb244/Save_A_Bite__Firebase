import React from 'react';
import {
  Button,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  View,
  Text,
  Dimensions,
} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function Users({
  users,
  onClickUser,
  userToAdd,
  setUserToAdd,
  onAddFriend,
}) {
  const renderUser = ({item}) => {
    return (
      <Pressable onPress={() => onClickUser(item)} style={styles.row} >
        <Image style={styles.avatar} source={{uri: item.avatar}} />
        <Text>{item.username}</Text>
      </Pressable>
    );
  };
  const handleBackPress = () => {
    navigation.goBack();
    return true;
  }
  return (
    <>
    <View style={styles.header}>
      <Text style={styles.text}>Your Contacts</Text>
    </View>
      <View style={styles.addUser}>
        <TextInput
          style={styles.input}
          onChangeText={setUserToAdd}
          value={userToAdd}
          placeholder='Search New Contacts'
          placeholderTextColor='black'
        />
        <Button title={'Add User'} onPress={() => onAddFriend(userToAdd)} color='#F86D3B'/>
      </View>
      <FlatList
        data={users}
        renderItem={renderUser}
        keyExtractor={item => item.username.toString()}
      />
    </>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  input: {
    width: '80%',
    alignSelf: 'center',
    height: '8%',
    fontSize: 15,
    borderColor: 'black',
    paddingLeft: 30,
    backgroundColor: '#fff',
    padding: 10,
    borderWidth: 1,
    borderRadius: 15,
    color: '#00437a',
  },
  text: {
    fontSize:22,
    fontWeight:'bold',
    color:'white'
  },
   header: {
    backgroundColor: '#F86D3B',
    height:windowHeight*0.09,
    width:windowWidth,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  row: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    borderBottomColor: '#cacaca',
    borderBottomWidth: 1,
  },
  addUser: {
    flexDirection: 'row',
    padding: 10,
  },
  input: {
    backgroundColor: '#cacaca',
    flex: 1,
    marginRight: 10,
    padding: 10,
  },
});
