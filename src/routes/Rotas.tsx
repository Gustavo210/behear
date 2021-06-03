import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import PaginaInicialElias from '../pages/PaginaInicialElias'
import PaginaAgendamento from '../pages/PaginaAgendamento'

const { Navigator, Screen } = createStackNavigator()

const Rotas: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="PaginaInicialElias" component={PaginaInicialElias} />
        <Screen name="PaginaAgendamento" component={PaginaAgendamento} />
      </Navigator>
    </NavigationContainer>
  )
}

export default Rotas
