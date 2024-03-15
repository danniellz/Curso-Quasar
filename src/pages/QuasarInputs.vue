<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col-12 col-md-6 q-pa-md">
        <q-input color="blue-12" v-model="text" label="Nombre Completo" />
      </div>
      <div class="col-12 col-md-6 q-pa-md">
        <q-input
          outlined
          color="green-12"
          v-model="text"
          label="Nombre Completo"
        />
      </div>

      <!--Mask es un patron para las reglas-->
      <div class="col-12 col-md-6 q-pa-md">
        <q-input
          outlined
          rounded
          color="white"
          v-model="text"
          label="Carnet"
          bottom-slots
          hint="Este es un hint"
          placeholder="Placeholder"
          mask="AAAAAAA"
          :rules="[
            (val) => !!val || 'Este campo es requerido',
            (val) => val.length > 6 || 'El carnet debe tener 7 caracteres',
          ]"
          ref="carnerRef"
        >
          <!--Icono izquierda-->
          <template v-slot:prepend>
            <q-icon name="place" />
          </template>
          <!--Icono derecha-->
          <template v-slot:append>
            <q-icon name="close" @click="text = ''" class="cursor-pointer" />
          </template>
        </q-input>
      </div>
    </div>
  </div>

  <div class="q-pa-md">
    TIPOS
    <div class="row">
      <!--Password-->
      <div class="col-12 col-md-6 q-pa-md">
        <q-input v-model="password" filled type="password" hint="Password" />
      </div>
      <!--Password Toggle-->
      <div class="col-12 col-md-6 q-pa-md">
        <q-input
          v-model="password"
          filled
          :type="isPwd ? 'password' : 'text'"
          hint="Password with toggle"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
      </div>

      <div class="col-12 col-md-6 q-pa-md">
        <q-input v-model="email" filled type="email" hint="Email" />
      </div>
      <div class="col-12 col-md-6 q-pa-md">
        <q-input v-model="search" filled type="search" hint="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
      <div class="col-12 col-md-6 q-pa-md">
        <q-input v-model="tel" filled type="tel" hint="Telephone number" />
      </div>
      <div class="col-12 col-md-6 q-pa-md">
        <q-input v-model="url" filled type="url" hint="URL" />
      </div>
      <div class="col-12 col-md-6 q-pa-md">
        <q-input v-model="time" filled type="time" hint="Native time" />
      </div>
      <div class="col-12 col-md-6 q-pa-md">
        <q-input v-model="date" filled type="date" hint="Native date" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const text = ref("");
const isPwd = ref("false");
</script>
