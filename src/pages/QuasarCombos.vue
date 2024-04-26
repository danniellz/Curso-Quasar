<template>
  <div class="q-pa-md">
    <!--Combo1-->
    <q-select v-model="model" :options="options" label="Standard" />

    <!--Combo2-->
    <q-select
      color="teal"
      filled
      v-model="model"
      :options="options"
      label="Label"
    >
      <template v-slot:prepend>
        <q-icon name="event" />
      </template>
    </q-select>

    <!--Combo3-->
    <q-select
      outlined
      v-model="menu"
      :options="optionsMenu"
      label="Standard1"
      option-label="label"
      option-value="value"
    />
    <p>{{ menu }}</p>

    <!--Combo4 con Filtro-->
    <q-select
      filled
      v-model="menu2"
      :options="opcionesFiltradas"
      option-label="nombre"
      option-value="id"
      use-input
      @filter="filterFn"
      hint="Filtrando opciones"
    >
      <template v-slot:no-option>
        <q-item
          ><q-item-section class="text-grey">No results</q-item-section>
        </q-item>
      </template>
    </q-select>
    <p>{{ menu2 }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const model = ref(null);
const menu = ref(null);
const menu2 = ref(null);

const options = ref(["Google", "Facebook", "Twitter", "Apple", "Oracle"]);
const optionsMenu = ref([
  { label: "Google", value: "Goog" },
  { label: "Facebook", value: "Face" },
  { label: "Twitter", value: "Twit" },
  { label: "Google", value: "Goog" },
  { label: "Google", value: "Goog" },
]);
const optionsMenu2 = ref([
  { id: "asdasdad", nombre: "Entradas" },
  { id: "asdsad", nombre: "Platos" },
  { id: "Twitasdasdter", nombre: "Postres" },
  { id: "sadsadasd", nombre: "Bebidas" },
  { id: "asdsadsad", nombre: "Acom" },
]);

//Filtrado
const opcionesFiltradas = ref([]);

function filterFn(val, update, abort) {
  update(() => {
    opcionesFiltradas.value = optionsMenu2.value.filter((item) => {
      return item.nombre.toLowerCase().indexOf(val) > -1;
    });
  });
}
</script>
