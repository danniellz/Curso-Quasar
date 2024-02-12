<template>
  <div>
    <!--Dialogos-->
    <q-dialog v-model="showModal">
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Close icon</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget
          sapien ut orci tincidunt feugiat. Integer fringilla augue nibh, quis
          euismod neque blandit ut. Etiam imperdiet a lorem in vulputate.
          Pellentesque id augue nec ante semper viverra eu vitae ipsum.
          Pellentesque sollicitudin, sapien sed consequat volutpat, risus mauris
          feugiat tortor
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!--Botones-->
    <q-btn label="Show Dialog" @click="showModal = true" color="accent" />
    <q-btn label="Notify" @click="iniciar" color="secondary" />
    <p><q-btn icon="lightbulb" @click="cambiarDark" /></p>
  </div>
</template>

<script setup>
import { ref } from "vue";
//Importacion necesaria para las notificaciones y el modo oscuro
import { useQuasar } from "quasar";
const $q = useQuasar();

const showModal = ref(false);

function iniciar() {
  $q.notify("Message");
  $q.notify({
    message: "Jim just pinged you",
    color: "green-5",
    avatar: "https://cdn.quasar.dev/img/boy-avatar.png",
    actions: [
      {
        label: "Dismiss",
        color: "white",
        handler: () => {
          /* ... */
        },
      },
    ],
  });
}

function cambiarDark() {
  //Activar y desactivar mediante interruptor
  //$q.dark.toggle();

  //Si esta activo, desactivarlo, en caso contrario activarlo
  $q.dark.set($q.dark.isActive ? false : true);
}
</script>

<style lang="scss" scoped></style>
