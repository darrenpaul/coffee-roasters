<template>
  <div class="desktop--navigation">
    <div class="branding--image">
      <a href="/">
        <img src="@/assets/images/logo.svg" alt="" />
      </a>
    </div>

    <div class="links">
      <a v-for="link in links" :key="link.name" class="link" :href="link.url">
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
      links: [
        { name: "home", text: "Home", url: "/" },
        { name: "about", text: "About Us", url: "/about" },
        { name: "plan", text: "Create your plan", url: "/plan" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/base.scss";
@import "@/assets/styles/components/navigation.scss";
</style>
