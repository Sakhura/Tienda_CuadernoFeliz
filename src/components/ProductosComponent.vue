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

export default {
    name: 'ProductosComponent',
  data() {
    return {
      productos: [  {
        name: 'Cuaderno Personalizado',
        precio: '$4990',
        description: 'Cuaderno de tapa dura con diseño personalizado. Ideal para tus notas y dibujos.',
        url: 'https://http2.mlstatic.com/D_NQ_NP_877501-MLC48983060747_012022-O.webp'
    },
    {
        name: 'Agenda Semanal',
        precio: '$12590',
        description: 'Agenda con diseño elegante y espacio para planificar tu semana de manera efectiva.',
        url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjsg3fO6yXQqyDvbzkBrno2tpsCk8OVkJOF0_lgG5mqzB59ngE2eycpkgkOKaH1plOEq8OsTH35qVJB4B251sLC17MydDCr_yN64pgDYCCiNARMnfDdBjL-osy4zQG-R7Fhc9UaPweMQDY/s16000/slider+1.png'
    },
    {
        name: 'Calendario de Pared',
        precio: '$3990',
        description: 'Calendario de pared con imágenes personalizadas para cada mes. Perfecto para decorar tu espacio.',
        url: 'https://cdnx.jumpseller.com/regalospersonalizados-cl/image/53668454/A4-2025.jpg?1726956349'
    },
    {
        name: 'Photobook Familiar',
        precio: '$15490',
        description: 'Photobook de alta calidad para guardar tus recuerdos familiares. Personalizable con tus fotos.',
        url: 'https://weprint.app/cdn/shop/files/phb-06-sinarmado-02.png?v=1694484511&width=1024'
    },
    {
        name: 'Vela Aromática Personalizada',
        precio: '$4590',
        description: 'Vela aromática hecha a mano con fragancias personalizadas. Ideal para crear un ambiente acogedor.',
        url: 'https://i.ytimg.com/vi/anoxekk3oRc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB2ZWWSsOmUWQNaf2g9sKnkU8DkYQ'
    },
    {
        name: 'Taza Personalizada',
        precio: '$3990',
        description: 'Taza de cerámica con diseño personalizado. Perfecta para tu café o té diario.',
        url: 'https://www.regalooriginal.com/frontend/urls/grande/Taza-personalizada-con-el-interior-de-color-g1.jpg'
    },
    {
        name: 'Llavero Personalizado',
        precio: '$3500',
        description: 'Llavero de metal con grabado personalizado. Un detalle único para tus llaves.',
        url: 'https://cdn.ready-market.com.tw/941f1f20/Templates/pic/IMG-Custom-Metal-Keychains.jpg?v=09dbbcd6'
    },
    {
        name: 'Set de Papelería',
        precio: '$25000',
        description: 'Set completo de papelería con cuadernos, bolígrafos y stickers personalizados.',
        url: 'https://www.enriquetaregalabonito.com/on/demandware.static/-/Sites-ilunion-master-catalog/default/dwda58b746/images/regalo-profesores/E22810/E22810-set-de-papeleria-bonita.jpg'
    },
    {
        name: 'Postales Personalizadas',
        precio: '$1000',
        description: 'Juego de postales personalizadas para enviar mensajes especiales a tus seres queridos.',
        url: 'https://m.media-amazon.com/images/I/71Gc1UNjwfL._AC_UF894,1000_QL80_.jpg'
    },
    {
        name: 'Planificador Mensual',
        precio: '$7990',
        description: 'Planificador mensual con espacio para tus metas y tareas. Ideal para mantenerte organizado.',
        url: 'https://http2.mlstatic.com/D_Q_NP_617684-MLM73091911932_112023-O.webp'
    }
    
],

    }
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