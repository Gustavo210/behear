import React from 'react';
import {RectButton} from 'react-native-gesture-handler'
import {View,Text,Image,StyleSheet} from 'react-native'

interface PropsDescricaoEstabelecimento {

    foto?: string
    titulo: string
    estabelecimento: string
    preco: Number

}

const DescricaoEstabelecimento: React.FC<PropsDescricaoEstabelecimento>=props=>{

    return(

        <View style={styles.view1}>
            <Image style={styles.logo} source={{uri: props.foto}}/>
        
        <View style={styles.viewEstilo}>
                <Text style={styles.titulo}> {props.titulo}</Text>
                       
                <Text style={styles.preco}>R$ {props.preco.toString().replace('.', ',')}</Text>
            
                <Text style={styles.estab}> {props.estabelecimento}</Text>
            
            
        </View>
        </View>
    )
}



export default DescricaoEstabelecimento

const styles = StyleSheet.create({

    view1:{
        flexDirection:'row',
        backgroundColor: '#EEF5FF',
        borderRadius: 15,
        justifyContent: 'space-between',
        marginTop: 20,
        padding: 10,
        elevation: 10,
        alignItems: 'center',
       
        
    },

    viewImagem: {

       
    },

    viewEstilo: {
        width: 200,
        justifyContent: 'space-between',
        alignItems: 'center',
        
    },

    logo:{
        height: 100,
        width: 100,
        borderRadius: 10,
        
    },

    titulo:{
         
         color: 'black',
         
         
    },

    estab:{
         
         color: 'black',
         
         
    },

    preco:{
         
         color: 'black',
         
    },

})
