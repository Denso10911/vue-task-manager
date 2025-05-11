<script setup lang="ts">
import { ref } from "vue"
import { useTasksStore } from "../stores/tasks.ts"
import { ROUTE_PATH } from "../utils/routes"
import { useRouter } from "vue-router"

const { setTask } = useTasksStore()
const router = useRouter()

const name = ref("")
const desc = ref("")
const deadline = ref<Date | null>(null)
const status = ref(0)

const submit = () => {
    const data = {
        name: name.value,
        desc: desc.value,
        deadline: deadline.value,
        status: status.value,
    }
    setTask(data)
    router.push(ROUTE_PATH.HOME)
}
</script>

<template>
    <form class="flex w-full flex-col gap-4">
        <input
            v-model="name"
            type="text"
            placeholder="Task name"
            class="border-b border-gray-700 py-2 outline-none"
        />
        <textarea
            v-model="desc"
            placeholder="Description"
            class="resize-none border-b border-gray-700 py-2 outline-none"
        />
        <input v-model="deadline" type="date" class="border-b border-gray-700 py-2 outline-none" />
        <select v-model="status" class="border-b border-gray-700 py-2 outline-none">
            <option value="0">Todo</option>
            <option value="1">In progress</option>
            <option value="2">Done</option>
        </select>
        <button type="button" @click="submit()">Submit</button>
    </form>
</template>

<style scoped></style>
