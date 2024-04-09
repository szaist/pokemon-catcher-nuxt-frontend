<script lang="ts" setup>
const pokemonStore = usePokemonsStore()

const limitOptions = ["10", "15","20", "30", "50"]
const selectedLimit = ref("10")

watch(selectedLimit, () => {
    pokemonStore.pagination.limit = parseInt(selectedLimit.value)
}, {
    immediate: true
})
</script>

<template>
   <div>
        <Select v-model:model-value="selectedLimit">
            <SelectTrigger>
                <SelectValue placeholder="Select a type"/>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Limit per page</SelectLabel>
                    <SelectItem v-for="option in limitOptions" :value="option" >
                        {{ option }}
                    </SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    </div>
</template>