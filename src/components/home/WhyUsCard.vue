<template>
  <div class="why-us--card">
    <img :src="require(`@/assets/images/${imagePath}`)" :alt="imageAlt" />
    <div class="card--content">
      <h4>{{ title }}</h4>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "WhyUsCard",

  props: {
    imageClass: { type: String },
    imagePath: { type: String },
    imageAlt: { type: String, default: "Some Image" },
    title: { type: String },
    description: { type: String },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/base.scss";
@import "@/assets/styles/components/home/why-us.scss";
</style>
