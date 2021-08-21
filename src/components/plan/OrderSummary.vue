<template>
  <div class="order-summary--container">
    <p class="information--text">Order Summary</p>
    <OrderSummaryText :textColor="'fefcf7'" />
  </div>
</template>

<script>
import OrderSummaryText from "./OrderSummaryText.vue";
export default {
  components: { OrderSummaryText },
  name: "OrderSummary",
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/base.scss";
@import "@/assets/styles/components/plan/order-summary.scss";
</style>
