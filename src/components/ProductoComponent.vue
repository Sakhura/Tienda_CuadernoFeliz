<template>
    <v-container>
      <v-card v-if="producto" class="product-card">
        <v-img :src="producto.url" height="400px" width="fit-content"></v-img>
        <v-card-title>{{ producto.name }}</v-card-title>
        <v-card-subtitle>
          <ul>
            <li>{{ producto.description }}</li>
            <br>
            <li><h2><strong>{{ producto.precio }}</strong></h2></li>
          </ul>
        </v-card-subtitle>
        <v-card-actions>
          <v-btn class="white--text" color="#BA68C8" @click="ver(index)">Ver</v-btn>
        </v-card-actions>
      </v-card>
      <v-card v-else>
        <v-card-title>No se encontró el producto.</v-card-title>
      </v-card>
    </v-container>
  </template>
  
  <script>
  import { mapGetters } from 'vuex';
  
  export default {
    name: 'ProductoComponent',
    data() {
      return {
        id: null,
      };
    },
    computed: {
      ...mapGetters({
        getProductoById: 'getProductoById' // Mapea el getter
      }),
      producto() {
        return this.getProductoById(this.id + 1); // Usa el getter mapeado
      },
    },
    created() {
      this.id = Number(this.$route.params.id); // Asegúrate de convertir a número
      console.log(this.id); // Verifica el ID
    },
  };
  </script>
  
  <style scoped>
  .product-card {
    background-color: #E1BEE7;
    color: white;
  }
  ul {
    list-style: none;
    color: white;
    margin: 0;
    padding: 0;
  }
  </style>