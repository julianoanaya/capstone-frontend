<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newAnimeParams: {},
      errors: [],
    };
  },
  created: function () {},
  methods: {
    createAnime: function () {
      axios
        .post("/animes", this.newAnimeParams)
        .then((response) => {
          console.log("anime create", response);
          this.$router.push("/animes");
        })
        .catch((error) => {
          console.log("anime create error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<template>
  <div class="anime-new">
    <h1>New Anime</h1>
    <form v-on:submit.prevent="createAnime()">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <p>Name:</p>
      <input type="text" v-model="newAnimeParams.name" />
      <p>Description:</p>
      <input type="text" v-model="newAnimeParams.description" />
      <p>Seasons:</p>
      <input type="text" v-model="newAnimeParams.seasons" />
      <p>Episodes:</p>
      <input type="text" v-model="newAnimeParams.episode" />
      <p>Dubbed:</p>
      <input type="text" v-model="newAnimeParams.dub" />
      <p>Image Url:</p>
      <input type="text" v-model="newAnimeParams.image_url" />
      <p><input type="submit" value="Create" /></p>
    </form>
  </div>
</template>
