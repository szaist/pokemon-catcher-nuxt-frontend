<script lang="ts" setup>
const pokemonStore = usePokemonsStore()
</script>
<template>
    <div class="flex items-center justify-center space-x-4">
        <Button @click="() => pokemonStore.firstPage()" :disabled="pokemonStore.currentPage === 1">First</Button>
        <Button @click="() => pokemonStore.previousPage()" :disabled="pokemonStore.currentPage === 1">Previous</Button>
        <div>
            <span>Page {{ pokemonStore.currentPage }} of {{ pokemonStore.totalPages }}</span>
        </div>
        <Button @click="() => pokemonStore.nextPage()" :disabled="pokemonStore.currentPage === pokemonStore.totalPages">Next</Button>
        <Button @click="() => pokemonStore.lastPage()" :disabled="pokemonStore.currentPage === pokemonStore.totalPages">First</Button>

    </div>
</template>