<template>
  <div class="product">
    <img class="product__image" :src="data.image" alt />
    <div class="product__content">
      <h2 class="product__title">{{data.name}}</h2>
      <p class="product__description">{{data.description}}</p>     
      <product-buy-button :product="data" v-if="!hasPlans"></product-buy-button>
      <subscription-buy-button :product="data" v-else></subscription-buy-button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProductBuyButton from './ProductBuyButton.vue';
import SubscriptionBuyButton from './SubscriptionBuyButton.vue';

enum Format {
  Physical = "physical",
  Digital = "digital"
}

export default Vue.extend({
  components: { ProductBuyButton, SubscriptionBuyButton },
  data: function() {
    return {
      quantity: 1,
      format: Format.Physical
    };
  },
  methods: {
    changeQuantity: function(event: Event) {
      this.quantity = Number((event.target as HTMLInputElement).value);
    },
    changeFormat: function(event: Event) {
      this.format = (event.target as HTMLSelectElement).value as Format;
    }
  },
  computed: {
    physicalButtonClasses(): string {
      return this.format === Format.Physical ? "" : "product__button--hide";
    },
    digitalButtonClasses(): string {
      return this.format === Format.Digital ? "" : "product__button--hide";
    },
    hasPlans(): boolean {
      return this.data.plans.length > 0;
    }
  },
  props: ["data"]
});
</script>