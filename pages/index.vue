<script lang="ts" setup>
import AppPokemonSearch from '~/components/index/AppPokemonSearch.vue'
import AppPokemonList from '~/components/index/AppPokemonList.vue'
import AppPokemonTypeSelector from '~/components/index/AppPokemonTypeSelector.vue'
import AppPokemonPaginator from '~/components/index/AppPokemonPaginator.vue'
import AppPokemonLimitSelector from '~/components/index/AppPokemonLimitSelector.vue'
import AppPokemonOwnedCheckbox from '~/components/index/AppPokemonOwnedCheckbox.vue'
import AppNavbar from '~/components/AppNavbar.vue'
</script>
<template>
    <AppNavbar />
    <div class="container pt-6">
        <div class="max-w-[800px] mx-auto mb-4">
            <h1 class="mr-auto text-3xl font-bold">Pokemons list</h1>
        </div>
        <div class="flex items-center max-w-[800px] mx-auto gap-4">
            <AppPokemonSearch  class="w-full"/>
            <AppPokemonOwnedCheckbox class="w-[350px]"/>
            <div class="w-[200px]">
                <AppPokemonTypeSelector />
            </div>
            <div>
                <AppPokemonLimitSelector />
            </div>
        </div>
        <AppPokemonList class="mt-4"/>
        <AppPokemonPaginator class="mt-4"/>
    </div>
</template>