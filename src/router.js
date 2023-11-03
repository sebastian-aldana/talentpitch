import { createRouter, createWebHistory } from "vue-router";
import Profile from "./components/pages/Profile.vue";
import Vacancies from "./components/pages/Vacancies.vue";
import Home from "./components/pages/Home.vue";
import Connect from './components/pages/Connect.vue';
import Learn from './components/pages/Learn.vue';
import List from './components/pages/List.vue';
import Wall from './components/pages/Wall.vue';

const routes = [
    { path: "/", component: Home, name: "home" },
    { path: "/profile", component: Profile, name: "profile" },
    { path: "/vacancies", component: Vacancies, name: "vacancies" },
    { path: "/connect", component: Connect, name: "connect" },
    { path: "/wall", component: Wall, name: "wall" },
    { path: "/list", component: List, name: "list" },
    { path: "/learn", component: Learn, name: "learn" },
];

const history = createWebHistory();

const router = createRouter({
    history,
    routes,
});

export default router;