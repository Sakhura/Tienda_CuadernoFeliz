<template>
  <v-app>
    <v-app-bar color="#B39DDB" dark app>
      <v-img
        src="@/assets/logo.jpg" 
        alt="Logo"
        max-width="60px" 
        class="mr-3" 
      ></v-img>
      
      <v-btn text @click="$router.push('/')">Home</v-btn>
      <v-btn text @click="$router.push('/productos')">Productos</v-btn>
      <v-spacer></v-spacer>
      <v-btn text @click="$router.push('/carrito')"><i class="fa-solid fa-cart-shopping fa-2xl"></i>  Carrito</v-btn>
      <v-btn text @click="$router.push('/login')"><i class="fa-solid fa-user fa-2xl"></i>  Iniciar Sesión</v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
    <v-footer color="#B39DDB" dark>
      <v-container>
        <v-row  >
          <v-col align="center">
            <v-btn icon @click="goToInstagram">
              <v-icon>mdi-instagram</v-icon>
            </v-btn>
            <v-btn icon @click="goToWhatsApp">
              <v-icon>mdi-whatsapp</v-icon>
            </v-btn>
            <v-btn icon @click="goToAddress">
              <v-icon>mdi-map-marker</v-icon>
            </v-btn>
            <p>Dirección: Calle Falsa 123, Ciudad Imaginaria</p>
         
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
