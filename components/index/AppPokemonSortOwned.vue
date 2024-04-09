<script lang="ts" setup>
import { ArrowUpIcon, ArrowDownIcon } from '@radix-icons/vue'
const pokemonStore = usePokemonsStore()

type SortOption = {
  label: string
  value: string
}

const sortOptions = ref<SortOption[]>([
  {
    label: 'Name',
    value: '+name',
  },
  {
    label: 'Name',
    value: '-name',
  },

  {
    label: 'Weight',
    value: '+weight',
  },
  {
    label: 'Weight',
    value: '-weight',
  },
  {
    label: 'Height',
    value: '+height',
  },
  {
    label: 'Height',
    value: '-height',
  },
])
</script>
<template>
  <Select
    v-model:model-value="pokemonStore.ownedSortFilter"
    :disabled="!pokemonStore.ownedFilter"
  >
    <SelectTrigger>
      <SelectValue placeholder="Sort"></SelectValue>
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <template v-for="option in sortOptions">
          <SelectItem
            as="div"
            class="flex items-center"
            :value="option.value"
          >
            <span class="inline-block w-[50px]">
              {{ option.label }}
            </span>
            <ArrowUpIcon
              v-if="option.value.startsWith('+')"
              class="inline-block"
            />
            <ArrowDownIcon
              v-if="option.value.startsWith('-')"
              class="inline-block"
            />
          </SelectItem>
        </template>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>
