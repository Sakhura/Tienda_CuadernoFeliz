<template>
   <v-container>
    <v-row>
      <v-col 
        v-for="(producto, index) in productos"
        :key="index"
        cols="12"
        md="5"
      >
        <v-card class="product-card">
          <v-img :src="producto.url" height="400px" width="fit-content"></v-img>
          <v-card-title>{{ producto.name }}</v-card-title>
          <v-card-subtitle>
            <ul>
              <li>{{ producto.description }}</li>
            <br>
              <li><h2> <strong>{{ producto.precio }}</strong></h2></li>
            </ul>
          </v-card-subtitle>
          <v-card-actions>
            <v-btn class="white--text" color="#BA68C8" @click="ver(index)">Ver</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
 import { mapState } from 'vuex';
export default {
    name: 'ProductosComponent',
  data() {
    return {
     
    }
  },
  computed: {
    ...mapState({
      productos: state => state.productos // Mapea el estado de productos
    }),
  },
  methods: {
    ver(id){
      this.$router.push(`/productos/${id}`)
    },
  },
 

}
</script>

<style scoped>
.product-card {
background-color: #E1BEE7;
color: white;
}
ul{
    list-style: none;
    color: white;
    margin: 0;
    padding: 0;
}

</style>