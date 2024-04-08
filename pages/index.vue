<script lang="ts" setup>
import AppPokemonSearch from '~/components/index/AppPokemonSearch.vue'
import AppPokemonList from '~/components/index/AppPokemonList.vue'
import AppPokemonTypeSelector from '~/components/index/AppPokemonTypeSelector.vue'

const authStore = useAuthStore()

</script>
<template>
    <div class="container pt-10">
        <div class="flex justify-end mb-4">
            <Button variant="destructive" @click="authStore.logout">Logout</Button>
        </div>
        <div class="flex justify-end">
            <AppPokemonSearch  class="w-[400px] mr-4"/>
            <div class="w-[200px]">
                <AppPokemonTypeSelector />
            </div>
        </div>
        <AppPokemonList class="mt-4"/>
    </div>
</template>