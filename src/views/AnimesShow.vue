<script>
import axios from "axios";
export default {
  data: function () {
    return {
      anime: {},
    };
  },
  created: function () {
    axios.get("/animes/" + this.$route.params.id).then((response) => {
      console.log("anime show", response);
      this.anime = response.data;
    });
  },
  methods: {
    destroyAnime: function (anime) {
      axios.delete("/animes/" + anime.id).then((response) => {
        console.log("animes destroy", response);
        this.$router.push("/animes");
      });
    },
  },
};
</script>

<template>
  <div class="animes-show">
    <h2>{{ anime.name }}</h2>
    <img v-bind:src="anime.image_url" v-bind:alt="anime.name" />
    <p>Description: {{ anime.description }}</p>
    <p>Seasons: {{ anime.seasons }}</p>
    <p>Episodes: {{ anime.episode }}</p>
    <p>Dubbed: {{ anime.dub }}</p>
    <p><router-link v-bind:to="`/animes/${anime.id}/edit`">Edit Anime</router-link></p>
    <p><router-link to="/animes">Back to all anime</router-link></p>
    <p><button v-on:click="destroyAnime(anime)">Delete Anime</button></p>
  </div>
</template>
