<template>
  <div class="product">
    <img class="product__image" :src="data.image" alt />
    <div class="product__content">
      <h2 class="product__title">{{data.name}}</h2>
      <p class="product__description">{{data.description}}</p>
      <div class="product__summary">
        <div>
          <label for="quantity">QUANTITY</label>
          <input
            type="number"
            name="quantity"
            id="quantity"
            value="1"
            min="1"
            @change="changeQuantity"
          />
        </div>
        <div>
          <label for="format">FORMAT</label>
          <select name="format" id="format" @change="changeFormat">
            <option value="physical">Physical copy</option>
            <option value="digital">Digital copy (.jpg)</option>
          </select>
        </div>
        <div class="product__price">${{(quantity * data.prices[format]).toFixed(2)}}</div>
        <button
          :class="'product__button snipcart-add-item ' + physicalButtonClasses"
          :data-item-id="data.id"
          :data-item-price="data.prices.physical"
          data-item-url="/"
          :data-item-description="data.description"
          :data-item-image="data.image"
          :data-item-name="data.name"
          :data-item-quantity="quantity"
        >Add to cart</button>
        <button
          :class="'product__button snipcart-add-item ' + digitalButtonClasses"
          :data-item-id="`${data.id}-digital`"
          :data-item-price="data.prices.digital"
          data-item-url="/"
          :data-item-description="data.description"
          :data-item-image="data.image"
          :data-item-name="`${data.name} (.jpg)`"
          :data-item-quantity="quantity"
          :data-item-file-guid="data.fileGuid"
        >Add to cart</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { ProductPrices, Product } from "../assets/products";

enum Format {
  Physical = "physical",
  Digital = "digital"
}

export default Vue.extend({
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
    }
  },
  props: ["data"]
});
</script>