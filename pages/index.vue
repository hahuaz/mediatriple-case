<template>
  <div class="text-center">
    <h3 v-if="!$nuxt.context.isMobile" class="my-8">Variant 1 Carousel</h3>
    <carousel-movies></carousel-movies>
    <div v-if="$nuxt.context.isMobile" style="height: 600px"></div>
  </div>
</template>

<script>
export default {
  layout: ({ isMobile }) => (isMobile ? 'mobile' : 'default'),
}
</script>

<style lang="scss" scoped></style>
