import { StyleSheet, Text, View, Modal, TouchableOpacity, PermissionsAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import MapView, { Marker, Circle, Polyline } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { decode } from "@mapbox/polyline";

const MapsModal = ({ setLatitude, setLongitude, setModalVisible, modalVisible, PolyCoordinates, presentLocation }) => {

    const mapRef = React.useRef(null);
    const [draggable, setDraggable] = useState("");

    const [coords, setCoords] = useState([]);

    useEffect(() => {
        requestCameraPermission();
        {
            PolyCoordinates && presentLocation ? getDirections(PolyCoordinates.latitude + "," + PolyCoordinates.longitude, presentLocation.latitude + "," + presentLocation.longitude)
                .then(coords => setCoords(coords))
                .catch(err => console.log("Something went wrong")) : ""
        }
    }, [])


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
                    longitude: position.coords.longitude
                })

                mapRef.current.animateToRegion({
                    ...draggable,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.1
                })

            },
            (error) => {
                // See error code charts below.
                console.log(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    }


    const getDirections = async (startLoc, destinationLoc) => {
        try {
              const KEY = "YOUR GOOGLE API KEY"; //put your API key here.
            //otherwise, you'll have an 'unauthorized' error.
            let resp = await fetch(
                `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destinationLoc}&key=${KEY}`
            );
            let respJson = await resp.json();
            let points = decode(respJson.routes[0].overview_polyline.points);
            let coords = points.map((point, index) => {
                return {
                    latitude: point[0],
                    longitude: point[1]
                };
            });
            return coords;
        } catch (error) {
            return error;
        }
    };



    return (
        <Modal
            animationType='slide'
            visible={modalVisible}
        >
            <MapView
                ref={mapRef}
                style={{ width: '100%', height: '100%' }}
                initialRegion={{
                    latitude: 33.68569082450017,
                    longitude: 73.04829455193457,
                    latitudeDelta: 0.12,
                    longitudeDelta: 0.12,
                }}
            >

                {PolyCoordinates ?
                    <>
                        <Marker coordinate={presentLocation} />
                        <Marker coordinate={PolyCoordinates} />
                    </>
                    :
                    <>
                        <Marker
                            draggable
                            coordinate={draggable ? draggable : {
                                latitude: 33.68569082450017,
                                longitude: 73.04829455193457,
                            }}
                            onDragEnd={(e) => setDraggable(e.nativeEvent.coordinate)}
                        />
                        <Circle
                            center={draggable ? draggable : {
                                latitude: 33.68569082450017,
                                longitude: 73.04829455193457,
                            }}
                            radius={1000}
                        />
                    </>
                }
                {coords.length > 0 && <Polyline
                    coordinates={coords}
                    strokeColor="red"
                    strokeWidth={7}
                />}
            </MapView>
            {PolyCoordinates ? "" : <TouchableOpacity style={styles.locationBtn}>
                <MaterialIcons name="my-location" size={30} color="#fff" onPress={getLocation} />
            </TouchableOpacity>}
            <AntDesign name="closecircle" size={30} color="#000" style={styles.closeIcon} onPress={() => setModalVisible(false)} />
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