<template>
  <div v-if="show === true" class="modal--container" @click="closeModal">
    <div class="modal">
      <h3>{{ title }}</h3>

      <div class="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",

  props: {
    show: { Boolean, default: false },
    title: { String },
  },

  methods: {
    closeModal(event) {
      if (event.target.className === "modal--container") {
        this.$emit("close-modal");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/base.scss";
@import "@/assets/styles/components/shared/modal.scss";
</style>
