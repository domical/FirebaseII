<template>
  <div class="register">
    <h2 class="register__title">Registro</h2>
    <input v-model="email" type="email" class="register__input register__input--email" placeholder="Correo Electrónico">
    <input v-model="password" type="password" class="register__input register__input--password"
      placeholder="Contraseña">
    <button @click="register" class="register__button">
      Regístrate
    </button>
  </div>
</template>

<script>
import { createUserWithEmailAndPassword, auth } from '@/auth';
export default {
  name: 'RegistroView',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async register() {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
        const user = userCredential.user;
        console.log('usuario registrado: ', user);
        this.$router.push('/login');
      } catch (error) {
        console.error('error al registrar: ', error.message);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$primary-color: #007bff;
$primary-hover: darken($primary-color, 10%);
$input-border: #ccc;
$input-focus: $primary-color;
$error-color: #ff4d4d;

.register {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 2rem auto;

  &__title {
    font-size: 1.5rem;
    color: $primary-color;
    margin-bottom: 1rem;
  }

  &__input {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid $input-border;
    border-radius: 4px;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.3s;

    &--email,
    &--password {
      &:focus {
        border-color: $input-focus;
        box-shadow: 0 0 4px rgba(0, 123, 255, 0.5);
      }
    }

    &--email {
      margin-top: 1rem;
    }
  }

  &__button {
    width: 100%;
    padding: 0.75rem 1rem;
    font-size: 1rem;
    color: white;
    background-color: $primary-color;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: $primary-hover;
    }
  }
}
</style>