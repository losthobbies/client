<template>
  <div class="container">
    <section>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <nuxt-link to="/">
          <h1 class="title" style="color: coral;">
            Lost Hobbies
          </h1>
        </nuxt-link>

        <div class="navbar-end">
          <div class="navbar-item">
            <nuxt-link to="/faq">
              <h3 style="color: coral; font-weight:bold">
                FAQ
              </h3>
            </nuxt-link>&nbsp;
            <nuxt-link to="/login">
              <h3 style="color: coral; font-weight:bold">
                LOGIN
              </h3>
            </nuxt-link>
          </div>
        </div>
      </nav>
    </section>
  </div>
</template>
<script>
