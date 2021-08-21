<template>
  <div class="collection--container">
    <h1>our collection</h1>
    <CollectionCard
      v-for="(item, index) in collection"
      :key="index"
      :imagePath="item.image"
      :title="item.title"
      :description="item.description"
    />
  </div>
</template>

<script>
import CollectionCard from "@/components/home/CollectionCard.vue";
export default {
  name: "Collection",

  components: { CollectionCard },

  data() {
    return {
      collection: [
        {
          image: "collection/image-gran-espresso.png",
          title: "Gran Espresso",
          description:
            "Light and flavorful blend with cocoa and black pepper for an intense experience.",
        },
        {
          image: "collection/image-planalto.png",
          title: "Planalto",
          description:
            "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts.",
        },
        {
          image: "collection/image-piccollo.png",
          title: "Piccollo",
          description:
            "Mild and smooth blend featuring notes of toasted almond and dried cherry.",
        },
        {
          image: "collection/image-danche.png",
          title: "Danche",
          description:
            "Ethiopian hand-harvested blend densely packed with vibrant fruit notes.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/base.scss";
@import "@/assets/styles/components/home/collection.scss";
</style>
