<template>
  <div class="component">Favorites Page</div>
</template>


<script>
export default {
  name: "component",
  data() {
    return {};
  },
  computed: {
    favorites() {
      return this.$store.state.favorites;
    }
  },
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>