import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity, TouchableHighlight } from 'react-native'
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const PostDetail = ({ route }) => {

    const { image, description, location, title, navigation } = route.params

    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image} resizeMode='cover' />
            <View style={styles.info}>
                <Text style={styles.title} numberOfLines={1} >{title}</Text>
                <Text style={styles.description} numberOfLines={4} >{description}</Text>
                <Ionicons name="location-sharp" size={30} color="#000" />
                <Text style={styles.location} numberOfLines={2} >Location: {location}</Text>
                <View style={styles.poster}></View>
                <Pressable style={styles.mapContainer}>
                    <Ionicons name="location-sharp" size={30} color="#fff" />
                    <Text style={{ color: '#fff' }}>Show location on maps</Text>
                </Pressable>
                <View style={styles.contact}>
                    <MaterialIcons name="call" size={30} color="#F86D3B" />
                    <View style={styles.call}>
                        <Text>You can also call at</Text>
                        <Text>+92 3035676641</Text>
                    </View>
                </View>
            </View>
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
        // paddingHorizontal: 30,
        // paddingVertical: 30,
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
    }
})