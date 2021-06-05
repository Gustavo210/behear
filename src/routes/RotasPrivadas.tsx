import React, { useContext, useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import storage from '@react-native-async-storage/async-storage'

import RouteTabs from './routeTabs'
import PaginaAgendamento from '../pages/PaginaAgendamento'
import PaginaConfiguracoes from '../pages/PaginaConfiguracoes'
import HeaderApp from '../components/headerApp'
import UserContext from '../context/UserContext'

const { Navigator, Screen } = createStackNavigator()

const RotasPrivadas: React.FC = () => {
    const { statusApp } = useContext(UserContext)
    const [nomeUser, setNomeUser] = useState("")
    useEffect(() => {
        ; (async () => {
            const userStorage = await storage.getItem("@User")
            if (userStorage) {
                const { nome } = JSON.parse(userStorage)
                setNomeUser(nome)
            }
            statusApp()
        })()
    }, [])
    return (
        <NavigationContainer>
            <Navigator>
                <Screen
                    options={{ header: props => <HeaderApp configuracoes titulo={nomeUser} {...props} /> }}
                    name="RouteTabs"
                    component={RouteTabs}
                />
                <Screen name="PaginaAgendamento"
                    options={{ header: props => <HeaderApp configuracoes botaoVoltar {...props} titulo={nomeUser} /> }}
                    component={PaginaAgendamento} />
                <Screen name="PaginaConfiguracoes"
                    options={{ header: props => <HeaderApp configuracoes={false} botaoVoltar {...props} titulo="" /> }}
                    component={PaginaConfiguracoes} />
            </Navigator>
        </NavigationContainer>
    )
}

export default RotasPrivadas
