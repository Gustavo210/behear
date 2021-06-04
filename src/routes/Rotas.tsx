import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import RouteTabs from './routeTabs'
import PaginaAgendamento from '../pages/PaginaAgendamento'
import PaginaConfiguracoes from '../pages/PaginaConfiguracoes'
import HeaderApp from '../components/headerApp'

const { Navigator, Screen } = createStackNavigator()

const Rotas: React.FC = () => {
    return (
        <NavigationContainer>
            <Navigator>
                <Screen
                    options={{ header: props => <HeaderApp configuracoes titulo="Nome de usuário" {...props} /> }}
                    name="RouteTabs"
                    component={RouteTabs}
                />
                <Screen name="PaginaAgendamento"
                    options={{ header: props => <HeaderApp configuracoes botaoVoltar {...props} titulo="Nome de usuário" /> }}
                    component={PaginaAgendamento} />
                <Screen name="PaginaConfiguracoes"
                    options={{ header: props => <HeaderApp configuracoes={false} botaoVoltar {...props} titulo="" /> }}
                    component={PaginaConfiguracoes} />
            </Navigator>
        </NavigationContainer>
    )
}

export default Rotas
