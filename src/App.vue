<script>
import {
  BNavbar,
  BNavbarBrand,
  BCollapse,
  BNavbarNav,
  BNavItem,
  BNavbarToggle,
  BNavForm,
  BFormInput,
  BButton,
  BNavItemDropdown,
  BDropdownItem,
} from "bootstrap-vue";
import { obtenerDatoCookie } from "./utils";

export default {
  name: "App",
  components: {
    BNavbar,
    BNavbarBrand,
    BCollapse,
    BNavbarNav,
    BNavItem,
    BNavbarToggle,
    BNavForm,
    BFormInput,
    BButton,
    BNavItemDropdown,
    BDropdownItem,
  },
  data() {
    return {
      usuario: null,
      rol: null,
    };
  },
  created() {
    // Obtener el nombre del usuario de la cookie
    const usuario = obtenerDatoCookie("usuario");
    // Obtener el rol del usuario de la cookie
    const rol = obtenerDatoCookie("rol");

    // Si el usuario y el rol existen, asignarlos a las variables
    if (usuario && rol) {
      this.usuario = usuario;
      this.rol = rol;
    }
  },
};
</script>

<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand :to="{ name: 'home' }">Inicio</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item v-if="!usuario || !rol" :to="{ name: 'registro' }"
            >Registro</b-nav-item
          >
          <b-nav-item :to="{ name: 'panel-compras' }"
            >Panel de compras</b-nav-item
          >
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <div>
            <strong class="d-block text-white mr-2">{{ usuario }}</strong>
            <small class="d-block text-white mr-2">{{ rol }}</small>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <router-view></router-view>
  </div>
</template>
