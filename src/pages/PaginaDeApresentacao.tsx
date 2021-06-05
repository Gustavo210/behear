import React, { useContext, useState } from 'react'
import { StyleSheet, Text, TextInput, View } from "react-native"
import { RectButton } from 'react-native-gesture-handler'
import storage from '@react-native-async-storage/async-storage'
import UserContext from '../context/UserContext'

const PaginaDeApresentacao: React.FC = () => {
    const { statusApp } = useContext(UserContext)
    const [nome, setNome] = useState("")
    const [telefone, setTelefone] = useState("")

    const navegaParaAHome = async () => {
        if (!nome) {
            alert("Preencha o nome")
            return
        }
        if (!telefone) {
            alert("Preencha o telefone")
            return
        }
        await storage.setItem("@User", JSON.stringify({ nome, telefone }))
        statusApp()
    }
    return (
        <View style={styles.container}>

            <View style={styles.apresentacao}>
                <Text style={styles.titulo}>Bem vindo ao BeHair</Text>
                <Text style={styles.subtitulo}>Antes de iniciar precisamos de algumas informações sobre você</Text>
            </View>
            <View style={styles.dados}>
                <View style={styles.containerInput}>
                    <Text style={styles.label}>Nome</Text>
                    <TextInput placeholder="Nome" value={nome} onChangeText={text => setNome(text)} style={styles.input} />
                </View>
                <View style={styles.containerInput}>
                    <Text style={styles.label}>Telefone</Text>
                    <TextInput autoCompleteType="tel" dataDetectorTypes="phoneNumber" textContentType="telephoneNumber" keyboardType="phone-pad" placeholder="Telefone" value={telefone} onChangeText={text => setTelefone(text)} style={styles.input} />
                </View>
                <RectButton style={styles.botaoSalvar} onPress={navegaParaAHome}>
                    <Text style={styles.textoDoBotao}>Iniciar</Text>
                </RectButton>
            </View>
        </View>
    )
}

export default PaginaDeApresentacao


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#0A3473",
        paddingHorizontal: 20
    },
    apresentacao: {
        flex: 2,
        paddingTop: 20
    },
    dados: {
        flex: 2,
        justifyContent: "flex-end",
        paddingBottom: 20
    },
    input: {
        backgroundColor: "#dde7f8",

        height: 50,
        padding: 5,
        borderRadius: 5
    },
    label: {
        fontSize: 13,
        fontWeight: "700",
        marginBottom: 10,
        color: "#fff"
    },
    containerInput: {
        marginVertical: 10,

    },
    botaoSalvar: {
        backgroundColor: "#04BF58",
        marginVertical: 10,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        borderRadius: 5,
        marginTop: 30
    },
    textoDoBotao: {
        color: "#fff"
    },
    titulo: {
        fontSize: 40,
        color: "#eff4fc"
    },
    subtitulo: {
        fontSize: 20,
        color: "#cbe0ff"
    }
})
