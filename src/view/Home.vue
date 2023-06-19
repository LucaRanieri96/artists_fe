<script>
import axios from "axios";

export default {
  name: "Home",

  data() {
    return {
      base_url: "http://127.0.0.1:8000/",
      artist_url: "api/artists",
      artists: [],
      error: null,
    };
  },

  methods: {
    getArtists(url) {
      axios
        .get(url)
        .then((response) => {
          this.artists = response.data.result;
          console.log(this.artists);
        })
        .catch((error) => {
          this.error = error.message;
        });
    },
  },
  mounted() {
    this.getArtists(this.base_url + this.artist_url);
    console.log(this.artists);
  },
};
</script>

<template>
  <section class="vue- pt-4" v-if="artists">
    <div class="container">
      <div class="row">
        <div class="col-6 g-3" v-for="artist in artists" :key="artist['id']">
          <div class="card">
            <div class="card-body mb-2">
              <h4 class="card-title">Nome: {{ artist.artista }}</h4>
              <h4 class="card-title">Nazionalità: {{ artist.nazionalita }}</h4>
              <h4 class="card-title">Prossimo concerto: {{ artist.prossimo_concerto }}</h4>
              <h4 class="card-title">Ultimo album: {{ artist.ultimo_album }}</h4>
              <h4 class="card-title">Ultimo singolo: {{ artist.ultimo_singolo }}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
h1 {
  font-size: 1.4em;

  span.yellow {
    color: yellow;
    text-decoration: underline;
  }
}
</style>
