<template>
  <div>
    <h4>Reactividad de clases y estilos</h4>
    <p><q-toggle v-model="isPrimary" label="es Primaria"></q-toggle></p>
    <p class="q-pa-lg" :class="{ 'bg-primary': isPrimary }">Texto cualquiera</p>
    <p><q-toggle v-model="isDark" label="es Oscuro"></q-toggle></p>
    <p :class="estilo">El fondo es Oscuro</p>
    <p :style="{ 'background-color': colorFondo }">Cambiando colo del fondo</p>
    <q-color v-model="colorFondo" style="width: 80px"></q-color>
  </div>
</template>

<script setup>
//Importaciones
import { ref, computed } from "vue";

//Variables o propiedades
const isPrimary = ref(false);
const isDark = ref(false);
const colorFondo = ref("");

const estilo = computed(() => {
  return {
    "bg-dark": isDark.value,
    "text-white": isDark.value,
    "q-pa-lg": isDark.value,
  };
});
//Propiedades computadas

//Metodos
</script>

<style lang="scss" scoped></style>
