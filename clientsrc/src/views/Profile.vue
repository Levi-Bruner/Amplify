<template>
  <div class="container-fluid about text-center">
    <h1>Welcome {{ profile.name }}</h1>
    <img class="rounded" :src="profile.picture" alt />
    <p>{{ profile.email }}</p>

    <div id="search" class="row">
      <div class="col-12">
        <p>search here:</p>
        <form class="row" @submit.prevent="searchiTunes">
          <input class type="text" placeholder="search for tracks" v-model="query" />
          <button class type="submit">Search</button>
        </form>
      </div>
      <!-- end row id search -->
    </div>
    <!-- end row -->
  </div>
</template>

<script>
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
  }
};
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
