<template>
  <div>
    <nuxt />
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
