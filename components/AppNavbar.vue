<script setup lang="ts">
const authStore = useAuthStore()
</script>
<template>
    <nav class="flex justify-center items-center mb-4 w-full bg-muted-foreground/20 py-4 px-8">
        <div class="container flex items-center justify-center mx-auto">
            <div class="flex gap-6 flex-1">
                <nuxt-link variant="secondary" to="/" class="hover:bg-muted p-2 cursor-pointer font-bold rounded-md">Pokemons</nuxt-link>    
            </div>
            <Button variant="outline" @click="authStore.logout">Logout</Button>
        </div>
    </nav>
</template>