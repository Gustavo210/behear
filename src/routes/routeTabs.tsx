import React, { useEffect, useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons, Feather } from '@expo/vector-icons'

import PaginaHome from '../pages/PaginaHome'
import PaginaPesquisa from '../pages/PaginaPesquisa'
import PaginaHistorico from '../pages/PaginaHistorico'
import { Keyboard } from 'react-native'

const { Navigator, Screen } = createBottomTabNavigator()

function RouteTabs() {
    return (
        <Navigator

            tabBarOptions={{
                style: {
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 64,
                },
                tabStyle: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                iconStyle: {
                    flex: 0,
                    width: 20,
                    height: 20,
                },
                labelStyle: {
                    display: 'none',
                },
                keyboardHidesTabBar: true,
                inactiveBackgroundColor: '#fafafc',
                activeBackgroundColor: '#ebebf5',
                inactiveTintColor: '#c1bccc',
                activeTintColor: '#32264d',
            }}
        >
            <Screen
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size, focused }) => {
                        return <Feather name="home" size={size} />
                    },
                }}
                name="PaginaHome"
                component={PaginaHome}
            />
            <Screen
                options={{
                    tabBarIcon: ({ color, size, focused }) => {
                        return <Feather name="search" size={size} />
                    },
                }}
                name="PaginaPesquisa"
                component={PaginaPesquisa}
            />
            <Screen
                options={{
                    tabBarLabel: 'PaginaHistorico',
                    tabBarIcon: ({ color, size, focused }) => {
                        return <Feather name="bookmark" size={size} />
                    },
                }}
                name="PaginaHistorico"
                component={PaginaHistorico}
            />
        </Navigator>
    )
}

export default RouteTabs
