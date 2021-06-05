import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import PaginaDeApresentacao from '../pages/PaginaDeApresentacao'
import HeaderApp from '../components/headerApp'

const { Navigator, Screen } = createStackNavigator()

const RotasPublicas: React.FC = () => {
    return (
        <NavigationContainer>
            <Navigator>
                <Screen name="PaginaDeApresentacao"
                    options={{ header: props => <HeaderApp configuracoes={false} {...props} titulo="" /> }}
                    component={PaginaDeApresentacao} />
            </Navigator>
        </NavigationContainer>
    )
}

export default RotasPublicas
