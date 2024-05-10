<script setup lang="ts">
import { ref } from 'vue';

type users = {
  id: String;
  name: String;
  email: String;
  phone: String;
  state: boolean;
}

var arrUsers: users[] =[{}];

const name = ref("");
const email = ref("");
const phone = ref("");

function handleClick() {
  arrUsers.forEach((element) => {
    console.log(element);
  });
}
</script>

<template>
  <form>
    <label for="nombre">Escribe tu nombre</label>
    <input v-model="name" placeholder="Escribe tu nombre" type="text" name="nombre" />
    <label for="correo">Ingresa tu correo</label>
    <input v-model="email" placeholder="mail@example.com" type="text" name="correo" />
    <label for="telefono">Telefono: </label>
    <input v-model.number="phone" placeholder="5511223344" type="text" name="telefono" />
    <button type="button">Enviar</button>
  </form>

</template>
