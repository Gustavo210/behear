import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import Card from '../components/Card'
import { PropsItem } from '../contract'
import api from '../services/api'
import { Ionicons } from '@expo/vector-icons'

export default function PaginaPesquisa() {
    const [lista, setLista] = useState<PropsItem[]>([])
    const [pesquisa, setPesquisa] = useState('')


    const buscaDados = async () => {
        const response = await api.get(`products/search?search=${ pesquisa }`)
        if (response.status === 200) {
            setLista(response.data)
        }
    }
    return (<>
        <View style={styles.viewTotal1}>
            <TextInput
                style={styles.viewPes}
                value={pesquisa}
                placeholder="Pesquisar"
                placeholderTextColor="#0A3473"
                onChangeText={text => setPesquisa(text)}
            />
            <TouchableOpacity onPress={buscaDados}>
                <Ionicons style={styles.icon2} name="search" size={32} color="green" />
            </TouchableOpacity>
        </View>
        <FlatList
            data={lista}
            keyExtractor={(item, index) => index.toString()}
            renderItem={(item) => <Card agendar {...item.item} />}
        />
    </>
    )
}

const styles = StyleSheet.create({
    viewTotal1: {
        backgroundColor: '#EEF5FF',
        marginTop: 30,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 5,
        elevation: 2,
        padding: 5,
        marginHorizontal: 20,
        marginBottom: 30,
        height: 55
    },
    viewPes: {
        flex: 1,
        height: "100%"
    },
    icon2: {
        color: '#0A3473',
        height: "100%",
        padding: 5
    },
})
