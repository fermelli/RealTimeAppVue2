<script>
import { BNavbar, BNavbarBrand, BCollapse, BNavbarNav, BNavItem, BNavbarToggle, BNavForm, BFormInput, BButton, BNavItemDropdown, BDropdownItem } from 'bootstrap-vue'

export default {
  name: 'App',
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
    }
  },
  created() {
    // Obtener el nombre del usuario de la cookie
    const usuario = this.obtenerDatoCookie('usuario');
    // Obtener el rol del usuario de la cookie
    const rol = this.obtenerDatoCookie('rol');

    // Si el usuario no existe, redireccionar a la página de registro
    if ((!usuario || !rol) && this.$route.name !== 'registro') {
      document.location.href = "/registro";
    }

    // Asignar el nombre del usuario
    this.usuario = usuario;
    // Asignar el rol del usuario
    this.rol = rol;
  },
  methods: {
    obtenerDatoCookie(nombre) {
      // Obtener todas las cookies
      const cookies = document.cookie.split(';');
      // Buscar la cookie por el nombre
      const cookie = cookies.find(cookie => cookie.trim().startsWith(nombre));
      // Si no existe la cookie, retornar null
      if (!cookie) return null;
      // Retornar el valor de la cookie
      return cookie.split('=')[1];
    },
  }
}
</script>

<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand :to="{ name: 'home' }">Inicio</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="{ name: 'registro' }">Registro</b-nav-item>
          <b-nav-item :to="{ name: 'panel-compras' }">Panel de compras</b-nav-item>
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
