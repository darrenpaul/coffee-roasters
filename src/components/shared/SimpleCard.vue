<template>
  <div class="simeple--card">
    <slot></slot>
    <h3>{{ title }}</h3>
    <p v-html="description"></p>
  </div>
</template>

<script>
export default {
  name: "SimpleCard",

  props: {
    title: { type: String },
    description: { type: String },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/base.scss";
@import "@/assets/styles/components/shared/simple-card.scss";
</style>
