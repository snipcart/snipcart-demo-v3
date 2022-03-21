<template>
    <div class="product__summary">
        <div>
            <label for="quantity">{{$t('quantity')}}</label>
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
          <label for="format">{{$t('format')}}</label>
          <select name="format" id="format" @change="changeFormat">
            <option value="physical">{{$t('physical_copy')}}</option>
            <option value="digital">{{$t('digital_copy')}}</option>
          </select>
        </div>
        
        <div class="product__price">${{(quantity * product.prices[format]).toFixed(2)}}</div>

        <button
            :class="'product__button snipcart-add-item ' + physicalButtonClasses"
            :data-item-id="product.id"
            :data-item-price="product.prices.physical"
            data-item-url="https://demo.snipcart.com/"
            :data-item-description="product.description"
            :data-item-image="product.image"
            :data-item-name="product.name"
            :data-item-quantity="quantity"
            >{{$t('add_to_cart')}}</button>
        <button
          :class="'product__button snipcart-add-item ' + digitalButtonClasses"
          :data-item-id="`${product.id}-digital`"
          :data-item-price="product.prices.digital"
          data-item-url="https://demo.snipcart.com/"
          :data-item-description="product.description"
          :data-item-image="product.image"
          :data-item-name="`${product.name} (.jpg)`"
          :data-item-quantity="quantity"
          :data-item-file-guid="product.fileGuid"
        >{{$t('add_to_cart')}}</button>
</div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Product } from '../assets/products';

enum Format {
  Physical = "physical",
  Digital = "digital"
}

export default Vue.extend({
    props: {
        product: {
            type: Object as PropType<Product>
        }
    },
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
})
</script>
