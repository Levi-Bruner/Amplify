<template>
  <div class="component">
    Favorites Page
    <song v-for="song in favorites" :key="song.id" :songData="song" />
  </div>
</template>


<script>
import songs from "../components/song";
export default {
  name: "component",
  mounted() {
    return this.$store.dispatch("getFavoritesbyEmail", this.profile.email);
  },
  data() {
    return {};
  },
  computed: {
    favorites() {
      return this.$store.state.favoriteSongs;
    },
    profile() {
      return this.$store.state.profile;
    }
  },
  methods: {},
  components: {
    songs
  }
};
</script>


<style scoped>
</style>