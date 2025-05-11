<script setup lang="ts">
import { RouterView, RouterLink } from "vue-router"
import { ROUTE_PATH } from "./utils/routes"
</script>

<template>
    <h1>Hello App!</h1>
    <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
    <nav>
        <RouterLink :to="ROUTE_PATH.HOME">Go to Home</RouterLink>
        <RouterLink :to="ROUTE_PATH.CREATE">Create</RouterLink>
        <RouterLink :to="ROUTE_PATH.EDIT + '/1'">Edit</RouterLink>
        <RouterLink :to="ROUTE_PATH.EDIT + '/2'">Edit 2</RouterLink>
    </nav>
    <main>
        <RouterView />
    </main>
</template>

<style scoped></style>
