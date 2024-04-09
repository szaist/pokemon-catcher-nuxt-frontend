<script setup lang="ts">
const pokemonStore = usePokemonsStore()

const pokemonTypes = computed(() => {
    return pokemonStore.pokemonTypes.map(type => {
        return {
            label: type.name,
            value: type.url
        }
    })
})
</script>
<template>
    <div>
        <Select v-model:model-value="pokemonStore.selectedType">
            <SelectTrigger>
                <SelectValue placeholder="Select a type"/>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Type</SelectLabel>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem v-for="pType in pokemonTypes" :value="pType.value" >
                        {{ pType.label }}
                    </SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    </div>
</template>