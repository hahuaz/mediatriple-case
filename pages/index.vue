<template>
  <div>
    <p>hi from index page</p>
    <carousel-movies></carousel-movies>
  </div>
</template>

<script>
export default {
  layout: ({ isMobile }) => (isMobile ? 'mobile' : 'default'),
}
</script>

<style lang="scss" scoped></style>
