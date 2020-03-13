<template>
  <div class="container-fluid">
    <div class="row text-center">
      <div class="col-12 p-3">
        <h5>Here is a list of songs your friends think you might like!</h5>
      </div>
    </div>
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