import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';  // Example default component
import ProjectsComponent from '../pages/Projects.vue';
import Contact from "@/pages/Contact.vue"; // Your component

const routes = [
    { path: '/', component: Home },
    { path: '/projects', component: ProjectsComponent },
    { path: '/contact', component: Contact }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;