<template>
  <div class="container">
    <div class="columns">
      <!-- card -->

      <div class="column is-4">
        <div class="card">
          <div class="card-image">
            <figure class="image is-48by48">
              <img src="https://bulma.io/images/placeholders/640x480.png" alt="Placeholder image">
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
                  {{ recommendation.what }}
                </p>
                <p class="subtitle is-5">
                  {{ recommendation.who }}
                </p>
              </div>
            </div>

            <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nec iaculis mauris.
              <a
                :href="recommendation.where"
              >Where</a>

              <br>
              <time>{{ recommendation.createdAt | formatDate }}</time>
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
      recommendation: {},
      deepdives: {}
    };
  },
  filters: {
    formatDate: function(value) {
      var d = new Date(value);
      return d.toLocaleDateString("en-GB");
    }
  },
  mounted() {
    axios
      .get(`http://localhost:5000/api/v1/recommendations/${this.id}`)
      .then(response => {
        this.recommendation = response.data.data;
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
