<template>
  <div class="flex flex-col gap-12">
    <Hero
      :containerHeight="'600px'"
      :backgroundImage="platformImage"
      :title="hero.title"
      :description="hero.description"
    >
      <div class="block">
        <button
          class="
            bg-app-green-400
            text-app-orange-100
            px-8
            py-4
            rounded
            font-fraunces font-bold
          "
        >
          Create your plan
        </button>
      </div>
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
        title: "Great coffee<br />made simple.",
        description:
          "Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters<br />delivered directly to your door, at your schedule.",
      },
    };
  },

  computed: {
    screenWidth() {
      return this.$store.getters["settings/GET_SCREEN_WIDTH"];
    },

    platformImage() {
      if (this.screenWidth <= 375) {
        return require("@/assets/images/home/mobile/image-hero-coffeepress.jpg");
      } else if (this.screenWidth <= 768) {
        return require("@/assets/images/home/tablet/image-hero-coffeepress.jpg");
      }
      return require("@/assets/images/home/desktop/image-hero-coffeepress.jpg");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/base.scss";
@import "@/assets/styles/views/home.scss";
</style>
