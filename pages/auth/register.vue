<script lang="ts" setup>
import {type LoginUserRequest } from '~/app/contracts/LoginUserRequest'
import type { RegisterUserRequest } from '~/app/contracts/RegisterUserRequest';

const authStore = useAuthStore()

const form = ref<RegisterUserRequest>({
    username: '',
    password: '',
    email: '',
    name: '',
})

const register = async () => {
  try {
    await authStore.register(form.value)
  } catch (error) {
    console.log(error);
  }
}
</script>
<template>
    <div>
        <div class="flex justify-center items-center h-screen">
            <Card class="w-[400px] p-4">
                <CardHeader>
                    <CardTile>
                        <h1 class="text-2xl font-semibold text-center">Register</h1>
                    </CardTile>

                </CardHeader>
                <form class="mt-4" @submit.prevent="register">
                    <div class="mb-4">
                        <label for="username">Username</label>
                        <Input v-model="form.username" id="username" name="username"/>
                    </div>
                    <div class="mb-4">
                        <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                        <Input type="password" v-model="form.password" id="password" name="password" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div class="mb-4">
                        <label for="email">Email</label>
                        <Input v-model="form.email" id="email" name="email"/>
                    </div>
                    <div class="mb-4">
                        <label for="name">Name</label>
                        <Input v-model="form.name" id="name" name="name"/>
                    </div>
                    <div class="flex justify-between items-center">
                        <nuxt-link to="/auth/login">Already have an account? Login here</nuxt-link>
                        <Button type="submit">Register</button>
                    </div>
                </form>
            </Card>
        </div>
    </div>
</template>