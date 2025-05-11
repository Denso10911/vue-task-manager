import { defineStore } from "pinia"
import { ROUTE_PATH } from "../utils/routes"

export const useTasksStore = defineStore("tasks", {
    state: () => {
        return { tasks: [] }
    },
    getters: {
        getTasks: state => state.tasks,
    },
    actions: {
        setTask(newTask) {
            this.tasks.push(newTask)
        },
    },
})
