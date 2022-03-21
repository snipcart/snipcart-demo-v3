<template>
  <div class="index">
    <Notice :title="$t('notice')" />
    <Header :title="$t('title')" />
    <div class="index__gallery">
      <template v-for="(product, index) in products">
        <Product :data="product" :key="index" />
      </template>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import i18n from 'vue-i18n';
import Header from "~/components/Header.vue";
import Notice from "~/components/Notice.vue";
import Product from "~/components/Product.vue";
import Footer from "~/components/Footer.vue";

import ProductsEn from "~/assets/products-en";
import ProductsFr from "~/assets/products-fr";

export default Vue.extend({
  components: {
    Header,
    Notice,
    Product,
    Footer,
  },
  head() {
    return {
      title: this.$i18n.t('full_title').toString()
    };
  },
  async asyncData({ i18n }) {
    return {
      products: i18n.locale == 'fr' ? ProductsFr : ProductsEn
    };
  },
});
</script>

<style lang="scss">

</style>
