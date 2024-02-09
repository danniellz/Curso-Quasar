<template>
    <div v-for="(tarea, key) in tareas" :key="key" class="q-pa-lg">
        <tarea-detalle  
        @eliminar="eliminarTarea"
        :nombre="tarea.nombre" 
        :completado="tarea.completado">
            {{ tarea.nombre }}
        </tarea-detalle>
    </div>

    <!--para ver el hijo-->
    <p><q-btn to="../components/tareadetalle">Ir a hijo</q-btn></p>
</template>

<script setup>
import { ref } from "vue";
import TareaDetalle from "../components/TareaDetalle.vue";

const tareas = ref([
    {nombre: "Aprender Vue", completado: false},
    {nombre: "Aprender Firebase", completado: false},
    {nombre: "Aprender CSS", completado: false},
    {nombre: "Aprender HTML", completado: false},
    {nombre: "Aprender JavaScript", completado: false},
]);

const eliminarTarea = (nombre) => {
    console.log("eliminarTarea");
    console.log(nombre);
    tareas.value = tareas.value.filter((tarea)=> tarea.nombre !== nombre);
};

</script>

<style lang="scss" scoped></style>