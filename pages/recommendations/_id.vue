<template>
  <div class="container">
    <div class="columns">
      <!-- card -->

      <div class="column is-5">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">
                  {{ recommendations.what }}
                </p>
                <p class="subtitle is-5">
                  {{ recommendations.who }}
                </p>
              </div>
            </div>

            <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nec iaculis mauris.
              <a>@bulmaio</a>.
              <a href="#">#css</a>
              <a href="#">#responsive</a>
              <br>
              <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
        </div>
      </div>

      <!-- rows -->
      <DeepDive
        v-for="deepdive in deepdives"
        :id="deepdive.id"
        :key="deepdive.id"
        :name="deepdive.title"
        :deepdive="deepdive"
      />
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";

export default {
  data() {
    return {
      id: this.$route.params.id,
      recommendations: {},
      deepdives: {}
    };
  },
  mounted() {
    axios
      .get(`http://localhost:5000/api/v1/recommendations/${this.id}`)
      .then(response => {
        this.recommendations = response.data.data;
      });

    axios
      .get(`http://localhost:5000/api/v1/recommendations/${this.id}/deepdives`)
      .then(response => {
        this.deepdives = response.data.data;
      });
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  line-height: 1.5;
}
article * {
  margin-bottom: 1rem;
}
aside {
  min-width: 280px;
  max-width: 280px;
  padding-left: 2rem;
}
</style>
