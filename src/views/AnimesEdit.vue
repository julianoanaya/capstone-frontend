<script>
import axios from "axios";
export default {
  data: function () {
    return {
      anime: {},
      editAnimeParams: {},
      errors: [],
    };
  },
  created: function () {
    axios.get("/animes/" + this.$route.params.id).then((response) => {
      console.log("animes show", response);
      this.anime = response.data;
      this.editAnimeParams = this.anime;
    });
  },
  methods: {
    updateAnime: function (anime) {
      axios
        .patch("/animes/" + anime.id, this.editAnimeParams)
        .then((response) => {
          console.log("anime updated", response);
          this.$router.push("/animes");
        })
        .catch((error) => {
          console.log("animes update error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<template>
  <div class="animes-edit">
    <h1>Edit Anime</h1>
    <form v-on:submit.prevent="updateAnime(anime)">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      Name:
      <input type="text" v-model="editAnimeParams.name" />
      Description:
      <input type="text" v-model="editAnimeParams.description" />
      Seasons:
      <input type="text" v-model="editAnimeParams.seasons" />
      Episodes:
      <input type="text" v-model="editAnimeParams.episode" />
      Dubbed:
      <input type="text" v-model="editAnimeParams.dub" />
      Image Url:
      <input type="text" v-model="editAnimeParams.image_url" />
      <input type="submit" value="Update" />
    </form>
  </div>
</template>
