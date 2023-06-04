import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity, TouchableHighlight, BackHandler } from 'react-native'
import React, { useEffect, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import firestore from '@react-native-firebase/firestore';
import MapsModal from '../../components/MapsModal';
import Geolocation from 'react-native-geolocation-service';
import { useNavigation } from '@react-navigation/native';


const PostDetail = ({ route }) => {

    const navigation = useNavigation();

    const [user, setUser] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [presentLocation, setPresentLocation] = useState("");


    const {pid, image, description, location, title, email, contact, coordinates } = route.params;

    const getData = async () => {
        try {
            await firestore().collection('users').where("email", "==", email).get()
                .then((querySnapshot) => {
                    setUser(querySnapshot.docs[0].data());
                }).catch((error) => {
                    console.log("Error getting documents: ", error);
                });
        } catch (error) {
            alert("Error getting profile data");
            console.log("Error from account", error);
        }
    }


    const currentLocation = () => {
        Geolocation.getCurrentPosition(
            (position) => {
                setPresentLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                });
            },
            (error) => {
                console.log(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    }


    const handleBackPress = () => {
        navigation.goBack();
        return true;
    }

    useEffect(() => {
        currentLocation();
        getData();
        BackHandler.addEventListener("hardwareBackPress", handleBackPress);
        return () => {
            BackHandler.removeEventListener("hardwareBackPress", handleBackPress);
        }
    }, [])

    return (
        <View style={styles.container}>
            <Image source={{ uri: image }} style={styles.image} resizeMode='cover' />
            <View style={styles.info}>
                <Text style={styles.title} numberOfLines={1} >{title}</Text>
                <Text style={styles.description} numberOfLines={4} >{description}</Text>
                <Ionicons name="location-sharp" size={30} color="#000" />
                <Text style={styles.location} numberOfLines={2} >Location: {location}</Text>
                <View style={styles.poster}>
                    <Image source={user.imageURL ? { uri: user.imageURL } : require('../../assets/temp_images/girl.png')} style={styles.userImage} />
                    <View style={{ marginLeft: 7 }}>
                        <Text style={styles.name}>{user.fname ? user.fname + " " + user.lname : "user"}</Text>
                        <Text style={styles.address}>{user.address ? user.address + ", " + user.city : "No address"}</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.mapContainer} onPress={() => setModalVisible(true)}>
                    <Ionicons name="location-sharp" size={30} color="#fff" />
                    <Text style={{ color: '#fff' }}>Show location on maps</Text>
                </TouchableOpacity>
                <View style={styles.contact}>
                    <MaterialIcons name="call" size={30} color="#F86D3B" />
                    <View style={styles.call}>
                        <Text>You can also call at</Text>
                        <Text>{contact.replace(0, "+92 ")}</Text>
                    </View>
                </View>
            </View>
            {presentLocation ? <MapsModal modalVisible={modalVisible} setModalVisible={setModalVisible} PolyCoordinates={coordinates} presentLocation={presentLocation} /> : ""}
            <TouchableOpacity
                style={styles.requestContainer}
                onPress={() => navigation.navigate('Send Request', { email, pid })}
            >
                <AntDesign name="arrowright" size={30} color="#fff" />
            </TouchableOpacity>
        </View>
    )
}

export default PostDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '50%',
    },
    info: {
        width: '100%',
        height: '65%',
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        padding: 30,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: "#000",
        marginBottom: 7,
    },
    description: {
        fontSize: 12,
        marginBottom: 10,
    },
    location: {
        fontSize: 12,
        color: '#000',
    },
    poster: {
        width: '100%',
        height: 50,
        backgroundColor: '#C8C8C8',
        borderRadius: 10,
        marginTop: 20,
        overflow: 'hidden',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    mapContainer: {
        width: '100%',
        height: 40,
        backgroundColor: '#F86D3B',
        borderRadius: 10,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    call: {
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contact: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        justifyContent: 'center',
    },
    userImage: {
        height: 38,
        width: 38,
        borderRadius: 19,
    },
    name: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
    },
    address: {
        fontSize: 12,
        color: '#808080',
    },
    requestContainer: {
        height: 60,
        width: 60,
        borderRadius: 30,
        backgroundColor: '#F86D3B',
        position: 'absolute',
        bottom: 20,
        right: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    requestText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
})