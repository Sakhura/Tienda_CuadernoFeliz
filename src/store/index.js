import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productos: [
      {
        id: 1,
        name: 'Cuaderno Personalizado',
        precio: '$4990',
        description: 'Cuaderno de tapa dura con diseño personalizado. Ideal para tus notas y dibujos.',
        url: 'https://http2.mlstatic.com/D_NQ_NP_877501-MLC48983060747_012022-O.webp'
      },
      {
        id: 2,
        name: 'Agenda Semanal',
        precio: '$12590',
        description: 'Agenda con diseño elegante y espacio para planificar tu semana de manera efectiva.',
        url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjsg3fO6yXQqyDvbzkBrno2tpsCk8OVkJOF0_lgG5mqzB59ngE2eycpkgkOKaH1plOEq8OsTH35qVJB4B251sLC17MydDCr_yN64pgDYCCiNARMnfDdBjL-osy4zQG-R7Fhc9UaPweMQDY/s16000/slider+1.png'
      },
      {
        id: 3,
        name: 'Calendario de Pared',
        precio: '$3990',
        description: 'Calendario de pared con imágenes personalizadas para cada mes. Perfecto para decorar tu espacio.',
        url: 'https://cdnx.jumpseller.com/regalospersonalizados-cl/image/53668454/A4-2025.jpg?1726956349'
      },
      {
        id: 4,
        name: 'Photobook Familiar',
        precio: '$15490',
        description: 'Photobook de alta calidad para guardar tus recuerdos familiares. Personalizable con tus fotos.',
        url: 'https://weprint.app/cdn/shop/files/phb-06-sinarmado-02.png?v=1694484511&width=1024'
      },
      {
        id: 5,
        name: 'Vela Aromática Personalizada',
        precio: '$4590',
        description: 'Vela aromática hecha a mano con fragancias personalizadas. Ideal para crear un ambiente acogedor.',
        url: 'https://i.ytimg.com/vi/anoxekk3oRc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB2ZWWSsOmUWQNaf2g9sKnkU8DkYQ'
      },
      {
        id: 6,
        name: 'Taza Personalizada',
        precio: '$3990',
        description: 'Taza de cerámica con diseño personalizado. Perfecta para tu café o té diario.',
        url: 'https://www.regalooriginal.com/frontend/urls/grande/Taza-personalizada-con-el-interior-de-color-g1.jpg'
      },
      {
        id: 7,
        name: 'Llavero Personalizado',
        precio: '$3500',
        description: 'Llavero de metal con grabado personalizado. Un detalle único para tus llaves.',
        url: 'https://cdn.ready-market.com.tw/941f1f20/Templates/pic/IMG-Custom-Metal-Keychains.jpg?v=09dbbcd6'
      },
      {
        id: 8,
        name: 'Set de Papelería',
        precio: '$25000',
        description: 'Set completo de papelería con cuadernos, bolígrafos y stickers personalizados.',
        url: 'https://www.enriquetaregalabonito.com/on/demandware.static/-/Sites-ilunion-master-catalog/default/dwda58b746/images/regalo-profesores/E22810/E22810-set-de-papeleria-bonita.jpg'
      },
      {
        id: 9,
        name: 'Postales Personalizadas',
        precio: '$1000',
        description: 'Juego de postales personalizadas para enviar mensajes especiales a tus seres queridos.',
        url: 'https://m.media-amazon.com/images/I/71Gc1UNjwfL._AC_UF894,1000_QL80_.jpg'
      },
      {
        id: 10,
        name: 'Planificador Mensual',
        precio: '$7990',
        description: 'Planificador mensual con espacio para tus metas y tareas. Ideal para mantenerte organizado.',
        url: 'https://http2.mlstatic.com/D_Q_NP_617684-MLM73091911932_112023-O.webp'
      }
    ],
    trabajos: [
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
  },
  getters: {
    getProductoById: (state) => (id) => {
      return state.productos.find(producto => producto.id === id);
    },
  },
  mutations: {
    // Aquí puedes agregar mutaciones para modificar el estado
  },
  actions: {
    // Aquí puedes agregar acciones para manejar la lógica asíncrona
  },
  modules: {
  }
});