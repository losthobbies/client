<template>
  <div class="container">
    <div class="columns">
      <div v-for="rec in recommendations" :key="rec.id" class="column is-3">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              {{ rec.what }}
            </p>
          </header>
          <footer class="card-footer">
            <a href="#" class="card-footer-item">{{ rec.who }}</a>
            <nuxt-link
              :to="{ name: 'recommendations-id', params: { id: rec.id } }"
              class="card-footer-item"
            />
            <!-- <a class="card-footer-item">{{ rec.category }}</a> -->
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";

export default {
  asyncData() {
    return axios
      .get("http://localhost:5000/api/v1/recommendations/")
      .then(response => {
        return { recommendations: response.data.data };
      }).catch(error => {
        console.log(error);
        return {recommendations: null};

      });
  }
};
</script>

<style scoped>
body {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
body > footer {
  margin-top: auto;
}
</style>
