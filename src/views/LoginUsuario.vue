<template>
  <v-container>
    <v-card class="login-box">
      <v-card-title>
        <h2>Login</h2>
      </v-card-title>

      <!-- Campos de entrada -->
      <v-text-field
        v-model="user.correoElectronico"
        label="Email"
        type="email"
        placeholder="ejemplo@ejemplo.cl"
        outlined
        dense
      />
      <v-text-field
        v-model="user.contrasena"
        label="Password"
        type="password"
        outlined
        dense
      />

      <v-btn color="primary" block @click="login"> Login </v-btn>

      <!-- Enlace a registrarse -->
      <router-link to="/registro">Registrarse</router-link>
    </v-card>
  </v-container>
</template>

<script>
import Swal from "sweetalert2";

export default {
  data() {
    return {
      user: {
        correoElectronico: "",
        contrasena: "",
      },
      // Datos de simulacion para validación
      usuariosRegistrados: [
        { correoElectronico: "usuario@ejemplo.cl", contrasena: "12345" },
      ],
    };
  },

  methods: {
    login() {
      const usuarioEncontrado = this.usuariosRegistrados.find(
        (usuario) =>
          usuario.correoElectronico === this.user.correoElectronico &&
          usuario.contrasena === this.user.contrasena
      );

      if (!usuarioEncontrado) {
        // Se mostrara mensaje de error si no se encuentra el usuario
        Swal.fire({
          icon: "error",
          title: "Credenciales Incorrectas",
          text: "El email o la contraseña no son correctos.",
        });
      } else {
        // Se mostrara mensaje de confirmacion si el usuario es encontrado
        Swal.fire({
          icon: "success",
          title: "¡Bienvenido!",
          text: "Te has logueado correctamente.",
        }).then(() => {
          this.$router.push({ name: "home" });
        });
      }
    },
  },
};
</script>

<style scoped>
body {
  font-family: "Roboto", sans-serif;
  margin: 0;
  padding: 0;
  background-color: #e2e2e2;
  color: #333;
}

/* Estilo del contenedor del logo */
.logo {
  text-align: center;
}

.logo .imagelogo {
  max-width: 600px;
  margin: 0 auto 5px;
  display: block;
}

.logo .title {
  font-size: 50px;
  color: #2a4365;
  margin: 10px;
}

/* Contenedor de la caja de login */
.login-box {
  background: white;
  max-width: 400px;
  margin: 10px auto;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.login-box h2 {
  margin-bottom: 20px;
  color: #2a4365;
}

/* Estilo de los campos de entrada */
.login-box .v-text-field {
  width: 100%;
  margin-bottom: 20px;
}

/* Estilo del botón */
.login-box .v-btn {
  background-color: #341c3d;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.login-box .v-btn:hover {
  background-color: #643575;
  transform: scale(1.03);
}

.login-box .v-btn:active {
  background-color: #341c3d;
  transform: scale(1);
}

/* Enlace de registro */
.login-box a {
  display: block;
  margin-top: 15px;
  color: #2575fc;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.login-box a:hover {
  color: #1b5bbf;
}
</style>
