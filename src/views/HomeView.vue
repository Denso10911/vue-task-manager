<script setup lang="ts">
import { useCounterStore } from "../stores/tasks.ts"

const store = useCounterStore()
</script>

<template>
    <div class="flex rounded-lg border border-red-500 p-4">
        {{ store.count }}
        <button @click="store.increment()">inc</button>
    </div>
</template>

<style scoped></style>
