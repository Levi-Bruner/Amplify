<template>
  <div class="component">Recommends PAge</div>
</template>


<script>
export default {
  name: "component",
  data() {
    return {};
  },
  computed: {
    recommendedSongs() {
      return this.$store.state.recommendedSongs;
    }
  },
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>