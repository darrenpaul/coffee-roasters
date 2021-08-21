<template>
  <div class="plan--navigation">
    <button
      v-for="(item, index) in links"
      :key="index"
      @click="() => scrollToAnchor(item.anchor)"
    >
      0{{ index + 1 }} {{ item.name }}
    </button>
  </div>
</template>

<script>
export default {
  name: "PlanNavigation",
  data() {
    return {
      links: [
        { name: "Preferences", anchor: "preferences" },
        { name: "Bean Type", anchor: "bean-type" },
        { name: "Quantity", anchor: "quantity" },
        { name: "Grind Option", anchor: "grind-option" },
        { name: "Deliveries", anchor: "deliveries" },
      ],
    };
  },

  methods: {
    scrollToAnchor(anchor) {
      location.hash = `#${anchor}`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/base.scss";
@import "@/assets/styles/components/plan/plan-navigation.scss";
</style>
