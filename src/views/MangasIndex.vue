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
    <section id="services" class="services">
      <div class="container" data-aos="fade-up">
        <div class="section-header">
          <h2>ALL Mangas</h2>
          <p></p>
        </div>

        <div class="row gy-5">
          <div
            class="col-xl-4 col-md-6"
            data-aos="zoom-in"
            data-aos-delay="200"
            v-for="manga in mangas"
            v-bind:key="manga.id"
          >
            <div class="service-item">
              <div class="img">
                <img v-bind:src="manga.image_url" v-bind:alt="manga.name" />
              </div>
              <div class="details position-relative">
                <!-- <div class="icon">
                  <i class="bi bi-activity"></i>
                </div> -->
                <a v-bind:href="`/mangas/${manga.id}`" class="stretched-link">
                  <h3>{{ manga.name }}</h3>
                </a>
                <p>{{ manga.description.substr(0, 60) }}...</p>
              </div>
            </div>
          </div>
          <!-- End Service Item -->
        </div>
      </div>
    </section>
    <!-- <h1>All Mangas</h1> -->
    <!-- <div v-for="manga in mangas" v-bind:key="manga.id"> -->
    <!-- <h2>{{ manga.name }}</h2> -->
    <!-- <img v-bind:src="manga.image_url" v-bind:alt="manga.name" /> -->
    <!-- <p>Description: {{ manga.description }}</p> -->
    <!-- <p>Volume: {{ manga.volume }}</p> -->
    <!-- <p>Chapters: {{ manga.chapter }}</p> -->
    <!-- <p>Genre: {{ manga.manga_anime_genres.genre_ids }}</p> -->
    <br />
    <!-- <router-link v-bind:to="`/mangas/${manga.id}`">More details</router-link> -->
    <!-- </div> -->
  </div>
</template>

<style></style>
