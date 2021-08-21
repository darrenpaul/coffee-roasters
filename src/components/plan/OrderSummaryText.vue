<template>
  <p class="text" :style="`color: #${textColor}`">
    “I drink my coffee using <mark>{{ brew }}</mark
    >, with a <mark>{{ $store.getters["blend/GET"] }}</mark> type of bean.
    <mark>{{ $store.getters["quantity/GET"] }}</mark> ground ala
    <mark>{{ $store.getters["grind/GET"] }}</mark
    >, send to me <mark>{{ $store.getters["delivery/GET"] }}</mark
    >.”
  </p>
</template>

<script>
export default {
  name: "OrderSummaryText",

  props: {
    textColor: { String },
  },

  computed: {
    brew() {
      const value = this.$store.getters["brew/GET"];
      if (value) return `${value}s`;
      return "";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/base.scss";
@import "@/assets/styles/components/plan/order-summary.scss";
</style>
