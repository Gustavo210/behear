import React, { useState } from 'react'
import { FlatList, Text } from 'react-native'
import Card from '../components/Card'
import api from '../services/api'
import { PropsItem } from '../contract'
import { useFocusEffect } from '@react-navigation/core'
export default function PaginaHome() {
    const [lista, setLista] = useState<PropsItem[]>([])

    useFocusEffect(() => {
        buscaDados()
    })

    const buscaDados = async () => {
        const response = await api.get("products/all")
        if (response.status === 200) {
            setLista(response.data)
        }
    }
    return (
        <FlatList
            data={lista}
            ListHeaderComponent={() => {
                return <Text style={{
                    fontSize: 25,
                    fontWeight: "600",
                    marginHorizontal: 20, marginTop: 20
                }}>✂️ Serviços</Text>
            }}
            keyExtractor={(item, index) => index.toString()}
            renderItem={(item) => <Card agendar {...item.item} />}
        />
    )
}
