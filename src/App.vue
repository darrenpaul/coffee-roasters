<template>
  <section>
    <Navigation />
    <router-view />
    <Footer />
  </section>
</template>

<script>
// Components
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "CoffeeRoasters",

  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
      this.$store.dispatch("settings/SET_SCREEN_WIDTH", this.windowWidth);
    };
  },

  components: { Navigation, Footer },
};
</script>

<style lang="scss">
@import "@/assets/styles/base.scss";
</style>
