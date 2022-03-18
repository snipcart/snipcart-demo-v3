<template>
  <div class="footer">
    <div class="footer__container">
      <div class="footer__copy">{{$t('footer_text')}}</div>
      <div class="footer__socials">
        <a href="https://twitter.com/snipcart">
          <Twitter class="footer__icon" />
        </a>
        <a href="https://www.facebook.com/Snipcart/">
          <Facebook class="footer__icon" />
        </a>
        <a href="https://github.com/snipcart/snipcart-demo-v3">
          <Github class="footer__icon" />
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Twitter from "~/components/icons/Twitter.vue";
import Github from "~/components/icons/Github.vue";
import Facebook from "~/components/icons/Facebook.vue";

export default Vue.extend({
  components: {
    Twitter,
    Github,
    Facebook
  }
});
</script>
