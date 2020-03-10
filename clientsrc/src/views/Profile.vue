<template>
  <div class="container-fluid about text-center">
    <div class="row justify-content-between">
      <div class="col-3">
        <p>Score#</p>
      </div>
      <div class="col-3">
        <p>maybe notification</p>
      </div>
    </div>
    <h1>Welcome Username {{ profile.name }}</h1>
    <img class="rounded" :src="profile.picture" alt />
    <p>{{ profile.email }}</p>

    <div id="search" class="row">
      <div class="col-12 text-left">
        <p>search here to make a recommendation:</p>
        <form class="row" @submit.prevent="searchiTunes">
          <input class type="text" placeholder="search for tracks" v-model="query" />
          <button class type="submit">Search</button>
        </form>
      </div>
      <!-- end row id search -->
    </div>
    <!-- end row -->

    <div id="search-results" class="row">
      <song v-for="song in searchedSongs" :key="song.id" :songData="song" />
    </div>
  </div>
</template>

<script>
import song from "../components/song";
export default {
  name: "Profile",
  data() {
    return {
      query: ""
    };
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    },
    searchedSongs() {
      return this.$store.state.searchedSongs;
    }
  },
  methods: {
    searchiTunes() {
      this.$store.dispatch("getMusicByQuery", this.query);
    }
  },
  components: {
    song
  }
};
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
