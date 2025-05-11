<script setup lang="ts">
defineProps({
    task: Object,
})
</script>

<template>
    <div>
        <div>
            {{ task.name }}
        </div>
        <div>
            {{ task.deadline }}
        </div>
        <div>
            {{ task.desc }}
        </div>
    </div>
</template>

<style scoped></style>
