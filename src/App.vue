<template>
  <v-app>
    <v-app-bar color="#B39DDB" dark app>
      <v-app-bar-nav-icon @click="drawer = !drawer" class="d-lg-none"></v-app-bar-nav-icon>
      
      <v-img 
        src="@/assets/logo.jpg" 
        alt="Logo"
        max-width="60px" 
        class="mr-3" 
        @click="$router.push('/')"
      ></v-img>

      <!-- Ocultar botones en pantallas pequeñas -->
      <v-btn class="d-none d-lg-flex" text @click="$router.push('/')">Home</v-btn>
      <v-btn class="d-none d-lg-flex" text @click="$router.push('/productos')">Productos</v-btn>
      <v-spacer></v-spacer>
      <v-btn class="d-none d-lg-flex" text @click="$router.push('/carrito')">
        <i class="fa-solid fa-cart-shopping fa-2xl"></i> Carrito
      </v-btn>
      <v-btn class="d-none d-lg-flex" text @click="$router.push('/login')">
        <i class="fa-solid fa-user fa-2xl"></i> Iniciar Sesión
      </v-btn>
    </v-app-bar>

    <!-- Drawer para navegación móvil -->
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list>
        <v-list-item @click="$router.push('/')">Home</v-list-item>
        <v-list-item @click="$router.push('/productos')">Productos</v-list-item>
        <v-list-item @click="$router.push('/carrito')">Carrito</v-list-item>
        <v-list-item @click="$router.push('/login')">Iniciar Sesión</v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>

    <v-footer color="#B39DDB" dark>
      <v-container>
        <v-row>
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
    drawer: false,
  }),
};
</script>
