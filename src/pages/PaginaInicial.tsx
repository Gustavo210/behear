import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

export default function PaginaInicial() {
  const [contador, setContador] = useState(0)

  function somaMaisUm() {
    setContador(contador + 1)
  }
  return (
    <View style={styles.container}>
      <Text>Este é um texto de exemplo, me modifique</Text>
      <Text>Contador: {contador}</Text>
      <RectButton onPress={somaMaisUm} style={styles.estiloDoBotao}>
        <Text style={styles.estiloDoTextoDoBotao}>Somar</Text>
      </RectButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  estiloDoBotao: {
    marginTop: 30,
    height: 40,
    width: 80,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  estiloDoTextoDoBotao: {
    color: '#f1f1f1',
  },
})
