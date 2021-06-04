import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'

interface PropsBarraBusca {
    busca: string
}

const BarraBusca: React.FC<PropsBarraBusca> = (props) => {
    return (
        <View style={styles.viewTotal1}>
            <TextInput
                style={styles.viewPes}
                placeholder="Pesquisar"
                placeholderTextColor="#0A3473"
            >
                {props.busca}
            </TextInput>
            <TouchableOpacity>
                <Ionicons style={styles.icon2} name="search" size={32} color="green" />
            </TouchableOpacity>
        </View>
    )
}

export default BarraBusca

const styles = StyleSheet.create({
    viewTotal1: {
        height: 60,
        backgroundColor: '#EEF5FF',
        marginTop: 30,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 5,
        elevation: 2,
        padding: 5,
        marginHorizontal: 20,
        marginBottom: 30,
        flex: 1,
    },

    icon2: {
        color: '#0A3473',
        height: "100%",
        padding: 10
    },
    viewPes: {
        flex: 2,
    },
})
