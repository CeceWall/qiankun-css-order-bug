<template>
  <div class="about" ref="page">
    <h1>This is an about page</h1>
    <span>my height is {{height}}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      height: "0px"
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.height = window.getComputedStyle(this.$refs.page).height;
    });
  }
};
</script>
<style scoped>
.about {
  font-size: 50px;
  height: 300px;
}
</style>
