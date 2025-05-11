<script setup lang="ts">
import { watch } from "vue"
import { useRoute } from "vue-router"

const route = useRoute()

watch(
    () => route.params.id,
    (newId, oldId) => {
        console.log(newId, oldId)
    },
    {
        immediate: true,
    }
)
</script>

<template>
    <div class="flex rounded-lg border border-red-500 p-4">Edit</div>
</template>

<style scoped></style>
