export interface PropsItem {
    id: string
    photo?: string
    name: string
    establishment: string
    cost: Number
    description?: string
    latitude: number
    longitude: number
    data?: Date
}
export interface PropsItemAgendado {
    id: string
    photo?: string
    name: string
    establishment: string
    data?: Date
}

export interface PropsCard extends PropsItem, PropsItemAgendado {
    agendar?: boolean
}
