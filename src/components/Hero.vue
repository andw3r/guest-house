<template>
  <section class="hero">
    <HeroImage :heroImage="heroBackground" />
    <div class="container">
      <div class="hero__wrapper">
        <div class="hero__logo">
          <img :src="heroLogo" />
        </div>
        
        <div class="hero__text">
          <h1 class="hero__title">{{mainTitle}}</h1>
          <h6 class="hero__sub-title">{{mainSubTitle}}</h6>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HeroImage from './HeroImage'
import heroLogo from '@/assets/images/logo.svg'

export default {
  name: 'Hero',
  components: { HeroImage },
  props: [
    'mainTitle',
    'mainSubTitle'
  ],
  data() {
    return {
      heroBackground: 'herobackground.png',
      heroLogo: heroLogo
    }
  }
}
</script>
