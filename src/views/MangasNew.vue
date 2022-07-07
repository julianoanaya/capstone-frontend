<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newMangaParams: {},
      errors: [],
    };
  },
  created: function () {},
  methods: {
    createManga: function () {
      axios
        .post("/mangas", this.newMangaParams)
        .then((response) => {
          console.log("manga create", response);
          this.$router.push("/mangas");
        })
        .catch((error) => {
          console.log("manga create error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<template>
  <div class="manga-new">
    <h1>New Manga</h1>
    <form v-on:submit.prevent="createManga()">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <p>Name:</p>
      <input type="text" v-model="newMangaParams.name" />
      <p>Description:</p>
      <input type="text" v-model="newMangaParams.description" />
      <p>Volumes:</p>
      <input type="text" v-model="newMangaParams.volume" />
      <p>Chapters:</p>
      <input type="text" v-model="newMangaParams.chapter" />
      <p><input type="submit" value="Create" /></p>
    </form>
  </div>
</template>
