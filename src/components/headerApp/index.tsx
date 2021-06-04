import React from 'react'
import { StackHeaderProps } from "@react-navigation/stack"
import { Feather } from '@expo/vector-icons'
import { Text, TouchableOpacity, View } from "react-native"
import { useNavigation } from '@react-navigation/core'
interface PropsHeaderApp extends StackHeaderProps {
    botaoVoltar?: boolean
    titulo?: string
    configuracoes: boolean
}

const HeaderApp: React.FC<PropsHeaderApp> = (props) => {
    const navigation = useNavigation()

    const navegaParaConfiguracoes = () => {
        navigation.navigate("PaginaConfiguracoes")
    }
    return (
        <View
            style={{
                height: 60,
                paddingHorizontal: 20,
                justifyContent: 'space-between',
                backgroundColor: '#0A3473',
                alignItems: 'center',
                flexDirection: 'row',
            }}
        >
            {props.botaoVoltar && (
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Feather name="arrow-left" color="#fff" size={25} />
                </TouchableOpacity>
            )}
            <Text style={{ color: '#fff' }}>{props.titulo}</Text>
            {props.configuracoes && (

                <TouchableOpacity onPress={navegaParaConfiguracoes}>
                    <Feather name="settings" color="#fff" size={25} />
                </TouchableOpacity>
            )}
        </View>
    )
}

export default HeaderApp
