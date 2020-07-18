<template>
  <div class="container">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          {{ deepdive.title }}
        </p>
        <a href="#" class="card-header-icon" aria-label="more options">
          <span class="icon">
            <i class="fas fa-angle-down" aria-hidden="true" />
          </span>
        </a>
      </header>
      <div class="card-content">
        <div class="content">
          {{ deepdive.url }}
        </div>
      </div>
      <footer class="card-footer" />
      <div class="field is-grouped is-grouped-multiline">
        <div class="control">
          <div class="tags are-medium">
            <!-- <span
              v-for="ddc in deepdive.category"
              :key="ddc"
              class="tag is-primary is-light"
            >{{ ddc }}</span> -->
          </div>
        </div>
      </div>
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
