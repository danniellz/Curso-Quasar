<template>
  <h4>Propiedades computadas</h4>
  <div class="flex-right q-pa-lg">
    <div class="row q-ma-sm">
      <div class="col-8 col-sm-2">
        <q-input v-model="nuevaTarea" placeholder="Escribe nombre"></q-input>
      </div>
      <div class="col-4 col-sm-2" align="center">
        <q-btn @click="agregar">Agregar</q-btn>
      </div>
      <div class="col-12 col-sm-4">
        <p>{{ tareas }}</p>
      </div>
    </div>

    <div>
      <div class="tabla">
        <p
          class="q-ma-sm"
          v-for="(item, key) in tareasPendientes"
          :key="key"
          :class="{ 'bg-blue text-white': esPar(key) }"
        >
          {{ item.nombre }} - {{ item.hecho }} - {{ key }}

          <q-toggle v-model="item.hecho"></q-toggle>
          <q-btn @click="eliminar(item)">del</q-btn>
        </p>
      </div>

      <div class="bg-blue text-white q-ma-sm">
        <p>Terminadas: {{ contaTerminadas }}</p>

        <p>
          Ocultar tareas completadas:
          <q-toggle v-model="ocultarCompletados"></q-toggle>
        </p>
      </div>
    </div>
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
