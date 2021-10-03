<template>
  <div class="navigation">
    <div class="branding">
      <a href="/">
        <img src="@/assets/images/shared/desktop/logo.svg" alt="" />
      </a>
    </div>

    <div class="toggle">
      <button @click="toggleMobileMenu">
        <font-awesome-icon icon="bars" />
      </button>
    </div>

    <div :class="[linksClass]">
      <a v-for="link in links" :key="link.name" :href="link.url">
        {{ link.text }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "DesktopNavigation",

  data() {
    return {
      mobileMenuOpen: false,
      links: [
        { name: "home", text: "Home", url: "/" },
        { name: "about", text: "About Us", url: "/about" },
        { name: "plan", text: "Create your plan", url: "/plan" },
      ],
    };
  },

  computed: {
    screenWidth() {
      return this.$store.getters["settings/GET_SCREEN_WIDTH"];
    },

    linksClass() {
      if (this.screenWidth <= 375 && this.mobileMenuOpen === true) {
        return "mobile--menu";
      }
      return "links";
    },
  },

  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/base.scss";
@import "@/assets/styles/components/navigation.scss";
</style>
