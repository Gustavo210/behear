import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

export default function PaginaConfiguracoes() {

    return (
        <View style={styles.container}>
            <View style={styles.viewTitulo}>
                <Text style={styles.titulo}>Configurações</Text>
                <Text style={styles.subTitulo}>Defina seus dados.</Text>
            </View>
            <View style={styles.containerInput}>
                <Text style={styles.label}>Nome</Text>
                <TextInput placeholder="Nome" style={styles.input} />
            </View>
            <View style={styles.containerInput}>
                <Text style={styles.label}>Telefone</Text>
                <TextInput placeholder="Telefone" style={styles.input} />
            </View>
            <RectButton style={styles.botaoSalvar}>
                <Text style={styles.textoDoBotao}>Salvar</Text>
            </RectButton>
        </View>
    )
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 25
    },
    input: {
        backgroundColor: "#c1c1c199",
        height: 50,
        padding: 5,
        borderRadius: 5
    },
    botaoSalvar: {
        backgroundColor: "#0A3473",
        marginVertical: 10,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        borderRadius: 5
    },
    containerInput: {
        marginVertical: 20,

    },
    label: {
        fontSize: 13,
        fontWeight: "700"
    },
    textoDoBotao: {
        color: "#fff"
    },
    viewTitulo: {
        height: 100
    },
    titulo: {
        fontSize: 30,
        fontWeight: "700"
    },
    subTitulo: {
        fontSize: 15,
        fontWeight: "500"

    }
})
