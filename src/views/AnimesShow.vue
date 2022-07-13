<script>
import axios from "axios";
export default {
  data: function () {
    return {
      anime: {},
      favorite: {},
      favoriteAnimeParams: {},
    };
  },
  created: function () {
    axios.get("/animes/" + this.$route.params.id).then((response) => {
      console.log("anime show", response);
      this.anime = response.data;
    });
  },
  methods: {
    destroyAnime: function (anime) {
      axios.delete("/animes/" + anime.id).then((response) => {
        console.log("animes destroy", response);
        this.$router.push("/animes");
      });
    },
    createFavorite: function () {
      // this.favoriteAnimeParams.user_id = this.current_user_id;
      this.favoriteAnimeParams = { anime_id: this.anime.id };
      axios.post("/favorites.json", this.favoriteAnimeParams).then((response) => {
        console.log("Added to Favorites", response);

        this.$router.push("/favorites");
      });
    },
    // destroyFavorite: function (anime) {
    //   axios.delete("/favorites/" + anime.id).then((response) => {
    //     console.log("removed from favorites", response);
    //     this.$router.push("/favorites");
    //   });
    // },
  },
};
</script>

<template>
  <div class="animes-show">
    <section id="cta" class="cta">
      <div class="container" data-aos="zoom-out">
        <div class="row g-5">
          <div class="col-lg-8 col-md-6 content d-flex flex-column justify-content-center order-last order-md-first">
            <h3>{{ anime.name }}</h3>
            <p>{{ anime.description }}</p>
            <p>Seasons: {{ anime.seasons }}</p>
            <p>Episodes: {{ anime.episode }}</p>
            <p>Dubbed: {{ anime.dub }}</p>
            <a v-bind:href="anime.anime_url" class="cta-btn align-self-start">Watch It</a>
            <a class="cta-btn align-self-start" v-on:click="createFavorite()">Add to Favorites</a>
          </div>

          <div class="col-lg-4 col-md-6 order-first order-md-last d-flex align-items-center">
            <div class="img">
              <img v-bind:src="anime.image_url" v-bind:alt="anime.name" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
