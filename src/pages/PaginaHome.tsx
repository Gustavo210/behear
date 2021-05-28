import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Card from '../components/Card'
import BarraSup from '../components/BarraSup'


export default function PaginaHome() {

  const lista = [
    {
      estabelecimento: "Barbearia São José",
      preco: 29.9,
      titulo: "Corte Masculino",
      foto: "https://images.unsplash.com/photo-1519500528352-2d1460418d41?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFyYmVyJTIwc2hvcHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },

    {
      estabelecimento: "Barbearia Don Juan",
      preco: 25.9,
      titulo: "Corte Masculino + Barba",
      foto: "https://images.unsplash.com/photo-1587909209111-5097ee578ec3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmFyYmVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },

    {
      estabelecimento: "Barbearia Da Vânia",
      preco: 24.9,
      titulo: "Corte Feminino + Sombrancelha",
      foto: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU3fHxiYXJiZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },

    {
      estabelecimento: "Barbearia Do Luiz",
      preco: 29.9,
      titulo: "Corte Masculino + Sombrancelha",
      foto: "https://images.unsplash.com/photo-1510574843707-639843b2c406?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTY4fHxiYXJiZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },

    {
      estabelecimento: "Barbearia Do Paulo",
      preco: 20.9,
      titulo: "Alisamento Masculino",
      foto: "https://images.unsplash.com/photo-1589381855733-01bb5380dedf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFyYmVyJTIwbG9nb3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    
  ]

  return (

    <View>
      <BarraSup />
      {lista.map((item, indice) => {
        return (
          <>
          
          
          <Card
            key={indice}
            estabelecimento={item.estabelecimento}
            preco={item.preco}
            titulo={item.titulo}
            foto={item.foto}
          />  

          </>
        )

      })}

    </View>
  )
}


