<template>
  <div class="commitment">
    <img :src="platformImage" alt="commitment" />

    <div class="content">
      <h3>Our commitment</h3>
      <p>
        We’re built on a simple mission and a commitment to doing good along the
        way. We want to make it easy for you to discover and brew the world’s
        best coffee at home. It all starts at the source. To locate the specific
        lots we want to purchase, we travel nearly 60 days a year trying to
        understand the challenges and opportunities in each of these places. We
        collaborate with exceptional coffee growers and empower a global
        community of farmers through with well above fair-trade benchmarks. We
        also offer training, support farm community initiatives, and invest in
        coffee plant science. Curating only the finest blends, we roast each lot
        to highlight tasting profiles distinctive to their native growing
        region.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Commitment",

  computed: {
    screenWidth() {
      return this.$store.getters["settings/GET_SCREEN_WIDTH"];
    },

    platformImage() {
      if (this.screenWidth <= 535) {
        return require("@/assets/images/about/mobile/image-commitment.jpg");
      } else if (this.screenWidth <= 768) {
        return require("@/assets/images/about/tablet/image-commitment.jpg");
      }
      return require("@/assets/images/about/desktop/image-commitment.jpg");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/base.scss";
@import "@/assets/styles/components/about/commitment.scss";
</style>
