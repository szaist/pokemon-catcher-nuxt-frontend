export type PokePagination<T> = {
    count: number
    next?: string
    previous?: string
    results: Array<T>
}

export type Result = {
    name: string
    url: string
}

export type PaginationProps = {
    offset?: number
    limit?: number
}