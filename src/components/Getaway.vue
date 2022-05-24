<template>
  <section class="getaway section-padding">
    <div class="getaway__container">
      <div class="wrapper">
        <h2 class="getaway__text">{{text}}</h2>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Getaway',
  props: [
    'text'
  ]
}
</script>