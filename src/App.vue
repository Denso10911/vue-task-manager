<script setup lang="ts">
import { RouterView } from "vue-router"
import Header from "./components/Header.vue"
</script>

<template>
    <Header />
    <main class="w-full">
        <RouterView />
    </main>
</template>

<style scoped></style>
