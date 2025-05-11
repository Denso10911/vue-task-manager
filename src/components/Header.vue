<script setup lang="ts">
import { RouterLink } from "vue-router"
import { ROUTE_PATH } from "../utils/routes"
</script>

<template>
    <nav class="fixed top-0 right-0 left-0 flex justify-center gap-4 p-4">
        <RouterLink :to="ROUTE_PATH.HOME">Home</RouterLink>
        <RouterLink :to="ROUTE_PATH.CREATE">Create</RouterLink>
    </nav>
</template>

<style scoped></style>
