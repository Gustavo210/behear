import React from 'react'
import MapView, { Marker } from 'react-native-maps';
import { Image, Linking, StyleSheet, Text, View } from 'react-native'
import { RectButton, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import mapMarkerImg from '../assets/mapMarker.png'
import { useRoute } from '@react-navigation/core';
import { PropsItem } from '../contract';

export default function PaginaFinal() {
    const route = useRoute()
    const { estabelecimento, latitude, longitude, preco, titulo, foto } = route.params as PropsItem

    function handleNavigateToLocalInGoogleMaps() {
        Linking.openURL(`https://www.google.com/maps/dir/?api=1&destination=${ latitude },${ longitude }`)

    }
    return (
        <View style={styles.container}>
            <View style={styles.detalhesDoItem}>
                <Image resizeMode="cover" source={{ uri: foto }} style={styles.imagem} />
                <View style={styles.detalhesTexto}>
                    <Text style={[styles.texto, styles.titulo]}>{titulo}</Text>
                    <Text style={styles.texto}>{estabelecimento}</Text>
                    <Text style={[styles.texto, styles.preco]}>R$ {preco.toFixed(2).toString().replace(".", ",")}</Text>
                </View>
            </View>
            <View style={styles.mapContainer}>

                <MapView
                    initialRegion={{
                        latitude,
                        longitude,
                        latitudeDelta: 0.008,
                        longitudeDelta: 0.008,
                    }}
                    zoomEnabled={false}
                    pitchEnabled={false}
                    scrollEnabled={false}
                    rotateEnabled={false}
                    style={styles.mapStyle}
                >
                    <Marker icon={mapMarkerImg} coordinate={{ latitude, longitude }} />
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
    detalhesDoItem: {
        flexDirection: "row",
        height: 110,
        padding: 5,
        alignItems: "center",
    },
    detalhesTexto: {
        flex: 1,
        height: "100%",
        paddingVertical: 5,
        paddingLeft: 5,
        justifyContent: "space-between",
    },
    imagem: {
        height: 100,
        width: 100
    },
    routesText: {
        color: '#0089a5'
    },
    texto: {
        fontSize: 15
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
    },
    preco: {
        fontSize: 25,
        fontWeight: "700",
        textAlign: "center"
    },
    titulo: {
        fontSize: 20,
        fontWeight: "500",
    }
})
