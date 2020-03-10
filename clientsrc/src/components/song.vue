<template>
  <div class="col-12 song">
    <div class="row bg-info p-3">
      <div class="col-12 text-center pb-3">
        <button>recommend to...</button>
        <button>add to favorites</button>
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
    return {};
  },
  computed: {
    songs() {
      return this.$store.state.searchedSongs;
    }
  },
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>