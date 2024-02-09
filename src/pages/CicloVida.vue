<template>
    <div>
        <h5>Ciclo de Vida</h5>
        <q-btn to="/">Ir al inicio</q-btn>
        <q-btn @click="tareas.push('Nueva tarea')">Agregar tarea</q-btn>
        {{ tareas }}

    </div>
</template>

<script setup>
//Importaciones
import { ref, onMounted, onUnmounted, onUpdated } from 'vue';

//Variables
const tareas = ref([]);

//Eventos
onMounted(()=>{
    console.log("Se ha montado el componente");
});

onUnmounted(()=>{
    console.log("Se ha desmontado el componente");
});

onUpdated(()=>{
    console.log("Se ha ha actualizado el DOM");
});

</script>

<style lang="scss" scoped>

</style>