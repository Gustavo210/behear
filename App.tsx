import React from 'react'
import { StatusBar } from 'react-native'
import { UserProvider } from './src/context/UserContext'
import Rotas from './src/routes'

export default function App() {
    return (
        <UserProvider>
            <Rotas />
            <StatusBar barStyle="light-content" backgroundColor="#0A3473" />
        </UserProvider>
    )
}
