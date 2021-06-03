import { useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

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
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  estiloDoBotao: {
    marginTop: 500,
    height: 60,
    width: 260,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  estiloDoTextoDoBotao: {
    color: '#f1f1f1',
    
  },

  
})
