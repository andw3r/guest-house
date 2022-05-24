<template>
  <section class="guests section-padding">
    <div class="container">
      <div class="wrapper">
        <div class="guests__text">
          <h2 class="guests__title">
            {{title}}
          </h2>
          <p class="guests__description">
            {{text}}
          </p>
        </div>

        <div class="guests__reviews-wrapper">
          <div class="review" v-for="review in reviews" :key="review.id">
            <h3 class="review__title">{{review.title}}</h3>
            <p class="review__text">{{review.text}}</p>
            <p class="review__author">{{review.author}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Guests',
  props: {
    title: String,
    text: String,
    reviews: Array
  }
}
</script>
