import type { UserPokemon } from "~/app/models/Pokemon";

export const useSortPokemons = (pokemons: Array<UserPokemon>, sortFieldValue: string) => {
    let list = pokemons

    switch(sortFieldValue){
        case '+name':
            list = list.sort((a, b) => a.name.localeCompare(b.name))
            break
        case '-name':
            list = list.sort((a, b) => b.name.localeCompare(a.name))
            break
        case '+weight':
            list = list.sort((a, b) => a.weight - b.weight)
            break
        case '-weight':
            list = list.sort((a, b) => b.weight - a.weight)
            break
        case '+height':
            list = list.sort((a, b) => a.height - b.height)
            break
        case '-height':
            list = list.sort((a, b) => b.height - a.height)
            break
    }

    return list
}