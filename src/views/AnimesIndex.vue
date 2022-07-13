<script>
import axios from "axios";
export default {
  data: function () {
    return {
      animes: [],
    };
  },
  created: function () {
    this.indexAnimes();
  },
  methods: {
    indexAnimes: function () {
      axios.get("/animes.json").then((response) => {
        console.log("animes index", response);
        this.animes = response.data;
      });
    },
  },
};
</script>

<template>
  <div class="anime-index">
    <section id="services" class="services">
      <div class="container" data-aos="fade-up">
        <div class="section-header">
          <h2>ALL ANIMES</h2>
          <p></p>
        </div>

        <div class="row gy-5">
          <div
            class="col-xl-4 col-md-6"
            data-aos="zoom-in"
            data-aos-delay="200"
            v-for="anime in animes"
            v-bind:key="anime.id"
          >
            <div class="service-item">
              <div class="img">
                <img v-bind:src="anime.image_url" v-bind:alt="anime.name" />
              </div>
              <div class="details position-relative">
                <!-- <div class="icon">
                  <i class="bi bi-activity"></i>
                </div> -->
                <a v-bind:href="`/animes/${anime.id}`">
                  <h3>{{ anime.name }}</h3>
                </a>
                <p>{{ anime.description.substr(0, 80) }}...</p>
              </div>
            </div>
          </div>
          <!-- End Service Item -->
        </div>
      </div>
    </section>
    <!-- <h1>All Anime</h1> -->
    <!-- <div v-for="anime in animes" v-bind:key="anime.id"> -->
    <!-- <h2>{{ anime.name }}</h2> -->
    <!-- <img v-bind:src="anime.image_url" v-bind:alt="anime.name" /> -->
    <!-- <p>Description: {{ anime.description }}</p> -->
    <!-- <p>Seasons: {{ anime.seasons }}</p> -->
    <!-- <p>Episodes: {{ anime.episode }}</p> -->
    <!-- <p>Dubbed: {{ anime.dub }}</p> -->
    <br />
    <!-- <router-link v-bind:to="`/animes/${anime.id}`">More details</router-link> -->
    <!-- </div> -->
  </div>
</template>

<style></style>
