<template>
    <div class="subscription__summary">
        <div class="subscription__price">
            {{ displayPrice }}
        </div>

        <button
            class="product__button snipcart-add-item"
            :data-item-id="product.id"
            :data-item-price="product.prices.physical"
            data-item-url="https://demo.snipcart.com/"
            :data-item-description="product.description"
            :data-item-image="product.image"
            :data-item-name="product.name"
            v-bind="planData"
            >Subscribe
        </button>
</div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Product, ProductPlan } from '../assets/products';

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
    computed: {
        defaultPlan(): ProductPlan {
            return this.product.plans[0];
        },
        displayPrice(): string {
            return `$${this.defaultPlan.price.toFixed(2)} / ${this.displayFrequency}`;
        },
        displayFrequency(): string {
            switch (this.defaultPlan.frequency) {
                case 'daily':
                    return 'day';
                case 'weekly':
                    return 'week';
                case 'monthly':
                    return 'month';
            }
        },
        planData(): {[key: string]: any} {
            return this.product.plans
                .map((plan, index) => {
                    const i = index+1;

                    const attributes = {
                        [`data-plan${i}-name`]: plan.name,
                        [`data-plan${i}-id`]: plan.id,
                        [`data-plan${i}-frequency`]: plan.frequency,
                        [`data-plan${i}-interval`]: plan.interval,
                        [`data-item-plan${i}-price`]: plan.price,
                    }

                    if (index == 0) {
                        attributes['data-item-selected-plan'] = plan.id;
                    }

                    return attributes;
                })
                .reduce((acc, plan) => {
                    return {
                        ...acc,
                        ...plan
                    };
                }, {});
        }
    }
})
</script>