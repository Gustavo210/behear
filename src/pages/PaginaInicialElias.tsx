import { useNavigation, useRoute } from '@react-navigation/core'
import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { RectButton, TextInput } from 'react-native-gesture-handler'


// const MeuComponente: React.FC = () => {
//   const [contador, setContador] = useState(0)
  
//   function somaMaisUm() {
//     setContador(contador + 1)
//   }

//   return ( 
//     <View>
//     <Text>Contador: {contador}</Text>
//     <RectButton onPress={somaMaisUm} style={styles.estiloDoBotao}>
//       <Text style={styles.estiloDoTextoDoBotao}>Somar</Text>
//     </RectButton>
//     </View>
//   )
// } 



export default function PaginaIniciaElias() {
  const [contador, setContador] = useState(0)

  const route= useNavigation()

  function somaMaisUm() {
    // setContador(contador + 1)
    route.navigate("PaginaAgendamento")
  }

  return (
    <View style={styles.container}>
      
      <RectButton onPress={somaMaisUm} style={styles.estiloDoBotao}>
        <Text style={styles.estiloDoTextoDoBotao}>Agendar</Text>
      </RectButton>

    </View>
  )
}

const styles = StyleSheet.create({

  email:{
    backgroundColor: "#F0F8FF",  
    height: 40,
    width: 300,
    marginTop: 30,
    borderRadius: 5,
  },

  nome:{
    backgroundColor: "#F0F8FF",  
    height: 40,
    width: 300,
    marginTop: 30,
    borderRadius: 5,
  },

  telefone:{
    backgroundColor: "#F0F8FF",  
    height: 40,
    width: 300,
    marginTop: 30,
    borderRadius: 5,
  },

  cpf:{
    backgroundColor: "#F0F8FF",  
    height: 40,
    width: 300,
    marginTop: 30,
    borderRadius: 5,
  },


  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },

  estiloDoBotao: {
    marginTop: 500,
    height: 60,
    width: 260,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    textShadowColor:  '#f1f1f1',
  },

  estiloDoTextoDoBotao: {
    color: '#f1f1f1',
    
  },

  
})
