<template>
  <section class="escape section-padding">
    <div class="container">
      <div class="wrapper">
        <div class="escape__text">
          <h3 class="escape__title">{{title}}</h3>
          <p class="escape__description">{{text}}</p>
        </div>
        
        <div class="escape__columns-container">
          <div class="escape__column" v-for="column in columns" :key="column.id">
            
            <div class="escape__column-icon">
              <img :src="require(`../assets/images/escape/${column.img}`)">
            </div>
            <div class="escape__column-text">
              <h6 class="escape__column-title">
                {{column.title}}
              </h6>
              <h6 class="escape__column-description">
                {{column.description}}
              </h6>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'App',
  props: {
    title: String,
    text: String,
    columns: Array
  }
}
</script>
