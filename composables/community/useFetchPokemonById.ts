export const useFetchPokemonById = (id: string) => {
    return useCommunityFetch(`pokemon/${id}`)
}

