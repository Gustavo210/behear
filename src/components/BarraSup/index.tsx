import React from 'react'
import { View , Image, Text, StyleSheet}  from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons';


interface PropsBarraSup {

    nome: string

}


const BarraSup: React.FC<PropsBarraSup> = (props) => {

    return(

        <View style={styles.Barra1}>
            <Text style={styles.nome1}>{props.nome}</Text>
            <Ionicons style={styles.icon1} name="menu" size={32} color="green" />
        </View>  

    )

}

export default BarraSup

const styles = StyleSheet.create({

    Barra1:{
        height: 60,
        width: '100%',
        backgroundColor: '#0A3473',
        marginTop: 30,
        justifyContent: 'flex-end',
        alignContent: "flex-end",
        flexDirection: "row",
        borderRadius: 3,
        elevation: 10,
    },

    nome1:{
        marginTop: 20,
        marginRight: 5,
        color: "white",   
    },

    icon1:{
        marginTop: 15,
        marginRight: 20,
        color: "white",  
    },

})

