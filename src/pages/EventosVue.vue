<template>
  <div class="q-pa-lg">
    <p>
      <q-btn v-on:click="contador++">Incrementar</q-btn>
      <q-btn @click="incrementar">Incrementar</q-btn>
      <q-btn @click="revertir(cadena)">revertir</q-btn>
    </p>
    <p>{{ contador }}</p>
    <p @click="click2">
      Este es un texto
      <!-- @click.stop evita que el evento se propague al click2 -->
      <q-btn @click.stop="click1">Propagacion</q-btn>
    </p>
    <p>
      <q-input
        @keyup.enter="incrementar"
        label="Incrementamos el contador con enter"
      >
      </q-input>
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const contador = ref(0);
const cadena = ref("hola mundo");

function incrementar(event) {
  console.log("incrementar");
  contador.value++;
  if (event) {
    console.log(event.type);
  }
}
function revertir(cad) {
  console.log(cad.split(" ").reverse().join(" "));
}
function click1() {
  console.log("click1");
}
function click2() {
  console.log("click2");
}
</script>

<style lang="scss" scoped></style>
