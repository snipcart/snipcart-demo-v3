<template>
  <div class="notice">
    <div class="notice__content">
      <a href="https://www.snipcart.com" class="notice__link">← Snipcart.com</a>
      <div class="notice__title">{{title}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Back from "~/components/icons/Back.vue";

export default Vue.extend({
  components: {
    Back
  },
  props: ["title"]
});
</script>