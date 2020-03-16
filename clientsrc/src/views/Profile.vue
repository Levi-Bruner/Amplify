<template>
  <div class="container-fluid about text-light">
    <div class="row justify-content-between pt-2">
      <div class="col-3">
        <i class="icon-large far fa-bell fa-3x"></i>
      </div>
    </div>
    <div class="col-12 text-center" style="padding-top: 4em;">
      <h3 class="text-light">
        Welcome
        <span style="color: purple; text-decoration: underline;">{{ profile.username }}</span>
      </h3>
      <br />
      <img class="rounded text-center" style="display: inline-flex;
}" :src="profile.picture" alt />
      <p>{{ profile.email }}</p>
      <div class="col-3">
        <p>Score#</p>
      </div>
    </div>

    <div class="col-12 text-center">
      <div id="search" class="row" style="padding-top: 2em;
}">
        <div class="col-12 justify-content-center">
          <form class="row justify-content-center" @submit.prevent="searchiTunes">
            <input
              class
              type="text"
              style="height: 4em;
    width: -webkit-fill-available;"
              placeholder="Search For Tracks..."
              v-model="query"
            />
            <button
              class="btn btn-outline-success"
              style="width: -webkit-fill-available;
}"
              type="submit"
            >Search</button>
          </form>
        </div>
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
