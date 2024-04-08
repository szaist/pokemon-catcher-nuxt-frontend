<script lang="ts" setup>
import {type LoginUserRequest } from '~/app/contracts/LoginUserRequest'

const authStore = useAuthStore()

const form = ref<LoginUserRequest>({
  username: '',
  password: '',
})

const login = async () => {
  try {
    await authStore.login(form.value)

    navigateTo('/')
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
                        <h1 class="text-2xl font-semibold text-center">Login</h1>
                    </CardTile>

                </CardHeader>
                <form class="mt-4" @submit.prevent="login">
                    <div class="mb-4">
                        <label for="username">Username</label>
                        <Input v-model="form.username" id="username" name="username"/>
                    </div>
                    <div class="mb-4">
                        <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                        <Input type="password" v-model="form.password" id="password" name="password" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div class="flex justify-between items-center">
                        <nuxt-link to="/auth/register">Don't have an account? Register here</nuxt-link>
                        <Button type="submit">Login</button>
                    </div>
                </form>
            </Card>
        </div>
    </div>
</template>