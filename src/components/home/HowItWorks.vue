<template>
  <div class="screen-height--container">
    <div class="how-it-works--container">
      <div class="content--container">
        <h4>How it works</h4>
      </div>

      <StepDecorator />

      <div class="simple--cards">
        <SimpleCard
          v-for="(item, index) in collection"
          :key="index"
          :title="item.title"
          :description="item.description"
          ><h1>{{ `0${index + 1}` }}</h1></SimpleCard
        >
      </div>

      <button>Create your plan</button>
    </div>
  </div>
</template>

<script>
// Components
import SimpleCard from "@/components/shared/SimpleCard.vue";
import StepDecorator from "@/components/shared/StepDecorator.vue";

export default {
  name: "HowItWorks",

  components: { SimpleCard, StepDecorator },

  data() {
    return {
      collection: [
        {
          title: "Pick your coffee",
          description:
            "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.",
        },
        {
          title: "Choose the frequency",
          description:
            "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.",
        },
        {
          title: "Receive and enjoy!",
          description:
            "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/base.scss";
@import "@/assets/styles/components/home/how-it-works.scss";
@import "@/assets/styles/components/shared/simple-card.scss";
</style>
