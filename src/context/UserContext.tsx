import React, { createContext, useState, useEffect } from 'react'
import storage from '@react-native-async-storage/async-storage'

const UserContext = createContext<{ status: TypeStatus, statusApp: () => void }>({} as { status: TypeStatus, statusApp: () => void })

type TypeStatus = "Privado" | "publico" | "carregando"
export const UserProvider: React.FC = ({ children }) => {
    const [status, setStatus] = useState<TypeStatus>("carregando")
    useEffect(() => {
        statusApp()
    }, [])

    const statusApp = async () => {
        const userStorage = await storage.getItem("@User")
        if (userStorage) {
            setStatus("Privado")
        } else {
            setStatus("publico")
        }
    }


    return (
        <UserContext.Provider value={{ status, statusApp }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext
