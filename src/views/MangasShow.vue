<script>
import axios from "axios";
export default {
  data: function () {
    return {
      manga: {},
      favorite: {},
      favoriteMangaParams: {},
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
    createFavorite: function () {
      // this.favoriteAnimeParams.user_id = this.current_user_id;
      this.favoriteMangaParams = { manga_id: this.manga.id };
      axios.post("/favorites.json", this.favoriteMangaParams).then((response) => {
        console.log("Added to Favorites", response);

        this.$router.push("/favorites");
      });
    },
  },
};
</script>

<template>
  <div class="mangas-show">
    <section id="cta" class="cta">
      <div class="container" data-aos="zoom-out">
        <div class="row g-5">
          <div class="col-lg-8 col-md-6 content d-flex flex-column justify-content-center order-last order-md-first">
            <h3>
              {{ manga.name }}
            </h3>
            <p></p>
            <p>{{ manga.description }}</p>
            <p>Volumes: {{ manga.volume }}</p>
            <p>Chapters: {{ manga.chapter }}</p>
            <a v-bind:href="manga.manga_url" class="cta-btn align-self-start">Read It</a>
            <a class="cta-btn align-self-start" v-on:click="createFavorite()">Add to Favorites</a>
          </div>

          <div class="col-lg-4 col-md-6 order-first order-md-last d-flex align-items-center">
            <div class="img">
              <img v-bind:src="manga.image_url" v-bind:alt="manga.name" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
