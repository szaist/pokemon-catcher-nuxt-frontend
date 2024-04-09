export type PokePagination<T> = {
    count: number
    next?: string
    previous?: string
    results: Array<T>
}

export type PokeResult = {
    name: string
    url: string
}

export type PokePokemon = {
    id: number
    name: string
    height: number
    weight: number
    sprites: {
        front_default: string
    },
    abilities: {
        ability: {
            name: string
        },
        is_hidden: boolean
    }[],
}

export type PokePaginationProps = {
    offset?: number
    limit?: number
}