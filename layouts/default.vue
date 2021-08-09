<template>
  <v-app dark>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
      <v-footer app>
        <span>&copy; {{ new Date().getFullYear() }}</span>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
