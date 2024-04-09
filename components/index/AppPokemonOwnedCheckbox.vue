<script setup lang="ts">
const pokemonStore = usePokemonsStore()
</script>
<template>
    <div class="flex items-center">
        <Checkbox v-model:checked="pokemonStore.ownedFilter" id="ownedOnly" class="mr-2"/>
        <label for="ownedOnly">Show only catched</label>
    </div>
</template>