<template>
  <div class="container">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          {{ comment.name }}
        </p>
        <a href="#" class="card-header-icon" aria-label="more options">
          <span class="icon">
            <i class="fas fa-angle-down" aria-hidden="true" />
          </span>
        </a>
      </header>
      <div class="card-content">
        <div class="content">
          {{ comment.body }}
        </div>
      </div>
      <footer class="card-footer" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Comment',
  props: ['comment', 'name']
};
</script>

<style></style>
