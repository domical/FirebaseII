<template>
    <div class="container mt-4">
      <h1 class="text-center mb-4">Lista de Usuarios</h1>  
      <h4 v-if="usuarios.length === 0">Esperando usuarios...</h4>
      <ul v-else class="list-group">
        <li v-for="usuario in usuarios" :key="usuario.id" class="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <p :style="{color: usuario.colorFavorito}"><strong>Nombre:</strong> {{ usuario.nombre }}</p>
            <p :style="{color: usuario.colorFavorito}"><strong>Correo:</strong> {{ usuario.correo }}</p>
            <p :style="{color: usuario.colorFavorito}"><strong>Color Favorito:</strong> {{ usuario.colorFavorito }}</p>
          </div>
          <div>
            <button @click="eliminarUsuario(usuario.id)" class="btn btn-danger btn-sm me-2">Eliminar</button>
            <router-link :to="{ name: 'usuarios-form', params: { id: usuario.id } }" class="btn btn-warning btn-sm">Editar</router-link>
          </div>
        </li>
      </ul>
      
      <div class="mt-4">
        <router-link to="/usuarios-form" class="btn btn-primary">Agregar usuario</router-link>
      </div>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex';
  
  export default {
    name: 'UsuariosList',
    computed: {
      ...mapGetters(['usuarios']),
    },
    methods: {
      ...mapActions(['fetchUsuarios','deleteUsuario']),
      
      eliminarUsuario(id) {
        this.deleteUsuario(id);
      }
    },
    mounted() {
      this.fetchUsuarios();
    }
  };
  </script>
  
  <style scoped>
  </style>