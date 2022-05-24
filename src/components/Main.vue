<template>
  <main class="main">
    
    <House 
      :firstText="house.firstText" 
      :secondText="house.secondText" 
    />
    
    <Getaway 
      :text="getaway.text"
    />

    <Banner 
      :image="'kitchenimg.png'"
    />

    <Arrangements 
      :title="arrangements.title"
      :text="arrangements.text"
      :columns="arrangements.columns"
    />

    <Escape 
      :title="escape.title"
      :text="escape.text"
      :columns="escape.columns"
    />

    <Guests 
      :title="guests.title"
      :text="guests.text"
      :reviews="guests.reviews"
    />

    <Banner 
      :image="'furniture.png'"
    />

    <Together 
      :title="together.title"
      :text="together.text"
      :columns="together.columns"
    />

    <Contact 
      :title="contact.title"
      :text="contact.text"
    />

    <Footer 
      :items="footer.items"
    />

  </main>
</template>

<script>
// components
import Banner from './UI/Banner'
import House from './House'
import Getaway from './Getaway'
import Arrangements from './Arrangements'
import Escape from './Escape'
import Guests from './Guests'
import Together from './Together'
import Contact from './Contact'
import Footer from './Footer'

// data
import houseData from '@/assets/data/house.js'
import getawayData from '@/assets/data/getaway.js'
import arrangementsData from '@/assets/data/arrangements.js'
import escapesData from '@/assets/data/escape.js'
import guestsData from '@/assets/data/guests.js'
import togetherData from '@/assets/data/together.js'
import contactData from '@/assets/data/contact.js'
import footerData from '@/assets/data/footer.js'

export default {
  name: 'Main',
  components: { Banner, House, Getaway, Arrangements, Escape, Guests, Together, Contact, Footer },
  data() {
    return {
      house: houseData,
      getaway: getawayData,
      arrangements: arrangementsData,
      escape: escapesData,
      guests: guestsData,
      together: togetherData,
      contact: contactData,
      footer: footerData
    }
  }
}
</script>