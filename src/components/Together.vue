<template>
  <section class="together section-padding">
    <div class="container">
      <div class="together__wrapper wrapper">

        <div class="together__text">
          <h3 class="together__title">
            {{title}}
          </h3>
          <p class="together__descrption">
            {{text}}
          </p>
        </div>
        
        <div class="together__columns-container">
          <div v-for="column in columns" :key="column.id" class="together__column">
            
            <div class="together__icon">
              <img :src="require(`../assets/images/together/${column.img}`)">
            </div>
            <h6>{{column.text}}</h6>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Together',
  props: {
    title: String,
    text: String,
    columns: Array
  }
}
</script>