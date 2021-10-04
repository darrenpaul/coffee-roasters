<template>
  <div class="flex flex-col gap-32">
    <Hero
      :backgroundImage="platformImage"
      :containerHeight="hero.containerHeight"
      :borderRadius="0"
      :title="hero.title"
      :description="hero.description"
    >
    </Hero>

    <div class="how-it-works--group">
      <StepDecorator />
      <div class="simple--cards">
        <SimpleCard
          v-for="(item, index) in collection"
          :key="index"
          :title="item.title"
          :description="item.description"
          :textColor="'light'"
        >
          <template v-slot:subject>
            <h1>{{ `0${index + 1}` }}</h1>
          </template>
          <template v-slot:title>
            <h3>{{ item.title }}</h3>
          </template>
        </SimpleCard>
      </div>
    </div>

    <div class="plan-builder">
      <PlanNavigation v-if="screenWidth > 768" />
      <div class="selections">
        <Selection
          v-for="(item, index) in selections"
          :key="index"
          :title="item.title"
          :anchor="item.anchor"
          :items="item.items"
          :checkActive="item.getActive"
          v-on:option-selected="(index) => item.callback(index)"
        />
        <OrderSummary />
        <div class="center-container">
          <button class="plan-button" @click="toggleModal">Create plan!</button>
        </div>
      </div>
    </div>

    <Modal
      :show="modalShow"
      v-on:close-modal="toggleModal"
      :title="'Order Summary'"
    >
      <OrderSummaryText :textColor="'83888f'" />

      <p class="information--text">
        Is this correct? You can proceed to checkout or go back to plan
        selection if something is off. Subscription discount codes can also be
        redeemed at the checkout.
      </p>

      <div class="inline--group">
        <h3>$14.00/ mo</h3>
        <button @click="toggleModal">Checkout</button>
      </div>
    </Modal>
  </div>
</template>

<script>
// Components
import Hero from "@/components/shared/Hero.vue";
import SimpleCard from "@/components/shared/SimpleCard.vue";
import StepDecorator from "@/components/shared/StepDecorator.vue";
import PlanNavigation from "@/components/plan/Navigation.vue";
import Selection from "@/components/plan/Selection.vue";
import OrderSummary from "@/components/plan/OrderSummary.vue";
import Modal from "@/components/shared/Modal.vue";
import OrderSummaryText from "@/components/plan/OrderSummaryText.vue";

export default {
  name: "Plan",

  components: {
    Hero,
    SimpleCard,
    StepDecorator,
    PlanNavigation,
    Selection,
    OrderSummary,
    Modal,
    OrderSummaryText,
  },

  data() {
    return {
      modalShow: false,

      hero: {
        containerHeight: "400px",
        title: "Create plan",
        description:
          "Coffee the way you wanted it to be. For coffee delivered tomorrow, or next week. For whatever brew method you use. For choice, for convenience, for quality.",
      },

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

      selections: [
        {
          title: "How do you drink your coffee?",
          anchor: "preferences",
          items: [
            {
              title: "Capsule",
              description:
                "Compatible with Nespresso systems and similar brewers",
            },
            {
              title: "Filter",
              description:
                "For pour over or drip methods like Aeropress, Chemex, and V60",
            },
            {
              title: "Espresso",
              description:
                "Dense and finely ground beans for an intense, flavorful experience",
            },
          ],
          getActive: this.getBrew,
          callback: this.setBrew,
        },
        {
          title: "What type of coffee?",
          anchor: "bean-type",
          items: [
            {
              title: "Single Origin",
              description:
                "Distinct, high quality coffee from a specific family-owned farm",
            },
            {
              title: "Decaf",
              description:
                "Just like regular coffee, except the caffeine has been removed",
            },
            {
              title: "Blended",
              description:
                "Combination of two or three dark roasted beans of organic coffees",
            },
          ],
          getActive: this.getBlend,
          callback: this.setBlend,
        },
        {
          title: "How much would you like?",
          anchor: "quantity",
          items: [
            {
              title: "250g",
              description:
                "Perfect for the solo drinker. Yields about 12 delicious cups.",
            },
            {
              title: "500g",
              description:
                "Perfect option for a couple. Yields about 40 delectable cups.",
            },
            {
              title: "1000g",
              description:
                "Perfect for offices and events. Yields about 90 delightful cups.",
            },
          ],
          getActive: this.getQuantity,
          callback: this.setQuantity,
        },
        {
          title: "Want us to grind them?",
          anchor: "grind-option",
          items: [
            {
              title: "Wholebean",
              description:
                "Best choice if you cherish the full sensory experience",
            },
            {
              title: "Filter",
              description:
                "For drip or pour-over coffee methods such as V60 or Aeropress",
            },
            {
              title: "Cafetiére",
              description:
                "Course ground beans specially suited for french press coffee",
            },
          ],
          getActive: this.getGrind,
          callback: this.setGrind,
        },
        {
          title: "How often should we deliver?",
          anchor: "deliveries",
          items: [
            {
              title: "Every week",
              description:
                "$7.20 per shipment. Includes free first-class shipping.",
            },
            {
              title: "Every 2 weeks",
              description:
                "$9.60 per shipment. Includes free priority shipping.",
            },
            {
              title: "Every month",
              description:
                "$12.00 per shipment. Includes free priority shipping.",
            },
          ],
          getActive: this.getDelivery,
          callback: this.setDelivery,
        },
      ],
    };
  },

  methods: {
    toggleModal() {
      this.modalShow = !this.modalShow;
    },

    setBrew(option) {
      this.$store.dispatch("brew/SET", option);
    },

    getBrew() {
      return this.$store.getters["brew/GET"];
    },

    setBlend(option) {
      this.$store.dispatch("blend/SET", option);
    },

    getBlend() {
      return this.$store.getters["blend/GET"];
    },

    setQuantity(option) {
      this.$store.dispatch("quantity/SET", option);
    },

    getQuantity() {
      return this.$store.getters["quantity/GET"];
    },

    setGrind(option) {
      this.$store.dispatch("grind/SET", option);
    },

    getGrind() {
      return this.$store.getters["grind/GET"];
    },

    setDelivery(option) {
      this.$store.dispatch("delivery/SET", option);
    },

    getDelivery() {
      return this.$store.getters["delivery/GET"];
    },
  },

  computed: {
    screenWidth() {
      return this.$store.getters["settings/GET_SCREEN_WIDTH"];
    },

    platformImage() {
      if (this.screenWidth <= 411) {
        return require("@/assets/images/plan/desktop/image-hero-blackcup.jpg");
      } else if (this.screenWidth <= 768) {
        return require("@/assets/images/plan/desktop/image-hero-blackcup.jpg");
      }
      return require("@/assets/images/plan/desktop/image-hero-blackcup.jpg");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/base.scss";
@import "@/assets/styles/views/plan.scss";
@import "@/assets/styles/components/shared/simple-card.scss";
</style>
