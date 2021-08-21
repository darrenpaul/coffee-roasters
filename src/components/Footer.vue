<template>
  <footer>
    <div class="group">
      <div class="branding--image">
        <a href="/">
          <img src="@/assets/images/logo-footer.svg" alt="" />
        </a>
      </div>

      <div class="links">
        <a v-for="link in links" :key="link.name" class="link" :href="link.url">
          {{ link.text }}
        </a>
      </div>
    </div>

    <div class="social--links">
      <a href=""
        ><img src="@/assets/images/social/icon-facebook.svg" alt="facebook"
      /></a>
      <a href=""
        ><img src="@/assets/images/social/icon-twitter.svg" alt="twitter"
      /></a>
      <a href=""
        ><img src="@/assets/images/social/icon-instagram.svg" alt="instagram"
      /></a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",

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
@import "@/assets/styles/components/footer.scss";
</style>
