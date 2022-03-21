<template>
  <div>
    <nuxt />
    <div
      hidden
      id="snipcart"
      data-api-key="MzMxN2Y0ODMtOWNhMy00YzUzLWFiNTYtZjMwZTRkZDcxYzM4"
      data-config-modal-style="side"
    ></div>
  </div>
</template>

<script lang="ts">

import Vue from "vue";

export default Vue.extend({
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale
      }
    }
  }
})

</script>

<style lang="scss">
@import "assets/scss/_styles.scss";

</style>
