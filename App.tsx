import React from 'react'
import { StatusBar } from 'react-native'
import Rotas from './src/routes/Rotas'

export default function App() {
  return (
    <>
      <Rotas />
      <StatusBar barStyle="light-content" backgroundColor="#0A3473" />
    </>
  )
}
