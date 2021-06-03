import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { RectButton, TextInput } from 'react-native-gesture-handler'
import DescricaoEstabelecimento from '../components/DescricaoEstabelecimento'

export default function PaginaFinal() {
  const [contador, setContador] = useState(0)

  function somaMaisUm() {
    setContador(contador + 1)
  }

  const lista = [
    {
      estabelecimento: "Barbearia São José",
      preco: 29.9,
      titulo: "Corte Masculino",
      foto: "https://images.unsplash.com/photo-1519500528352-2d1460418d41?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFyYmVyJTIwc2hvcHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      estabelecimento: "Barbearia São José",
      preco: 29.9,
      titulo: "Corte Masculino",
      foto: "https://images.unsplash.com/photo-1519500528352-2d1460418d41?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFyYmVyJTIwc2hvcHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }

  ]

  return (
    <View style={styles.container}>    
    <View> 
      {lista.map((item, indice) => {
            return (

              <DescricaoEstabelecimento
                key={indice}
                estabelecimento={item.estabelecimento}
                preco={item.preco}
                titulo={item.titulo}
                foto={item.foto}
              />

            )

          })}

</View> 
    <View>
      <TextInput placeholder="Deixe aqui sua observação" style={styles.campoObservacao}/>

      
    
      <RectButton onPress={somaMaisUm} style={styles.estiloDoBotao}>
        <Text style={styles.estiloDoTextoDoBotao}>Agendar</Text>
      </RectButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  estiloDoBotao: {
    
    height: 60,
    width: 330,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  estiloDoTextoDoBotao: {
    color: '#f1f1f1',
    
  },

  campoObservacao: {
    
    marginTop: 270,
    backgroundColor: '#EEF5FF',
    height: 60,
    width: 330,
    borderRadius: 5,
    textAlign: 'center',
         
  }


})
