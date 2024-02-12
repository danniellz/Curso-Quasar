<template>
  <q-page>
    <div>
      <h4>Botones</h4>
      <q-btn color="primary" icon="mail">Primario</q-btn>
      <q-btn color="secondary" label="Secondary" />
      <q-btn round color="deep-orange" icon="ion-heart" />
      <q-btn round color="green" icon="fa-solid fa-cloud" />
    </div>

    <p>
      <q-btn flat color="primary" label="Flat" />
      <q-btn
        outline
        to="/conductores/perfil/abc"
        color="primary"
        label="Outline"
      />
    </p>

    <p>
      <q-btn size="sm" color="primary" label="sm" />
      <q-btn rounded size="xl" color="primary" label="Soy un boton" />
    </p>

    <!--Botones carga-->
    <p>
      <q-btn
        :loading="loading1"
        @click="cargardatos"
        color="primary"
        label="Boton 1"
      />
      <q-btn
        :loading="loading1"
        @click="cargardatos"
        color="accent"
        label="Boton 2"
      >
        <!--Comunicación de un componente por medio de un slot, slot loading (en API) es para acceder al slot y sobreescribir el spinner-->
        <template v-slot:loading>
          <q-spinner-gears color="white" />
        </template>
      </q-btn>
    </p>

    <p v-for="x in 20" :key="x">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget sapien
      ut orci tincidunt feugiat. Integer fringilla augue nibh, quis euismod
      neque blandit ut. Etiam imperdiet a lorem in vulputate. Pellentesque id
      augue nec ante semper viverra eu vitae ipsum. Pellentesque sollicitudin,
      sapien sed consequat volutpat, risus mauris feugiat tortor
    </p>

    <!--Boton flotante en página-->
    <q-page-sticky position="bottom-left" :offset="[18, 18]">
      <q-btn fab icon="add" color="primary" />
    </q-page-sticky>

    <q-page-scroller
      position="bottom-right"
      :scroll-offset="50"
      :offset="[10, 10]"
    >
      <q-btn size="xs" fab icon="keyboard_arrow_up" color="secondary" />
    </q-page-scroller>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
const loading1 = ref(false);

function cargardatos() {
  loading1.value = true;

  setTimeout(() => {
    loading1.value = false;
  }, 2000);
}
</script>

<style lang="scss" scoped></style>
