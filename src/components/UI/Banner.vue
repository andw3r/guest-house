<template>
  <section class="banner">
    <div class="banner__image">
      <img :src="require(`@/assets/images/${image}`)">
    </div>
  </section>
</template>

<script>

export default {
  name: 'Banner',
  props: [
    'image'
  ]
}
</script>