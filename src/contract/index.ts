export interface PropsItem {
    foto?: string
    titulo: string
    estabelecimento: string
    preco: Number
    latitude: number
    longitude: number
}
export interface PropsItemAgendado {
    foto?: string
    titulo: string
    estabelecimento: string
    data?: Date
}

export interface PropsCard extends PropsItem, PropsItemAgendado {
    agendar?: boolean
}
