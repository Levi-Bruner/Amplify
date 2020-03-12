<template>
  <div class="component text-center">
    <h1>My Favorites</h1>
    <songs v-for="song in favorites" :key="song.id" :songData="song" />
  </div>
</template>


<script>
import songs from "../components/favSong";
export default {
  name: "Favorites",
  mounted() {
    return this.$store.dispatch("getFavoritesByEmail");
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


<style>
h5 {
  color: white;
}
</style>