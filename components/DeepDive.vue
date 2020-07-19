<template>
  <div class="column is-7">
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
                {{ deepdive.createdAt }} &nbsp;
                <span class="tag">Question</span>
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
  props: ['deepdive']
};
</script>

<style></style>
