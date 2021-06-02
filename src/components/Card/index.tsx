import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { View , Image, Text, StyleSheet}  from 'react-native'
import { RectButton } from 'react-native-gesture-handler'


interface PropsCard {

    foto?: string
    titulo: string
    estabelecimento: string
    preco: Number

}


const Card: React.FC<PropsCard> = (props) => {
    
    const route = useNavigation()
        
    function navegaPaginaBusca () {
        route.navigate("navegaPaginaBusca")

}


    return(
        
    <View style={styles.view1}>
        <View>
            <Image style={styles.logo} source={{uri: props.foto}}/>
        </View>
        <View>
            <View>
                <Text style={styles.titulo}> {props.titulo}</Text>
            </View>
            <View>
                <Text style={styles.preco}>R$ {props.preco.toString().replace('.', ',')}</Text>
            </View>
            <View>
                <Text style={styles.estab}> {props.estabelecimento}</Text>
            </View>
            <RectButton style={styles.button1}>
                <Text style={styles.buttonText} onPress={navegaPaginaBusca} >Agendar</Text>
            </RectButton>
        </View>
        </View>  

    )
    
}


export default Card

const styles = StyleSheet.create({
  
    view1:{
        height: 120,
        width: '90%',
        backgroundColor: '#EEF5FF',
        borderRadius: 15,
        justifyContent: 'space-between',
        alignContent: "space-between",
        marginTop: 20,
        marginLeft: 20,
        elevation: 10,
    },
    
    logo:{
        height: 100,
        width: 100,
        borderRadius: 10,
        marginLeft: 10,
        marginTop: 10,
    },

    titulo:{
         marginTop: -112,
         color: '#000000',
         justifyContent: 'space-between',
         marginLeft: 120,
    },

    estab:{
         marginTop: -30,
         color: '#000000',
         justifyContent: 'space-between',
         marginLeft: 120,
    },

    preco:{
         marginTop: -70,
         color: '#000000',
         justifyContent: 'space-between',
         marginLeft: 125,
    },
    
    button1:{
        marginTop: -80,
        height: 40,
        width: 100,
        backgroundColor: '#0A3473',
        justifyContent: 'center',
        alignContent: "space-between",
        alignItems: 'center',
        borderRadius: 5,
        textShadowColor:  '#f1f1f1',
        elevation:20,
        marginLeft: 260,
    },

    buttonText:{
        color: "white",
    },

})