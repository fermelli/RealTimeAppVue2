<script>
import { BContainer, BRow, BCol } from "bootstrap-vue";
import productos from "@/productos.js";
import socket from "@/socket.js";

export default {
  name: "Producto",
  components: {
    BContainer,
    BRow,
    BCol,
  },
  props: {
    id: {
      type: [Number, String],
      required: true,
    },
  },
  data() {
    return {
      productos: productos,
    };
  },
  computed: {
    producto() {
      const productoId = parseInt(this.id);

      return this.productos.find((producto) => producto.id === productoId);
    },
  },
  methods: {
    comprar() {
      socket.emit("compra", {
        usuario: this.usuario,
        producto: this.producto,
      });
    },
  },
};
</script>

<template>
  <b-container>
    <b-row v-if="producto">
      <b-col cols="12">
        <h3 class="mt-4">{{ producto.nombre }}</h3>
      </b-col>

      <b-col cols="12" md="4">
        <img :src="`/imagenes/${producto.imagen}`" class="img-fluid w-100" />
      </b-col>

      <b-col cols="12" md="8">
        <p class="mt-4">{{ producto.descripcion }}</p>

        <p class="mt-4">
          {{ producto.descripcionLarga }}
        </p>

        <b-button variant="primary" @click="comprar">Comprar</b-button>
      </b-col>
    </b-row>

    <b-row v-else>
      <b-col cols="12">
        <h1 class="text-center mt-5">Producto no encontrado</h1>

        <router-link class="d-block text-center" to="/">
          Ir a la página principal
        </router-link>
      </b-col>
    </b-row>
  </b-container>
</template>