<template>
  <div class="container">
    <article>
      <h1 class="title">
        {{ recommendations.what }}
      </h1>
      <p>{{ recommendations.who }}</p>

      <DeepDive
        v-for="deepdive in deepdives"
        :id="deepdive.id"
        :key="deepdive.id"
        :name="deepdive.title"
        :deepdive="deepdive"
      />
    </article>
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
.title {
  font-size: 2rem;
}
</style>
