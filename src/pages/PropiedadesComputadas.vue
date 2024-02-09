<template>
  <div>
    <h4>Propiedades computadas</h4>
    <q-input v-model="nuevaTarea"></q-input>
    <q-btn @click="agregar">Agregar</q-btn>
    <p>{{ tareas }}</p>
    <p
      v-for="(item, key) in tareasPendientes"
      :key="key"
      :class="{ 'bg-grey': esPar(key) }"
    >
      {{ item.nombre }} - {{ item.hecho }} - {{ key }}
      <q-btn @click="eliminar(item)">del</q-btn>
      <q-toggle v-model="item.hecho"></q-toggle>
    </p>
    <p>Terminadas: {{ contaTerminadas }}</p>
    <p>
      Ocultar tareas completadas:
      <q-toggle v-model="ocultarCompletados"></q-toggle>
    </p>
  </div>
</template>

<script setup>
//Importaciones
import { ref, computed } from "vue";

//Variables o propiedades (ref para reactividad y responda a cambios)
const tareas = ref([]);
const nuevaTarea = ref("");
const ocultarCompletados = ref(false);

//Propiedades computadas
const contaTerminadas = computed(() => {
  let conta = 0;

  tareas.value.forEach((item) => {
    if (item.hecho) {
      conta++;
    }
  });
  return conta;
});

const tareasPendientes = computed(() => {
  if (ocultarCompletados.value) {
    return tareas.value.filter((item) => item.hecho == false);
  } else {
    return tareas.value;
  }
});

//Metodos
function agregar() {
  tareas.value.push({ nombre: nuevaTarea.value, hecho: false });
  nuevaTarea.value = "";
}
function eliminar(tarea) {
  console.log(tarea);
  tareas.value = tareas.value.filter((item) => item != tarea);
}

//para cambiar color fila par
function esPar(numero) {
  return numero % 2 == 0;
}
</script>

<style lang="scss" scoped></style>
