<template>
    <div>
        <p>
            Una pregunta si/no
            <input v-model="pregunta"/>
        </p>
        <p>{{ respuesta }}</p>

    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const pregunta = ref("");
const respuesta = ref("Las preguntas normalmente contienen una símbolo de interrogación");

//Wacth funciona directamente en un "ref"
watch(pregunta, async(nuevaPregunta, antiguaPregunta) =>{
    console.log("Observando");
    if(nuevaPregunta.indexOf("?") > -1){
        respuesta.value="pensando...";
        try {
            const res = await fetch("https://yesno.wtf/api");
            respuesta.value = (await res.json()).answer
        } catch (error) {
            respuesta.value = "Error! no se pudo conectar con la API." + error;
        }
    }
    
});

</script>

<style lang="scss" scoped></style>