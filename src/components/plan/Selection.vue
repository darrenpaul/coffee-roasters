<template>
  <div class="selection--container" :id="anchor">
    <div @click="toggleOpen" class="heading--container">
      <h3>
        {{ title }}
      </h3>

      <font-awesome-icon v-if="!isOpen" class="icon" icon="chevron-down" />
      <font-awesome-icon v-if="isOpen" class="icon" icon="chevron-up" />
    </div>

    <div
      class="cards--container"
      :style="{ display: `${isOpen ? 'grid' : 'none'}` }"
    >
      <div
        v-for="(item, index) in items"
        :key="index"
        :class="['card', checkActive() === item.title ? 'active' : '']"
        @click="() => optionSelected(item.title)"
      >
        <h4>{{ item.title }}</h4>
        <p>{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Selection",

  props: {
    title: { String },
    anchor: { String },
    items: { Array },
    checkActive: { Function },
  },

  data() {
    return {
      isOpen: false,
    };
  },

  methods: {
    toggleOpen() {
      this.isOpen = !this.isOpen;
    },

    optionSelected(option) {
      this.$emit("option-selected", option);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/base.scss";
@import "@/assets/styles/components/plan/selection.scss";
</style>
