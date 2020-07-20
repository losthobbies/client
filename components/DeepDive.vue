<template>
  <div class="column is-8">
    <div class="box content">
      <article>
        <h4>{{ deepdive.title }}</h4>
        <div class="media">
          <div class="media-left">
            <p class="image is-32x32">
              <img src="http://bulma.io/images/placeholders/128x128.png">
            </p>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <!-- <a href="{{deepdive.link}}">Link</a> -->
                <a href="#">@jsmith</a>
                <time>{{ deepdive.createdAt | formatDate }}</time>
                <span v-for="v in deepdive.category" :key="v" class="tag">{{ v }}</span>
              </p>
            </div>
          </div>
          <div class="media-right">
            <span class="has-text-grey-light">
              <i class="fa fa-comments" /> 1
            </span>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DeepDive',
  filters: {
    formatDate (value) {
      const d = new Date(value);
      return d.toLocaleDateString('en-GB');
    }
  },

  props: ['deepdive']
};
</script>

<style></style>
