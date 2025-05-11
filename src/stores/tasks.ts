// stores/counter.js
import { defineStore } from "pinia"

export const useCounterStore = defineStore("counter", {
    state: () => {
        return { count: 0 }
    },
    // також може бути визначений як
    // state: () => ({ count: 0 })
    actions: {
        increment() {
            this.count++
        },
    },
})
