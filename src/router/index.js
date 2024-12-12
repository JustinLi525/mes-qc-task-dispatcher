import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DispatchRules from '../views/DispatchRules.vue';
import TaskDispatch from '../components/TaskDispatch.vue';
import ConfigTaskDispatcher from "@/views/ConfigTaskDispatcher.vue";

const routes = [
    { path: '/', name: 'HomeView', component: HomeView },
    { path: '/dispatch-rules', name: 'DispatchRules', component: DispatchRules },
    { path: '/task-dispatch', name: 'task-dispatch', component: TaskDispatch},
    { path: '/config-task-dispatch', name: 'TaskDispatcher', component: ConfigTaskDispatcher },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
