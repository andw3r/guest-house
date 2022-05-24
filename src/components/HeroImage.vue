<template>
  <div class="hero__image">
    <img :src="require(`@/assets/images/${heroImage}`)">
  </div>
</template>

<script>
export default {
  name: 'HeroImage',
  props: [
    'heroImage'
  ]
}
</script>