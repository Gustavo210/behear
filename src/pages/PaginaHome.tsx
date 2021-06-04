import React from 'react'
import { FlatList, Text } from 'react-native'
import Card from '../components/Card'

export default function PaginaHome() {
    const lista = [
        {
            estabelecimento: 'Barbearia São José',
            preco: 29.9,
            titulo: 'Corte Masculino',
            foto:
                'https://images.unsplash.com/photo-1519500528352-2d1460418d41?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFyYmVyJTIwc2hvcHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            latitude: -19.8631031,
            longitude: -44.9890204,
        },
        {
            estabelecimento: 'Barbearia São José',
            preco: 29.9,
            titulo: 'Corte Masculino',
            foto:
                'https://images.unsplash.com/photo-1519500528352-2d1460418d41?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFyYmVyJTIwc2hvcHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            latitude: -19.8631031,
            longitude: -44.9890204,
        },
        {
            estabelecimento: 'Barbearia São José',
            preco: 29.9,
            titulo: 'Corte Masculino',
            foto:
                'https://images.unsplash.com/photo-1519500528352-2d1460418d41?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFyYmVyJTIwc2hvcHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            latitude: -19.8631031,
            longitude: -44.9890204,
        },
        {
            estabelecimento: 'Barbearia São José',
            preco: 29.9,
            titulo: 'Corte Masculino',
            foto:
                'https://images.unsplash.com/photo-1519500528352-2d1460418d41?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFyYmVyJTIwc2hvcHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            latitude: -19.8631031,
            longitude: -44.9890204,
        },
    ]

    return (
        <FlatList
            data={lista}
            ListHeaderComponent={() => {
                return <Text>Serviços</Text>
            }}
            keyExtractor={(item, index) => index.toString()}
            renderItem={(item) => <Card agendar {...item.item} />}
        />
    )
}
