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



export default function PaginaInicial() {

  const [email, setEmail] = useState("")
  const [telefone, setTelefone] = useState("")
  const [nome, setNome] = useState("")
  const [cpf, setCpf] = useState("")
  const route = useNavigation()
  

  function navegaPaginaHome () {
    route.navigate("PaginaHome")
  }

  return (
    <View style={styles.container}>

      <Text style={styles.estiloDoTextoTitulo}>Formulário De Cadastro</Text>
      <TextInput style={styles.nome} onChangeText={value=>setNome(value)} placeholder={"Digite seu Nome"} />
      <TextInput style={styles.cpf} onChangeText={value=>setCpf(value)} placeholder={"Digite seu CPF"} keyboardType={'number-pad'} />
      <TextInput style={styles.telefone} onChangeText={value=>setTelefone(value)} placeholder={"Digite seu Telefone"} keyboardType={'number-pad'} />
      <TextInput style={styles.email} onChangeText={value=>setEmail(value)} placeholder={"Digite seu E-mail"} />
      <RectButton style={styles.estiloDoBotao} onPress={navegaPaginaHome}>
        <Text style={styles.estiloDoTextoDoBotao}>Cadastrar</Text>
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
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },

  estiloDoBotao: {
    marginTop: 30,
    height: 40,
    width: 150,
    backgroundColor: '#1E90FF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    textShadowColor:  '#f1f1f1',
  },

  estiloDoTextoDoBotao: {
    color: '#f1f1f1',
  },

  estiloDoTextoTitulo: {
    color: '#000000',
  },

})
