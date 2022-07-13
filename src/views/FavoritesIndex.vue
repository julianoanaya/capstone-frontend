<script>
import axios from "axios";
export default {
  data: function () {
    return {
      favorites: [],
    };
  },
  created: function () {
    this.indexFavorites();
  },
  methods: {
    indexFavorites: function () {
      axios.get("/favorites.json").then((response) => {
        this.favorites = response.data;
        console.log("favorites", response.data);
      });
    },
  },
};
</script>

<template>
  <section id="recent-blog-posts" class="recent-blog-posts">
    <div class="container" data-aos="fade-up">
      <div class="section-header">
        <h2>Favorites</h2>
        <p>All Favorites</p>
      </div>

      <div class="row">
        <div
          class="col-lg-4"
          data-aos="fade-up"
          data-aos-delay="200"
          v-for="favorite in favorites"
          v-bind:key="favorite.id"
        >
          <div v-if="favorite.manga_details">
            <div class="post-box">
              <div class="post-img">
                <img
                  v-bind:src="favorite.manga_details.image_url"
                  v-bind:alt="favorite.manga_details.name"
                  class="img-fluid"
                />
              </div>
              <h3 class="post-title">{{ favorite.manga_details.name }}</h3>
              <p>
                {{ favorite.manga_details.description }}
              </p>
              <a v-bind:href="`/mangas/${favorite.manga_details.id}`" class="readmore stretched-link"></a>
            </div>
          </div>
          <div v-if="favorite.anime_details">
            <div class="post-box">
              <div class="post-img">
                <img
                  v-bind:src="favorite.anime_details.image_url"
                  v-bind:alt="favorite.anime_details.name"
                  class="img-fluid"
                />
              </div>
              <h3 class="post-title">{{ favorite.anime_details.name }}</h3>
              <p>
                {{ favorite.anime_details.description }}
              </p>
              <a v-bind:href="`/animes/${favorite.anime_details.id}`" class="readmore stretched-link"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
