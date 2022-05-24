<template>
  <NavBar />
  <Hero 
    :mainTitle="hero.mainTitle" 
    :mainSubTitle="hero.mainSubTitle" 
  />
  <Main />

</template>

<script>
// componetns
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Main from './components/Main'

// data
import heroData from '@/assets/data/hero.js'

export default {
  name: 'App',
  components: { NavBar, Hero, Main },
  data() {
    return {
      hero: heroData
    }
  }
}
</script>
