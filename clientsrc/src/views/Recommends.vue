<template>
  <div class="container-fluid">
    Recommends Page
    <div class="row justify-content-center">
      <song v-for="song in recommendedSongs" :key="song.id" :songData="song" />
    </div>
  </div>
</template>


<script>
import song from "../components/recSong";
export default {
  name: "Recommends",
  mounted() {
    return this.$store.dispatch("getRecommends");
  },
  data() {
    return {};
  },
  computed: {
    recommendedSongs() {
      return this.$store.state.recommendedSongs;
    }
  },
  methods: {},
  components: {
    song
  }
};
</script>


<style scoped>
</style>