<template>
  <div
    class="hero--container"
    :style="{
      height: `${containerHeight}`,
      'background-image': `url(${backgroundImage})`,
      borderRadius: `${borderRadius}px`,
    }"
  >
    <div class="inner--content">
      <h2 v-html="title"></h2>

      <p v-html="description"></p>

      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",

  props: {
    backgroundImage: { type: String, default: "image-hero-coffeepress.jpg" },
    borderRadius: { type: Number, default: 12 },
    containerHeight: { type: String, default: "500px" },
    title: { type: String, default: "" },
    description: { type: String, default: "" },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/base.scss";
@import "@/assets/styles/components/shared/hero.scss";
</style>
