<template>
  <v-sheet class="mx-auto" elevation="8" max-width="1264">
    <v-slide-group
      v-model="model"
      class="pa-4"
      active-class="success"
      show-arrows
    >
      <v-slide-item v-for="n in 15" :key="n" v-slot="{ active, toggle }">
        <v-card
          :color="active ? undefined : 'grey lighten-1'"
          class="ma-4"
          height="170"
          width="300"
          @click="toggle"
        >
          <v-row class="fill-height" align="center" justify="center">
            <v-scale-transition>
              <v-icon
                v-if="active"
                color="white"
                size="48"
                v-text="'mdi-close-circle-outline'"
              ></v-icon>
            </v-scale-transition>
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      model: null,
    }
  },
}
</script>

<style lang="scss" scoped>
::v-deep .v-slide-group__prev,
::v-deep .v-slide-group__next {
  position: absolute;
  top: calc(50% - 12px);
  z-index: 100;
  .v-icon {
    font-size: 3rem;
    border-radius: 100%;
    background-color: rgba($color: black, $alpha: 0.2);
  }
}
::v-deep .v-slide-group__prev {
  left: 3rem;
}
::v-deep .v-slide-group__next {
  right: 3rem;
}

::v-deep .v-slide-group__next--disabled,
.v-slide-group__prev--disabled {
  pointer-events: unset;
}
</style>
