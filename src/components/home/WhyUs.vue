<template>
  <div class="screen-height--container">
    <div class="why-us--container">
      <div class="content--container">
        <h2>Why choose us?</h2>
        <p>
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
      </div>
      <div class="why-us--cards">
        <div class="cards">
          <WhyUsCard
            v-for="(item, index) in collection"
            :key="index"
            :imagePath="item.image"
            :title="item.title"
            :description="item.description"
          />
        </div>

        <div class="inner-cover"></div>
      </div>
    </div>
  </div>
</template>

<script>
// Components
import WhyUsCard from "@/components/home/WhyUsCard.vue";
export default {
  name: "WhyUs",

  components: { WhyUsCard },

  data() {
    return {
      collection: [
        {
          image: "home/desktop/icon-coffee-bean.svg",
          title: "Best Quality",
          description:
            "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
        },
        {
          image: "home/desktop/icon-gift.svg",
          title: "Exclusive benefits",
          description:
            "Special offers and swag when you subscribe, including 30% off your first shipment.",
        },
        {
          image: "home/desktop/icon-truck.svg",
          title: "Free shipping",
          description:
            "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/base.scss";
@import "@/assets/styles/components/home/why-us.scss";
</style>
