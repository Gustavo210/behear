import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { PropsCard } from '../../contract'


const Card: React.FC<PropsCard> = (props) => {
    const route = useNavigation()

    function navegaPaginaBusca() {
        route.navigate('PaginaAgendamento', props)
    }

    return (
        <View style={styles.view1}>
            <Image style={styles.logo} source={{ uri: props.foto }} />
            {props.agendar ? (
                <>
                    <View style={styles.detalhes}>
                        <Text style={styles.texto}> {props.titulo}</Text>
                        <Text style={styles.texto}>
                            R$ {props.preco.toFixed(2).toString().replace('.', ',')}
                        </Text>
                        <Text style={styles.texto}> {props.estabelecimento}</Text>
                    </View>
                    <RectButton style={styles.button1}>
                        <Text style={styles.buttonText} onPress={navegaPaginaBusca}>Agendar</Text>
                    </RectButton>
                </>
            ) : (
                <View style={styles.detalhes}>
                    <Text style={styles.texto}> {props.titulo}</Text>
                    <Text style={styles.texto}> {props.estabelecimento}</Text>
                    <Text style={styles.texto}> {props.data}</Text>
                </View>
            )}
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    view1: {
        backgroundColor: '#EEF5FF',
        borderRadius: 5,
        padding: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 5,
        marginVertical: 10,
        elevation: 2,
        flex: 1,
    },
    detalhes: {
        justifyContent: 'space-between',
        height: '100%',
        marginHorizontal: 5,
        flex: 2,
    },
    button1: {
        flex: 1,
        marginRight: 5,
        height: 40,
        width: 100,
        backgroundColor: '#0A3473',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        textShadowColor: '#f1f1f1',
        elevation: 20,
    },
    logo: {
        height: 80,
        width: 80,
        borderRadius: 5,
    },
    texto: {
        color: '#000000',
    },
    buttonText: {
        color: 'white',
    },
})
