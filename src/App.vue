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
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <router-view></router-view>
  </div>
</template>
