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
          <div class="post-box">
            <div class="post-img"><img src="assets/img/blog/blog-1.jpg" class="img-fluid" alt="" /></div>
            <h3 class="post-title"></h3>
            <p>
              Illum voluptas ab enim placeat. Adipisci enim velit nulla. Vel omnis laudantium. Asperiores eum ipsa est
              officiis. Modi cupiditate exercitationem qui magni est...
            </p>
            <a href="blog-details.html" class="readmore stretched-link">
              <span>Read More</span>
              <i class="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="favorite-index">
    <h1>Favorites</h1>
    <div v-for="favorite in favorites" v-bind:key="favorite.id">
      <div v-if="favorite.manga_details">
        <h2>{{ favorite.manga_details.name }}</h2>
        <br />
        <img v-bind:src="favorite.manga_details.image_url" v-bind:alt="favorite.manga_details.name" />
        <br />
        <router-link v-bind:to="`/mangas/${favorite.manga_details.id}`">More details</router-link>
      </div>
      <div v-if="favorite.anime_details">
        <h2>{{ favorite.anime_details.name }}</h2>
        <img v-bind:src="favorite.anime_details.image_url" v-bind:alt="favorite.anime_details.name" />
        <br />
        <router-link v-bind:to="`/animes/${favorite.anime_details.id}`">More details</router-link>
      </div>
    </div>
  </div>
</template>

<style></style>
