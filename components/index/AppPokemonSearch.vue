<script lang="ts" setup>
const pokemonStore = usePokemonsStore()

</script>
<template>
    <div>
        <Input v-model:modelValue="pokemonStore.search" placeholder="Search for a pokemon"></Input>
    </div>
</template>