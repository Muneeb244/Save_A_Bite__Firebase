import { StyleSheet, Text, View, Modal, TouchableOpacity, PermissionsAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import MapView, {Marker, Circle } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const MapsModal = ({ setLatitude, setLongitude, setModalVisible, modalVisible, latitude, longitude }) => {

    const [draggable, setDraggable] = useState({
        latitude : 33.68569082450017,
        longitude : 73.04829455193457,
    });

    useEffect(() => {
        requestCameraPermission();
        // console.log(draggable);
    })


    const requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'Save a bite location Permission',
                    message:
                        'Save a bite needs access to your location ',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                // console.log('You can use the location');
            } else {
                alert('Please allow location permission');
                setModalVisible(!modalVisible);
            }
        } catch (err) {
            console.warn(err);
        }
    };

    const getLocation = () => {
        Geolocation.getCurrentPosition(
            (position) => {
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);
                setDraggable({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude})
                console.log(position.coords.latitude, position.coords.longitude);
            },
            (error) => {
                // See error code charts below.
                console.log(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    }



    const onRegionChange = (region) => {
        setLatitude(region.latitude);
        setLongitude(region.longitude);
        console.log(region.latitude, region.longitude);
    }

    return (
        <Modal
            animationType='slide'
            visible={modalVisible}
        >
            <MapView
            onRegionChangeComplete={draggable => setDraggable(draggable)}
                style={{ width: '100%', height: '100%' }}
                initialRegion={{
                    latitude: 33.68569082450017,
                    longitude: 73.04829455193457,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05,
                }}
            >
                <Marker
                    draggable
                    coordinate={draggable}
                    onDragEnd={(e) => setDraggable(e.nativeEvent.coordinate)}
                    // image={require('../assets/images/map_marker.png')}
                />
                <Circle
                    center={draggable}
                    radius={1000}
                />
            </MapView>
            <TouchableOpacity style={styles.locationBtn}>
                <MaterialIcons name="my-location" size={30} color="#fff" onPress={getLocation} />
            </TouchableOpacity>
            <AntDesign name="closecircle" size={30} color="#000" style={styles.closeIcon} onPress={() => setModalVisible(!modalVisible)} />
        </Modal>
    )
}

export default MapsModal

const styles = StyleSheet.create({
    locationBtn: {
        backgroundColor: '#F86D3B',
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
    closeIcon: {
        position: 'absolute',
        top: 20,
        right: 20,
    }
})