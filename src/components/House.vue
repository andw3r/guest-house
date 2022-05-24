<template>
  <section class="house section-padding">
    <div class="container">
      <div class="house__wrapper wrapper">
        <div class="house__description">
          <p class="house__text">
            {{firstText}}
          </p>
        </div>

        <div class="house__description">
          <p class="house__text">
            {{secondText}}
          </p>
          <button class="house__button btn-book-now">
            Book now
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'House',
  props: [
    'firstText',
    'secondText',
  ]
}
</script>