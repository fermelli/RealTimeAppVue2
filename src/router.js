import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/Home.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/views/About.vue')
    },
    {
        path: '/registro',
        name: 'registro',
        component: () => import('@/views/Registro.vue')
    },
    {
        path: '/panel-compras',
        name: 'panel-compras',
        component: () => import('@/views/PanelCompras.vue')
    },
];

const router = new VueRouter({
    mode: 'history',
    base: '/',
    routes
});

export default router;