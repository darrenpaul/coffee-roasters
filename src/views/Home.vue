<template>
  <div class="home">
    <Hero
      :containerHeight="'600px'"
      :backgroundImage="hero.backgroundImage"
      :title="hero.title"
      :description="hero.description"
    >
      <button>Create your plan</button>
    </Hero>
    <Collection />
    <WhyUs />
    <HowItWorks />
  </div>
</template>

<script>
// Components
import Hero from "@/components/shared/Hero.vue";
import Collection from "@/components/home/Collection.vue";
import WhyUs from "@/components/home/WhyUs.vue";
import HowItWorks from "@/components/home/HowItWorks.vue";

export default {
  name: "Home",

  components: { Hero, Collection, WhyUs, HowItWorks },

  data() {
    return {
      hero: {
        backgroundImage: require("@/assets/images/image-hero-coffeepress.jpg"),
        title: "Great coffee<br />made simple.",
        description:
          "Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters<br />delivered directly to your door, at your schedule.",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/base.scss";
@import "@/assets/styles/views/home.scss";
</style>
