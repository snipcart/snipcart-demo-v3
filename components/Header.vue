<template>
  <div class="header">
    <div class="header__container">
      <nuxt-link class="header__link header__left" to="/">
        <Logo class="header__logo" />
        <h1 class="header__title">{{title}}</h1>
      </nuxt-link>

      <div class="header__right">
        <button class="header__button header__account snipcart-customer-signin">
          <div class="header__button-text">{{loggedIn ? "My account" : "Sign In"}}</div>
        </button>
        <button class="header__button header__checkout snipcart-checkout">
          <Checkout />
          <span class="header__button-text header__price snipcart-total-price"></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Checkout from "~/components/icons/Checkout.vue";
import Logo from "~/components/icons/Logo.vue";

declare var Snipcart: any;

export default Vue.extend({
  data: function() {
    return { loggedIn: false };
  },
  components: {
    Checkout,
    Logo
  },
  props: ["title"],
  created() {
    if (typeof window === "undefined") return; // template rending

    document.addEventListener("snipcart.ready", async () => {
      Snipcart.events.on("customer.signedin", (customer: any) => {
        this.loggedIn = true;
      });

      Snipcart.events.on("customer.signedout", () => {
        this.loggedIn = false;
      });

      await Snipcart.ready;

      this.loggedIn =
        Snipcart.store.getState().customer.status === "SignedIn"
          ? (this.loggedIn = true)
          : (this.loggedIn = false);
    });
  }
});
</script>
