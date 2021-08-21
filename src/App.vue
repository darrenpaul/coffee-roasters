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

  components: { Navigation, Footer },
};
</script>

<style lang="scss">
@import "@/assets/styles/base.scss";
</style>
