<template>
  <section class="contact section-padding">
    <div class="container">
      <div class="wrapper">
        <div class="contact__text">
          <h3 class="contact__title">
            {{title}}
          </h3>
          <p class="contact__description">
            {{text}}
          </p>
        </div>

        <div class="contact__outer">
          <button class="contact__button contact__button--contact">
            Contact
          </button>
          <button class="contact__button btn-book-now">
            Book now
          </button>

        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact',
  props: {
    title: String,
    text: String
  }
}
</script>