import { createRouter, createWebHistory } from "vue-router";
import Profile from "./components/pages/Profile.vue";
import Vacancies from "./components/pages/Vacancies.vue";

const routes = [
    { path: "/", component: Profile },
    { path: "/vacancies", component: Vacancies },
];

const history = createWebHistory();

const router = createRouter({
    history,
    routes,
});

export default router;