import React from 'react'
import { View , StyleSheet, TextInput,}  from 'react-native'
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons';

interface PropsBarraBusca {

    busca: string

}


const BarraBusca: React.FC<PropsBarraBusca> = (props) => {

    return(

        <View style={styles.viewTotal1}>
            <TextInput style={styles.viewPes} placeholder="Pesquisar"  placeholderTextColor="#0A3473">{props.busca}</TextInput>
            <TouchableOpacity>
            <Ionicons style={styles.icon2} name="search" size={32} color="green" />
            </TouchableOpacity>
        </View>

        )

}

export default BarraBusca

const styles = StyleSheet.create({

    viewTotal1:{
        height: 60,
        width: '90%',
        backgroundColor: '#EEF5FF',
        marginTop: 30,
        justifyContent: 'center',
        alignContent: "flex-end",
        flexDirection: "row",
        borderRadius: 30,
        elevation: 10,
        marginLeft:20,
        
    },

    icon2:{
        marginTop: 13,
        marginLeft: 10,
        color: "#0A3473", 
    },

    viewPes:{
        marginRight: '60%',
    },

})

