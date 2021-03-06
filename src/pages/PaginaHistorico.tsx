import React, { useState } from 'react'
import { FlatList, Text } from 'react-native'
import storage from '@react-native-async-storage/async-storage'
import Card from '../components/Card'
import { PropsItem } from '../contract'
import api from '../services/api'
import { useFocusEffect } from '@react-navigation/core'

export default function PaginaHome() {
    const [lista, setLista] = useState<PropsItem[]>([])
    useFocusEffect(() => {
        buscaDados()
    })

    const buscaDados = async () => {
        const user = await storage.getItem("@User")
        if (user) {

            const { telefone } = JSON.parse(user)
            const response = await api.get(`reservations/${ telefone }`)
            if (response.status === 200) {
                setLista(response.data)
            }
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
                }}>📅 Histórico de agendamentos</Text>
            }}
            keyExtractor={(item, index) => index.toString()}
            renderItem={(item) => <Card {...item.item} />}
        />
    )
}
