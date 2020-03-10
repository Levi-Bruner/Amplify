<template>
  <div class="col-12 song">
    <div class="row bg-info p-3">
      <div class="col-4">
        <img :src="songData.albumArtSmall" alt />
      </div>
      <div class="col-4">
        <p>{{songData.title}}</p>
        <p>{{songData.artist}}</p>
        <p>{{songData.album}}</p>
      </div>
      <div class="col-4">sample player</div>
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