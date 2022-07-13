<script>
import axios from "axios";
export default {
  data: function () {
    return {
      manga: {},
      editMangaParams: {},
      errors: [],
    };
  },
  created: function () {
    axios.get("/mangas/" + this.$route.params.id).then((response) => {
      console.log("mangas show", response);
      this.manga = response.data;
      this.editMangaParams = this.manga;
    });
  },
  methods: {
    updateManga: function (manga) {
      axios
        .patch("/mangas/" + manga.id, this.editMangaParams)
        .then((response) => {
          console.log("mangas update", response);
          this.$router.push("/mangas");
        })
        .catch((error) => {
          console.log("mangas update error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<template>
  <div class="mangas-edit">
    <h1>Edit Manga</h1>
    <form v-on:submit.prevent="updateManga(manga)">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      Name:
      <input type="text" v-model="editMangaParams.name" />
      Description:
      <input type="text" v-model="editMangaParams.description" />
      Volumes:
      <input type="text" v-model="editMangaParams.volume" />
      Chapters:
      <input type="text" v-model="editMangaParams.chapter" />
      Image URL:
      <input type="text" v-model="editMangaParams.image_url" />
      <input type="submit" value="Update" />
    </form>
  </div>
</template>
