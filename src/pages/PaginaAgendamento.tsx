import React, { useState } from 'react'
import MapView, { Marker } from 'react-native-maps';
import { Image, Linking, StyleSheet, Text, View, Button, Platform, KeyboardAvoidingView, ActivityIndicator } from 'react-native'
import { RectButton, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { format } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import FeatherIcon from '@expo/vector-icons/Feather'

import DateTimePicker from '@react-native-community/datetimepicker';


import mapMarkerImg from '../assets/mapMarker.png'
import { useRoute } from '@react-navigation/core';
import { PropsItem } from '../contract';

type TypeDate = "date" | "time"

export default function PaginaFinal() {

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState<TypeDate>('date');
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);

    const onChange = (event: any, selectedDate: any) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode: TypeDate) => {
        setShow(true);
        setMode(currentMode);
    };


    const route = useRoute()
    const { estabelecimento, latitude, longitude, preco, titulo, foto, descricao } = route.params as PropsItem

    function handleNavigateToLocalInGoogleMaps() {
        Linking.openURL(`https://www.google.com/maps/dir/?api=1&destination=${ latitude },${ longitude }`)

    }

    const delay = async () => {
        return new Promise(function (resolve, reject) {
            setTimeout(resolve, 2000);
        })
    }
    async function agendaProduto() {
        if (loading) {
            return
        }
        setLoading(true)
        await delay()
        setLoading(false)
    }
    return (<>
        {show && (
            <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
            />
        )}
        <View style={styles.container}>
            <KeyboardAvoidingView behavior="position">


                <View style={styles.detalhesDoItem}>
                    <Image resizeMode="cover" source={{ uri: foto }} style={styles.imagem} />
                    <View style={styles.detalhesTexto}>
                        <Text style={[styles.texto, styles.titulo]}>{titulo}</Text>
                        <Text style={styles.texto}>{estabelecimento}</Text>
                        <Text style={[styles.texto, styles.preco]}>R$ {preco.toFixed(2).toString().replace(".", ",")}</Text>
                    </View>
                </View>
                <View style={styles.containerDescricao}>
                    <Text style={styles.tituloDescricao}>Descrição </Text>
                    <Text style={styles.descricao}>{descricao}</Text>
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
                <View style={styles.containerData}>
                    <View>
                        <TouchableOpacity style={styles.botaoMudaData} activeOpacity={1} onPress={() => showMode('date')}>
                            <FeatherIcon name="calendar" style={styles.iconeTextoBotaoData} />
                            <Text style={styles.textoBotaoData}>
                                {format(new Date(date), "d", { locale: ptBr })}
                                {" "}de{" "}
                                {format(new Date(date), "MMMM", { locale: ptBr })}
                                {" "}de{" "}
                                {format(new Date(date), "u", { locale: ptBr })}
                            </Text>
                        </TouchableOpacity>
                        <Text style={styles.labelSmall}>Mudar data</Text>
                    </View>
                    <View>

                        <TouchableOpacity style={styles.botaoMudaData} activeOpacity={1} onPress={() => showMode('time')}>
                            <FeatherIcon name="clock" style={styles.iconeTextoBotaoData} />
                            <Text style={styles.textoBotaoData}>
                                {format(new Date(date), "HH:mm", { locale: ptBr })}
                            </Text>
                        </TouchableOpacity>
                        <Text style={styles.labelSmall}>Mudar horário</Text>
                    </View>
                </View>
                <View>
                    <TextInput placeholder="Deixe aqui sua observação" style={styles.campoObservacao} />
                    <RectButton style={styles.estiloDoBotao} onPress={agendaProduto}>
                        {loading ? (
                            <ActivityIndicator color="#FFF" />

                        ) : (

                            <Text style={styles.estiloDoTextoDoBotao}>Agendar</Text>
                        )}
                    </RectButton>
                </View>
            </KeyboardAvoidingView>
        </View >
    </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 20
    },
    containerData: {
        marginTop: 10,
        borderRadius: 5,
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    },
    labelSmall: {
        fontSize: 11,
        color: "#999",
        textAlign: "center"
    },
    textoBotaoData: {
        fontSize: 15,
        marginLeft: 10
    },
    iconeTextoBotaoData: {
        fontSize: 15,
    },
    botaoMudaData: {
        backgroundColor: "#f1f1f1",
        paddingHorizontal: 35,
        paddingVertical: 10,
        borderColor: "#c4c4c4",
        borderWidth: 1,
        borderRadius: 2,
        flexDirection: "row"
    },
    containerDescricao: {
        marginTop: 10,
        backgroundColor: "#f1f1f1",
        borderRadius: 5,
        padding: 10
    },
    tituloDescricao: {
        fontSize: 13,
        fontWeight: "100",
        color: "#333"
    },
    descricao: {
        fontSize: 14,
        fontWeight: "100",
        color: "#333333cc"
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
        width: 100,
        borderRadius: 5,
        marginRight: 10
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
        marginTop: 20,
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
        padding: 10
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
