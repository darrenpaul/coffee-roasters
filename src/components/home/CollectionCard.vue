<template>
  <div class="collection-card">
    <img :src="require(`@/assets/images/${imagePath}`)" :alt="imageAlt" />
    <div class="group">
      <h4>{{ title }}</h4>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CollectionCard",

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
@import "@/assets/styles/components/home/collection.scss";
</style>
