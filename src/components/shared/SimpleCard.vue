<template>
  <div class="simple--card">
    <slot name="subject"></slot>
    <slot name="title"></slot>
    <p v-html="description"></p>
  </div>
</template>

<script>
export default {
  name: "SimpleCard",

  props: {
    description: { type: String },
    textColor: { type: String },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/base.scss";
@import "@/assets/styles/components/shared/simple-card.scss";
</style>
