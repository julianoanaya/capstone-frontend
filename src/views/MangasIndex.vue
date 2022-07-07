<script>
import axios from "axios";
export default {
  data: function () {
    return {
      mangas: [],
    };
  },
  created: function () {
    this.indexMangas();
  },
  methods: {
    indexMangas: function () {
      axios.get("/mangas.json").then((response) => {
        console.log("mangas index", response);
        this.mangas = response.data;
      });
    },
  },
};
</script>

<template>
  <div class="manga-index">
    <h1>All Mangas</h1>
    <div v-for="manga in mangas" v-bind:key="manga.id">
      <h2>{{ manga.name }}</h2>
      <img v-bind:src="manga.images" v-bind:alt="manga.name" />
      <p>Description: {{ manga.description }}</p>
      <p>Volume: {{ manga.volume }}</p>
      <p>Chapters: {{ manga.chapter }}</p>
      <router-link v-bind:to="`/mangas/${manga.id}`">More details</router-link>
    </div>
  </div>
</template>

<style></style>
