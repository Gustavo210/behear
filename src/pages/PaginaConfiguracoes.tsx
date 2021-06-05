import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import storage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/core'

export default function PaginaConfiguracoes() {
    const [nomeStorage, setNomeStorage] = useState("")
    const [telefoneStorage, setTelefoneStorage] = useState("")
    const navigation = useNavigation()
    useEffect(() => {
        ; (async () => {
            const user = await storage.getItem("@User")
            if (user) {

                const { nome, telefone } = JSON.parse(user)
                setTelefoneStorage(telefone)
                setNomeStorage(nome)
            }
        })()
    }, [])

    const salvaDados = async () => {
        if (!nomeStorage) {
            alert("Preencha o nome")
            return
        }
        if (!telefoneStorage) {
            alert("Preencha o telefone")
            return
        }
        await storage.setItem("@User", JSON.stringify({ nome: nomeStorage, telefone: telefoneStorage }))
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <View style={styles.viewTitulo}>
                <Text style={styles.titulo}>Configurações</Text>
                <Text style={styles.subTitulo}>Defina seus dados.</Text>
            </View>
            <View style={styles.containerInput}>
                <Text style={styles.label}>Nome</Text>
                <TextInput placeholder="Nome" onChangeText={text => setNomeStorage(text)} value={nomeStorage} style={styles.input} />
            </View>
            <View style={styles.containerInput}>
                <Text style={styles.label}>Telefone</Text>
                <TextInput placeholder="Telefone" onChangeText={text => setTelefoneStorage(text)} value={telefoneStorage} style={styles.input} />
            </View>
            <RectButton style={styles.botaoSalvar} onPress={salvaDados}>
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
