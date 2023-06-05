import Vue from "vue";
import VueRouter from "vue-router";
import { obtenerDatoCookie } from "./utils";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue"),
    props: true,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/About.vue"),
    props: true,
  },
  {
    path: "/registro",
    name: "registro",
    component: () => import("@/views/Registro.vue"),
    props: true,
  },
  {
    path: "/panel-compras",
    name: "panel-compras",
    component: () => import("@/views/PanelCompras.vue"),
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes,
});

// Guard para verificar si el usuario está registrado
router.beforeEach((to, from, next) => {
  // Obtener el nombre del usuario de la cookie
  const usuario = obtenerDatoCookie("usuario");
  // Obtener el rol del usuario de la cookie
  const rol = obtenerDatoCookie("rol");

  // Si el usuario no existe, redireccionar a la página de registro
  if ((!usuario || !rol) && to.name !== "registro") {
    return next({ name: "registro" });
  }

  // Si el usuario existe y está en la página de registro, redireccionar a la página de inicio
  if (usuario && rol && to.name === "registro") {
    return next({ name: "home" });
  }

  // Si el usuario existe y está en la página de inicio, redireccionar a la página de compras
  return next();
});

export default router;
