import React from 'react'
import MapView, { Marker } from 'react-native-maps';
import { Linking, StyleSheet, Text, View } from 'react-native'
import { RectButton, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import mapMarkerImg from '../assets/mapMarker.png'

export default function PaginaFinal() {

    function handleNavigateToLocalInGoogleMaps() {
        Linking.openURL(`https://www.google.com/maps/dir/?api=1&destination=${ -19.8631031 },${ -44.9890204 }`)

    }
    return (
        <View style={styles.container}>
            <View style={styles.mapContainer}>

                <MapView
                    initialRegion={{
                        latitude: -19.8631031,
                        longitude: -44.9890204,
                        latitudeDelta: 0.008,
                        longitudeDelta: 0.008,
                    }}
                    zoomEnabled={false}
                    pitchEnabled={false}
                    scrollEnabled={false}
                    rotateEnabled={false}
                    style={styles.mapStyle}
                >
                    <Marker
                        icon={mapMarkerImg}
                        coordinate={{
                            latitude: -19.8631031,
                            longitude: -44.9890204
                        }}
                    />
                </MapView>
                <TouchableOpacity onPress={handleNavigateToLocalInGoogleMaps} style={styles.routesContainer}>
                    <Text style={styles.routesText}>Ver rotas no Google Maps</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TextInput placeholder="Deixe aqui sua observação" style={styles.campoObservacao} />
                <RectButton style={styles.estiloDoBotao}>
                    <Text style={styles.estiloDoTextoDoBotao}>Agendar</Text>
                </RectButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 20
    },
    routesContainer: {
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    estiloDoBotao: {

        height: 60,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    routesText: {
        color: '#0089a5'
    },
    estiloDoTextoDoBotao: {
        color: '#f1f1f1',
        fontSize: 15,
        fontWeight: "700"
    },
    mapContainer: {
        borderRadius: 5,
        overflow: 'hidden',
        borderWidth: 1.2,
        borderColor: '#B3DAE2',
        marginTop: 40,
        backgroundColor: '#E6F7FB',
    },
    mapStyle: {
        width: '100%',
        height: 150,
    },
    campoObservacao: {

        backgroundColor: '#EEF5FF',
        height: 60,
        borderRadius: 5,
        marginVertical: 20,
        textAlign: 'center',

    }


})
