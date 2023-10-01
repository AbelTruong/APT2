export type Objectable = {
    [key: string]: any
}

export type Iconable = {
    onClick?: any | undefined
    style?: Objectable | undefined
    fill?: string | undefined
    stroke?: string | undefined
    className?: string | undefined
}
