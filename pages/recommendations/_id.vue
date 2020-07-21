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
              <div class="media-left" />
              <div class="media-content">
                <p class="title is-4">
                  {{ recommendation.what }}
                </p>
                <div class="field is-grouped is-grouped-multiline">
                  <div class="control">
                    <div class="tags has-addons">
                      <span class="tag is-dark">Who</span>
                      <span class="tag is-info">{{ recommendation.who }}</span>
                    </div>
                  </div>
                  <div class="control">
                    <div class="tags has-addons">
                      <span class="tag is-dark">Where</span>
                      <span class="tag is-primary">
                        <a :href="recommendation.where">--></a>
                      </span>
                    </div>
                  </div>
                  <!-- <div class="control">
                    <div class="tags has-addons">
                      <span class="tag is-info">When</span>
                      <span class="tag is-dark">{{ recommendation.who }}</span>
                    </div>
                  </div>-->
                </div>
              </div>
            </div>

            <div class="content">
              <!-- <time>{{ recommendation.createdAt | formatDate }}</time> -->
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
