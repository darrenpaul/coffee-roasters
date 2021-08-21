<template>
  <div class="about">
    <Hero
      :backgroundImage="hero.backgroundImage"
      :containerHeight="hero.containerHeight"
      :title="hero.title"
      :description="hero.description"
    >
    </Hero>

    <Commitment />

    <Quality />

    <Headquarters />
  </div>
</template>

<script>
// Components
import Hero from "@/components/shared/Hero.vue";
import Commitment from "@/components/about/Commitment.vue";
import Quality from "@/components/about/Quality.vue";
import Headquarters from "@/components/about/Headquarters.vue";

export default {
  name: "About",

  components: { Hero, Commitment, Quality, Headquarters },

  data() {
    return {
      hero: {
        backgroundImage: require("@/assets/images/image-hero-whitecup.jpg"),
        containerHeight: "400px",
        title: "About Us",
        description:
          "Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/base.scss";
@import "@/assets/styles/views/about.scss";
</style>
