<template>
  <div class="text-center">
    <h3 class="my-8">Variant 1 Carousel</h3>
    <carousel-movies></carousel-movies>
  </div>
</template>

<script>
export default {
  layout: ({ isMobile }) => (isMobile ? 'mobile' : 'default'),
}
</script>

<style lang="scss" scoped></style>
