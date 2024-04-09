export const useReleasePokemon = (pokemonId: string): Promise<void> => {
    return useApiFetch('/pokemon/release', {method: 'POST', body: { id: pokemonId }})
}