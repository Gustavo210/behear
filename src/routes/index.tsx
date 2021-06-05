import React, { useContext } from 'react'
import AppLoading from 'expo-app-loading';
import RotasPrivadas from './RotasPrivadas';
import RotasPublicas from './RotasPublica';
import UserContext from '../context/UserContext';

const Rotas: React.FC = () => {
    const { status } = useContext(UserContext)
    if (status === "Privado") {
        return <RotasPrivadas />
    }
    if (status === "publico") {
        return <RotasPublicas />
    }
    return <AppLoading />
}

export default Rotas
