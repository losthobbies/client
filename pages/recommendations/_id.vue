<template>
  <div class="container">
    <article>
      <h1 class="title">
        {{ recommendations.title }}
      </h1>
      <p>{{ recommendations.body }}</p>

      <Timeline v-for="comment in comments" :id="comment.id" :key="comment.id" :comment="comment.comment" />
    </article>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'

export default {

data () {
      return {
        id: this.$route.params.id,
        recommendations:{},
        comments:{}
      }
    },
    mounted(){
      axios.get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
      .then(response => {
        this.recommendations = response.data
      });

      axios.get(`https://jsonplaceholder.typicode.com/posts/${this.id}/comments`)
      .then(response => {
        this.comments = response.data
      })
    }
}
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