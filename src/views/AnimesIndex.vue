<script>
import axios from "axios";
export default {
  data: function () {
    return {
      animes: [],
    };
  },
  created: function () {
    this.indexAnimes();
  },
  methods: {
    indexAnimes: function () {
      axios.get("/animes.json").then((response) => {
        console.log("animes index", response);
        this.animes = response.data;
      });
    },
  },
};
</script>

<template>
  <div class="anime-index">
    <h1>All Anime</h1>
    <div v-for="anime in animes" v-bind:key="anime.id">
      <h2>{{ anime.name }}</h2>
      <img v-bind:src="anime.image_url" v-bind:alt="anime.name" />
      <p>Description: {{ anime.description }}</p>
      <p>Seasons: {{ anime.seasons }}</p>
      <p>Episodes: {{ anime.episode }}</p>
      <p>Dubbed: {{ anime.dub }}</p>
      <router-link v-bind:to="`/animes/${anime.id}`">More details</router-link>
    </div>
  </div>
</template>

<style></style>
