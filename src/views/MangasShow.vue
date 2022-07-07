<script>
import axios from "axios";
export default {
  data: function () {
    return {
      manga: {},
    };
  },
  created: function () {
    axios.get("/mangas/" + this.$route.params.id).then((response) => {
      console.log("manga show", response);
      this.manga = response.data;
    });
  },
  methods: {
    destroyManga: function (manga) {
      axios.delete("/mangas/" + manga.id).then((response) => {
        console.log("mangas destroy", response);
        this.$router.push("/mangas");
      });
    },
  },
};
</script>

<template>
  <div class="mangas-show">
    <h2>{{ manga.name }}</h2>
    <!-- <img v-bind:src="manga.url" v-bind:alt="manga.name" /> -->
    <p>Description: {{ manga.description }}</p>
    <p>Volumes: {{ manga.volume }}</p>
    <p>Chapters: {{ manga.chapter }}</p>
    <p>Where to Read: {{ manga.where_to_reads }}</p>
    <p><router-link v-bind:to="`/mangas/${manga.id}/edit`">Edit manga</router-link></p>
    <p><router-link to="/mangas">Back to all manga</router-link></p>
    <p><button v-on:click="destroyManga(manga)">Delete Manga</button></p>
  </div>
</template>
