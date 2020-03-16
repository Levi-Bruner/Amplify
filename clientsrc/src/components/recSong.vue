<template>
  <div class="col-11 song">
    <div class="row bg-pers p-3">
      <div class="col-12 text-center pb-3">
        <button class="btn btn-sm btn-primary" @click="recommendTo">recommend to...</button>
        <button class="btn btn-sm btn-secondary" @click="addToFavorites">add to favorites</button>
      </div>

      <div class="col-12">
        <br />
      </div>

      <div class="col-4 text-center">
        <img :src="songData.song.albumArtSmall" alt />
      </div>
      <div class="col-8 text-left text-light">
        <p>
          <b>{{songData.song.title}}</b>
        </p>
        <p>{{songData.song.artist}}</p>
        <p>{{songData.song.album}}</p>
      </div>

      <div class="col-12 text-center">
        <audio controls>
          <source :src="songData.song.preview" type="audio/ogg" />
        </audio>
      </div>

      <button class="btn btn-info btn-outline-success text-light col-6" @click="like">Like</button>
      <button class="btn btn-warning btn-outline-danger text-light col-6" @click="mehThis">Meh</button>
      <!-- end row -->
    </div>
    <!-- end row -->

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
  computed: {},
  methods: {
    removeFromFavorites() {
      this.$store.dispatch("deleteFavorite", this.songData.id);
    },
    addToFavorites() {
      this.newFavorite = {
        artist: this.songData.song.artist,
        album: this.songData.song.album,
        title: this.songData.song.title,
        preview: this.songData.song.preview,
        price: this.songData.song.price,
        songId: this.songData.song.id,
        albumArt: this.songData.song.albumArt,
        albumArtSmall: this.songData.song.albumArtSmall,
        albumArtLarge: this.songData.song.albumArtLarge
      };
      this.$store.dispatch("addToFavorites", this.newFavorite);
      this.$swal("Success!", "This song is now in your favorites", "success");
    },
    like() {
      this.newFavorite = {
        artist: this.songData.song.artist,
        album: this.songData.song.album,
        title: this.songData.song.title,
        preview: this.songData.song.preview,
        price: this.songData.song.price,
        songId: this.songData.song.id,
        albumArt: this.songData.song.albumArt,
        albumArtSmall: this.songData.song.albumArtSmall,
        albumArtLarge: this.songData.song.albumArtLarge
      };
      this.$store.dispatch("like", this.newFavorite);
    },
    recommendTo() {
      let song = this.songData;
      this.$swal({
        title: "Recommend this song to...",
        input: "email",
        inputPlaceholder: "Enter your friend's email",
        showCloseButton: true
      }).then(email => {
        this.$store.dispatch("recommendTo", { email, song });
      });
    },

    mehThis() {
      this.$swal(
        "Don't Worry!",
        "We won't tell them that you don't care for this song!",
        "info"
      );
      //debugger;
      this.$store.dispatch("deleteRec", this.songData.id);
    }
  },

  components: {}
};
</script>


<style scoped>
.bg-pers {
  background-color: rgba(162, 51, 218, 0.35);
}
</style>