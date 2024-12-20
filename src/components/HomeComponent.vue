<template> 
  <v-container class="container">
   

    <v-window width="100%" height="auto"
      v-model="onboarding"
      show-arrows
    >
      <h4 class="text-h4 custom-title">Nuestros Trabajos</h4>
      <v-window-item>
        <v-card
          class="d-flex flex-column align-center justify-center ma-2 text-center"
          elevation="2"
          height="400"
          color="#E1BEE7"
          style=" border-radius: 8px;"
        >
          <h2 class="text-h5 font-weight-bold" style="margin-bottom: 16px;">¡Dale un toque personal a tu vida!</h2>
          <p style="font-size: 16px; line-height: 1.6; color: #4A148C;">
            En nuestra tienda encontrarás una amplia variedad de productos personalizados, desde cuadernos y agendas hasta calendarios y mucho más. Diseña productos únicos con tus fotos, ilustraciones y frases favoritas. ¡El regalo perfecto para cualquier ocasión! Trabajamos con materiales de alta calidad y ofrecemos un servicio personalizado para que tus ideas cobren vida. Explora nuestra tienda y comienza a crear hoy mismo.
          </p>
        </v-card>
      </v-window-item>
      <v-window-item
        v-for="n in length"
        :key="`card-${n}`"
      >
        <v-card
          class="d-flex align-center justify-center ma-2"
          elevation="2"
          height="400"
          color="#E1BEE7"
        >
          <h1 class="text-h2">
            <v-img :src="n" height="400" @click="goToProductos"></v-img>
          </h1>
        </v-card>
      </v-window-item>
    </v-window>
<v-row class="informacion">
    <v-window
      v-model="commentsOnboarding"
      continuous
      class="coments"
      
    >
      <v-window-item
        v-for="(comment, index) in customerComments"
        :key="`comment-${index}`"
      >
        <v-card
          class="d-flex align-center justify-center ma-2"
          elevation="2"
          color="#BA68C8"
          style="padding: 16px; border-radius: 8px; text-align: center;"
        >
          <v-list-item-content>
            <v-list-item-title class="font-weight-bold" style="margin-bottom: 8px;">{{ comment.name }}</v-list-item-title>
            <v-list-item-subtitle>"{{ comment.text }}"</v-list-item-subtitle>
            
          </v-list-item-content>
        </v-card>
      </v-window-item>
    </v-window>
    <v-window
      v-model="promocionesOnboarding"
      continuous
      class="promociones"
      
    >
      <v-window-item
        v-for="(promocion, index) in promociones"
        :key="`promocion-${index}`"
      >
        <v-card
          class="d-flex align-center justify-center ma-2"
          elevation="2"
          color="#BA68C8"
          style="padding: 16px; border-radius: 8px; text-align: center;"
        >
          <v-list-item-content>
            <v-list-item-title class="font-weight-bold" style="margin-bottom: 8px;">{{ promocion.name }}</v-list-item-title>
            <v-list-item-subtitle>"{{ promocion.text }}"</v-list-item-subtitle>
          </v-list-item-content>
        </v-card>
      </v-window-item>
    </v-window>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HomeComponent',

    data: () => ({
      onboarding: 0,
      commentsOnboarding: 0,
      promocionesOnboarding: 0,
      length: [
        'https://calendariospersonalizadosempresa.es/wp-content/uploads/2018/06/pack3-1.jpg',
        'https://marifran.cl/wp-content/uploads/2021/09/agenda-enfermera-2022-768x768.webp',
        'https://cdn1.totalcommerce.cloud/laplazamorada/product-thumb/es/calendarios-personalizados-1.webp',
        'https://www.regalooriginal.com/frontend/urls/grande/cuaderno-pequeno-g1.jpg',
        'https://supercolor.com.co/wp-content/uploads/2022/06/11111.png',
        'https://www.hacervelas.es/wp-content/uploads/2019/03/velas-personalizadas.jpg'
      ],
      customerComments: [
        { name: 'María González', text: 'Los productos son de excelente calidad, ¡me encantaron!' },
        { name: 'Juan Pérez', text: 'El diseño personalizado superó mis expectativas. Muy recomendable.' },
        { name: 'Ana López', text: 'La atención al cliente fue increíble y los resultados aún mejores.' },
        { name: 'Pedro Rodríguez', text: 'Estoy muy satisfecho con el servicio y los productos personalizados.' },
        { name: 'Luisa Gómez', text: 'Me encantó la variedad de productos y la facilidad para personalizarlos.' },
        { name: 'Carlos Martínez', text: 'Los productos son de excelente calidad, ¡me encantaron!' },
        { name: 'Marta Rodríguez', text: 'El diseño personalizado superó mis expectativas. Muy recomendable.' },
      ],
      promociones: [
        { name: 'Solo por diciembre', text: '¡Obten hasta un 25% de descuento en todos los productos! solo hasta el 24 de diciembre' },
        { name: 'Calendario Personalizado', text: '¡Obtén un 10% de descuento en tu calendario personalizado!' },
        { name: 'Cuaderno Personalizado', text: '¡Obtén un 10% de descuento en tu cuaderno personalizado!' },
        { name: 'Agenda Personalizada', text: '¡Obtén un 25% de descuento en tu agenda personalizada!' },
        { name: 'Velas Personalizadas', text: '¡Obtén un 15% de descuento en tus velas personalizadas!' },
        { name: 'Tazas Personalizadas', text: '¡Obtén un 10% de descuento en tus tazas personalizadas!' },
        { name: 'Llaveros Personalizados', text: '¡Obtén un 10% de descuento en tus llaveros personalizados!' },
    ]
    }),

    mounted() {
      this.startAutoSlide();
      
    },

    methods: {
      startAutoSlide() {
        setInterval(() => {
          this.commentsOnboarding = (this.commentsOnboarding + 1) % this.customerComments.length;
        }, 6000);
        setInterval(() => {
      this.promocionesOnboarding = (this.promocionesOnboarding + 1) % this.promociones.length;
    }, 8000);
      },
      
      goToProductos() {
        this.$router.push('/productos');
      },
      
    },
  };
</script>

<style>
.custom-title {
  color: white; /* Cambia el color del texto a blanco */
  text-align: center; /* Alinea el texto al centro */
  background-color: #E1BEE7; /* Cambia el color de fondo (puedes usar cualquier color) */
  padding: 16px; /* Agrega un padding para que el texto no esté pegado al borde */
  border-radius: 4px;
  margin-left: 9px;
  margin-right: 9px;
  /* Opcional: agrega bordes redondeados */
}
.container{
  width: 100vw;
}
.informacion{
display: flex;
  margin-left: 2px;
  margin-right: 2px;
  justify-content:space-between;
width: 100%;
margin-top: 10px;
}

.coments{
  width: 50%;
  height: 100%;
 
}
.promociones{
width: 50%;
height: 100%;
transition: transform 0.5s ease-in-out;

}
</style>
