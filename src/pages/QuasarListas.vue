<template>
  <div>
    <q-list>
      <q-item>
        <q-item-section>
          <q-item-label>Single line item</q-item-label>
          <q-item-label caption lines="2"
            >Secondary line text. Lorem ipsum dolor sit amet, consectetur
            adipiscit elit.</q-item-label
          >
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>5 min ago</q-item-label>
          <q-icon name="star" color="yellow" />
        </q-item-section>
      </q-item>

      <q-separator spaced inset />

      <q-item>
        <q-item-section>
          <q-item-label>Single line item</q-item-label>
          <q-item-label caption
            >Secondary line text. Lorem ipsum dolor sit amet, consectetur
            adipiscit elit.</q-item-label
          >
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>Voted!</q-item-label>
        </q-item-section>
      </q-item>

      <q-separator spaced inset />

      <q-item>
        <q-item-section>
          <q-item-label>Single line item</q-item-label>
          <q-item-label caption
            >Secondary line text. Lorem ipsum dolor sit amet, consectetur
            adipiscit elit.</q-item-label
          >
        </q-item-section>

        <q-item-section side top>
          <q-badge color="teal" label="10k" />
        </q-item-section>
      </q-item>

      <q-separator spaced inset />

      <q-item>
        <q-item-section>
          <q-item-label>Single line item</q-item-label>
          <q-item-label caption
            >Secondary line text. Lorem ipsum dolor sit amet, consectetur
            adipiscit elit.</q-item-label
          >
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>2 min ago</q-item-label>
          <div class="text-orange">
            <q-icon name="star" />
            <q-icon name="star" />
            <q-icon name="star" />
          </div>
        </q-item-section>
      </q-item>

      <q-separator spaced inset />

      <q-item>
        <q-item-section>
          <q-item-label>Single line item</q-item-label>
          <q-item-label caption
            >Secondary line text. Lorem ipsum dolor sit amet, consectetur
            adipiscit elit.</q-item-label
          >
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>meta</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>

  <!--Tarjetas-->
  <div>
    <div class="row">
      <!--Tarjeta 1-->
      <div class="col-6 col-sm-2 q-ma-lg">
        <q-card class="my-card bg-yellow-3" flat bordered>
          <img src="https://cdn.quasar.dev/img/parallax2.jpg" />

          <q-list>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="primary" name="local_bar" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Bar XYZ</q-item-label>
                <q-item-label caption>Have a drink.</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="red" name="local_gas_station" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Gas Station</q-item-label>
                <q-item-label caption>Fill your gas tank.</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="amber" name="local_movies" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Cinema XYZ</q-item-label>
                <q-item-label caption>Watch a movie.</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
      </div>

      <!--Tarjeta 2-->
      <div class="col-5 col-sm-2 q-ma-lg">
        <q-card class="my-card bg-yellow-3" flat bordered>
          <img src="https://cdn.quasar.dev/img/mountains.jpg" />
          <q-card-actions align="right">
            <q-btn flat round color="red" icon="favorite" />
            <q-btn flat round color="teal" icon="bookmark" />
            <q-btn flat round color="primary" icon="share" />

            <!--boton con menu desplegable-->
            <q-btn icon="more_vert" round flat
              ><q-menu auto-close
                ><q-list>
                  <q-item clickable>Item 1 de lista</q-item>
                  <q-item clickable>Item 2 de lista</q-item>
                  <q-item clickable>Item 3 de lista</q-item>
                </q-list>
              </q-menu></q-btn
            >
          </q-card-actions>
        </q-card>
      </div>

      <!--Tarjeta 3-->
      <div class="col-6 col-sm-2 q-ma-lg">
        <q-card class="my-card bg-yellow-3" flat bordered>
          <q-card-section>
            <div class="text-h6 q-mb-xs">Our Changing Planet</div>
            <div class="row no-wrap items-center">
              <q-rating size="18px" v-model="stars" :max="5" color="primary" />
              <span class="text-caption text-grey q-ml-sm">4.2 (551)</span>
            </div>
          </q-card-section>

          <img src="https://cdn.quasar.dev/img/mountains.jpg" />
        </q-card>
      </div>

      <!--Tarjeta 4-->
      <div class="col-7 col-sm-2 q-ma-lg">
        <q-card class="my-card bg-yellow-3" flat bordered>
          <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />
          <q-card-section>
            <q-btn
              fab
              color="primary"
              icon="place"
              class="absolute"
              style="top: 0; right: 12px; transform: translateY(-50%)"
            />

            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis">Cafe Basilico</div>
              <div
                class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
              >
                <q-icon name="place" />
                250 ft
              </div>
            </div>

            <q-rating v-model="stars" :max="5" size="32px" color="primary" />
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-subtitle1">$・Italian, Cafe</div>
            <div class="text-caption text-grey">
              Small plates, salads & sandwiches in an intimate setting.
            </div>
          </q-card-section>

          <q-separator />

          <q-card-actions>
            <q-btn flat round icon="event" />
            <q-btn flat color="primary"> Reserve </q-btn>
          </q-card-actions>
        </q-card>
      </div>

      <!--Expansion items-->
      <div class="q-pa-md" style="max-width: 350px">
        <q-list bordered class="rounded-borders">
          <q-expansion-item
            expand-separator
            icon="perm_identity"
            label="Account settings"
            caption="John Doe"
          >
            <q-card>
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quidem, eius reprehenderit eos corrupti commodi magni quaerat ex
                numquam, dolorum officiis modi facere maiores architecto
                suscipit iste eveniet doloribus ullam aliquid.
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-expansion-item
            expand-separator
            icon="signal_wifi_off"
            label="Wifi settings"
          >
            <q-card>
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quidem, eius reprehenderit eos corrupti commodi magni quaerat ex
                numquam, dolorum officiis modi facere maiores architecto
                suscipit iste eveniet doloribus ullam aliquid.
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-expansion-item
            expand-separator
            icon="drafts"
            label="Drafts"
            header-class="text-purple"
          >
            <q-card>
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quidem, eius reprehenderit eos corrupti commodi magni quaerat ex
                numquam, dolorum officiis modi facere maiores architecto
                suscipit iste eveniet doloribus ullam aliquid.
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-expansion-item icon="assessment" label="Disabled" disable>
            <q-card>
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quidem, eius reprehenderit eos corrupti commodi magni quaerat ex
                numquam, dolorum officiis modi facere maiores architecto
                suscipit iste eveniet doloribus ullam aliquid.
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-list>
      </div>
    </div>
  </div>
</template>

<script setup>
const stars = "";
</script>
