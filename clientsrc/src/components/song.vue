<template>
  <div class="col-12 song">
    <div class="row bg-pers p-3">
      <div class="col-12 text-center pb-3">
        <button class="btn btn-sm btn-primary">recommend to...</button>
        <button class="btn btn-sm btn-secondary" @click="addToFavorites">add to favorites</button>
      </div>
      <div class="col-4 text-center">
        <img :src="songData.albumArtSmall" alt />
      </div>
      <div class="col-8 text-left">
        <p>
          <b>{{songData.title}}</b>
        </p>
        <p>{{songData.artist}}</p>
        <p>{{songData.album}}</p>
      </div>
      <div class="col-12">
        <audio controls>
          <source :src="songData.preview" type="audio/ogg" />
        </audio>

        <!-- {{songData.preview}} -->
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <br />
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "song",
  props: ["songData"],
  data() {
    return {
      newFavorite: {}
    };
  },
  computed: {
    songs() {
      return this.$store.state.searchedSongs;
    },
    profile() {
      return this.$store.state.profile;
    }
  },
  methods: {
    addToFavorites() {
      // let who = this.profile.email;
      // let trackId = this.$props.songData.id;

      this.newFavorite = {
        trackId: this.$props.songData.id,
        creatorEmail: this.profile.email
      };
      this.$store.dispatch("addToFavorites", this.newFavorite);
    }
  },
  components: {}
};
</script>


<style scoped>
.bg-pers {
  background-color: rgba(162, 51, 218, 0.7);
}
</style>