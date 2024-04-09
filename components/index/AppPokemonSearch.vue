<script lang="ts" setup>
import * as _ from 'lodash'
const search = ref('')
const pokemonStore = usePokemonsStore()

watch(search,
    _.debounce(() => {
        pokemonStore.search = search.value
    }, 500)
)

</script>
<template>
    <div>
        <Input v-model:modelValue="search" placeholder="Search for a pokemon" :disabled="pokemonStore.isLoading"></Input>
    </div>
</template>