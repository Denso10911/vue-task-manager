<script setup lang="ts">
import { useTasksStore } from "../stores/tasks.ts"
import TaskCard from "../components/TaskCard.vue"
import { computed } from "vue"

const { getTasks } = useTasksStore()

const tasksList = computed(() => getTasks)
</script>

<template>
    Home

    <div
        v-if="tasksList.length"
        class="mx-auto grid w-full max-w-lg max-w-md grid-cols-3 gap-4 rounded-md border border-gray-500 p-4 shadow"
    >
        <div v-for="task in tasksList" :key="task.id">
            <TaskCard :task="task" />
        </div>
    </div>
</template>

<style scoped></style>
