<template>
  <section class="arrangements section-padding">
    <div class="container">
      <div class="wrapper">
        <div class="arrangements__main-text">
          <h2 class="arrangements__title">{{title}}</h2>
          <h2 class="arrangements__text">{{text}}</h2>
        </div>
        
        <div class="arrangements__row">
          <div class="arrangements__column" v-for="column in columns" :key="column.id">
            <div class="arrangements__icon"><img :src="require(`../assets/images/arrangements/${column.img}`)"></div>
            <h6 class="arrangements__column-title">{{column.title}}</h6>
            <p class="arrangements__column-text">{{column.text}}</p>            
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Arrangements',
  props: {
    title: String,
    text: String,
    columns: Array,
  }
  
    
}
</script>