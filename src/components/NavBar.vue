<template>
  <header class="header">
    <div class="header__container">
      <div class="header__wrapper">
        <HeaderLogo />
        <nav class="nav">
          <NavList 
           v-bind:items="items" 
           />
        </nav>
        <button class="header__button">
          {{buttonText}}
        </button>
        <div class="mobile-nav">
          <div class="burger-buttons">
            <div class="menu-burger" v-if="!show" v-on:click="show = !show" >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"/></svg>
            </div>
            <div class="menu-close" v-else v-on:click="show = !show" >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M376.6 427.5c11.31 13.58 9.484 33.75-4.094 45.06c-5.984 4.984-13.25 7.422-20.47 7.422c-9.172 0-18.27-3.922-24.59-11.52L192 305.1l-135.4 162.5c-6.328 7.594-15.42 11.52-24.59 11.52c-7.219 0-14.48-2.438-20.47-7.422c-13.58-11.31-15.41-31.48-4.094-45.06l142.9-171.5L7.422 84.5C-3.891 70.92-2.063 50.75 11.52 39.44c13.56-11.34 33.73-9.516 45.06 4.094L192 206l135.4-162.5c11.3-13.58 31.48-15.42 45.06-4.094c13.58 11.31 15.41 31.48 4.094 45.06l-142.9 171.5L376.6 427.5z"/></svg>
            </div>
          </div>
          <NavList 
           v-bind:items="items" 
           v-if="show"
           class="mobile-nav"
           />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import HeaderLogo from './HeaderLogo'
import NavList from './NavList'

export default {
  name: 'NavBar',
  components: {
    HeaderLogo,
    NavList,
  },
  data() {
    return {
      items: [
        'Start',
        'Contact',
        'Our history',
      ],
      buttonText: 'Book now',
      show: false
    }
  }
}
</script>
