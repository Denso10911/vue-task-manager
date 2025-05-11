import HomeView from "../../views/HomeView.vue"
import CreateView from "../../views/CreateView.vue"
import EditView from "../../views/EditView.vue"
import { createRouter, createWebHistory } from "vue-router"

export const ROUTE_PATH = {
    HOME: "/",
    CREATE: "/create",
    EDIT: "/edit",
}

const routes = [
    { path: ROUTE_PATH.HOME, component: HomeView },
    { path: ROUTE_PATH.CREATE, component: CreateView },
    { path: ROUTE_PATH.EDIT + "/:id", component: EditView },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
