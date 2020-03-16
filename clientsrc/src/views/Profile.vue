<template>
  <div class="container-fluid about text-center text-light">
    <div class="row justify-content-between pt-2">
      <div class="col-3">
        <p>Score# {{profile.positiveRecommend}}, {{profile.totalRecommends}}</p>
      </div>
      <div class="col-3">
        <i class="icon-large far fa-bell fa-3x"></i>
      </div>
    </div>
    <h1 class="text-light">Welcome {{ profile.name }}</h1>
    <img class="rounded" :src="profile.picture" alt />
    <p>{{ profile.email }}</p>

    <div id="search" class="row">
      <div class="col-12 justify-content-center">
        <p>search here...</p>
        <form class="row justify-content-center" @submit.prevent="searchiTunes">
          <input class type="text" placeholder="search for tracks" v-model="query" />
          <button class="btn btn-secondary" type="submit">Search</button>
        </form>
      </div>
    </div>

    <div id="search-results" class="row justify-content-center">
      <song v-for="song in searchedSongs" :key="song.id" :songData="song" />
    </div>
  </div>
</template>

<script>
import song from "../components/song";
export default {
  name: "Profile",
  mounted() {
    return this.$store.dispatch("getScoreVariables");
  },
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
.my-img {
  max-width: 70%;
}
</style>
