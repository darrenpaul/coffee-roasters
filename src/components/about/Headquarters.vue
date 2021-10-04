<template>
  <div class="headquarters--container">
    <div class="content--container">
      <h4>Our headquarters</h4>
    </div>

    <div class="simple--cards">
      <SimpleCard
        v-for="(item, index) in collection"
        :key="index"
        :title="item.title"
        :description="item.description"
      >
        <template v-slot:subject>
          <img class="w-16 h-16" :src="item.image" alt="country"
        /></template>
      </SimpleCard>
    </div>
  </div>
</template>

<script>
// Components
import SimpleCard from "@/components/shared/SimpleCard.vue";
export default {
  name: "HowItWorks",

  components: { SimpleCard },

  data() {
    return {
      collection: [
        {
          title: "United Kingdom",
          description:
            "68 Asfordby Rd<br />Alcaston<br />SY6 1YA<br />+44 1241 918425",
          image: require("@/assets/images/about/desktop/illustration-uk.svg"),
        },
        {
          title: "Canada",
          description:
            "1528  Eglinton Avenue<br />Toronto<br />Ontario M4P<br />+1 416 485 2997",
          image: require("@/assets/images/about/desktop/illustration-canada.svg"),
        },
        {
          title: "Australia",
          description:
            "36 Swanston Street<br />Kewell<br />Victoria<br />+61 4 9928 3629",
          image: require("@/assets/images/about/desktop/illustration-australia.svg"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/base.scss";
@import "@/assets/styles/components/shared/simple-card.scss";
</style>
