<template>
  <footer class="footer section-padding">
    <div class="container">
      <div class="footer__wrapper">
        <div class="footer__inner">
          <div class="footer__pages">
            <h6>Pages</h6>
            <a v-for="item in items" :key="item.id" href="#">{{item.link}}</a>
          </div>
          
          <div class="footer__media">
            <h6>Social Media</h6>
            <div class="footer__media-icons">
              <a href="#"><img src="@/assets/images/media/airbnb.svg" alt=""></a>
              <a href="#"><img src="@/assets/images/media/facebook.svg" alt=""></a>
              <a href="#"><img src="@/assets/images/media/instagram.svg" alt=""></a>
            </div>
          </div>
          <div class="footer__form">
            <h6>
              Newsletter
            </h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            </p>
            <EmailInput />
          </div>
        </div>

        <div class="footer__outer">
          <div class="footer__image">
            <img src="@/assets/images/logo.svg" alt="">
          </div>
          <p class="footer__copyright">© Guest House, LLC. All rights reserved. Powered by Webflow</p>
          <p>+47 (0) 702 88 12 34 example@webflow.io Klubbvika 12, 8310 Kabelvag, Norway</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import EmailInput from "./UI/EmailInput"

export default {
 name: 'Footer',
 components: { EmailInput }, 
 props: {
   items: Array
 }

}

</script>
