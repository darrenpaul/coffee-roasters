<template>
  <div class="quality">
    <div class="inner-cover">
      <div class="background"></div>
      <img :src="platformImage" alt="quality" />
    </div>

    <div class="content">
      <div class="group">
        <h3>Uncompromising quality</h3>
        <p>
          Although we work with growers who pay close attention to all stages of
          harvest and processing, we employ, on our end, a rigorous quality
          control program to avoid over-roasting or baking the coffee dry. Every
          bag of coffee is tagged with a roast date and batch number. Our goal
          is to roast consistent, user-friendly coffee, so that brewing is easy
          and enjoyable.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Quality",

  computed: {
    screenWidth() {
      return this.$store.getters["settings/GET_SCREEN_WIDTH"];
    },

    platformImage() {
      if (this.screenWidth <= 375) {
        return require("@/assets/images/about/mobile/image-quality.jpg");
      } else if (this.screenWidth <= 768) {
        return require("@/assets/images/about/tablet/image-quality.jpg");
      }
      return require("@/assets/images/about/desktop/image-quality.jpg");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/base.scss";
@import "@/assets/styles/components/about/quality.scss";
</style>
