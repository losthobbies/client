
<template>
  <div class="container">
    <div class="links">
      <nuxt-link
        v-for="post in recommendations"
        :key="post.id"
        :to="{name: 'recommendations-id', params: {id: post.id}}"
        class="button--grey"
      >
        {{ post.title }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'

export default {

asyncData(){
return axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
     return {recommendations: response.data}
    });
}

};
</script>

<style scoped>
.links {
  padding-top: 15px;
}
.links > .button--grey {
  margin: 5px;
}
</style>
