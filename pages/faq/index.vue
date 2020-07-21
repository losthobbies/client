<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <h2 class="title section-title centered">
            Frequently Asked Questions
          </h2><br>
          <article class="media">
            <figure class="media-left">
              <p class="image is-64x64">
                <img src="~/static/icons/sp/png/cogwheels.png">
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>What does Lost Hobbies do?</strong>
                  <br>
                  Lost Hobbies wants to help you get back into your interests and hobbies.
                </p>
              </div>
            </div>
          </article>
          <article class="media">
            <figure class="media-left">
              <p class="image is-64x64">
                <img src="~/static/icons/sp/png/light-bulb.png">
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>How does it work?</strong>
                  <br>
                  The Lost Hobbies database has a list of items that have been recommended by people via Twitter, Podcasts, YouTube etc.
                  When you login, it returns the items that were recommended by the people you follow on Twitter.
                </p>
              </div>
            </div>
          </article>
          <article class="media">
            <figure class="media-left">
              <p class="image is-64x64">
                <img src="~/static/icons/sp/png/cogwheels-2.png">
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>How is this going to get me back into my hobbies?</strong>
                  <br>
                  I believe the hardest thing is to start. There is so much noise on the internet and we spend so much time scrolling and searching that we have no time to do the thing we want to do.
                  A recommendation from someone is an easy way to get going. There are hopefully more features on the way too, so this isn't its final form...
                </p>
              </div>
            </div>
          </article>
          <article class="media">
            <figure class="media-left">
              <p class="image is-64x64">
                <img src="~/static/icons/sp/png/cogwheels-1.png">
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>Who is it for?</strong>
                  <br>
                  Me. Hopefully you. I created it because I was trying to find something to watch and realised I have been out of the loop for so long.
                  There was too much to catch up on, I didn't know where to start and I got a bit demoralised.
                  I wanted a quick recommendation that didn't involve tomatoes or thumbs or a number.
                </p>
              </div>
            </div>
          </article>
          <article class="media">
            <figure class="media-left">
              <p class="image is-64x64">
                <img src="~/static/icons/sp/png/cogwheel-1.png">
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>Where does the data come from?</strong>
                  <br>
                  At the moment I am adding it manually. <a href="http://paulgraham.com/ds.html">Do things that don't scale&trade;</a> I have a site scraper that is a bit of a work in progress but it does what I need it to do.
                  But hopefully you will add items to the site. Perhaps you heard someone recommended something on a Podcast or YouTube interview. Articles from websites are good too.
                  Add it to the site and let others know.
                </p>
              </div>
            </div>
          </article>
          <!-- <article class="media">
            <figure class="media-left">
              <p class="image is-64x64">
                <img src="~/static/icons/sp/png/cogwheel.png">
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>What am I adding to the site?</strong>
                  <br>
                  What was recommended? Who recommended it? Where was it recommended? What is it? For example. Supposed you saw this vie
                </p>
              </div>
            </div>
          </article> -->
        </div>
        <div class="column">
          <figure class="media-right">
            <p class="image is-5by4">
              <img src="~/static/undraw_ask_me_anything_k8o0.png" title="Thanks undraw.co">
            </p>
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

  head () {
    return {
      title: 'Frequently Asked Questions',
      meta: [
        { hid: 'Lost Hobbies - FAQ', name: 'How to get back into hobbies', content: 'Learn how to get back into your old hobbies and interests.' }
      ]
    }
  }

}
</script>

<style>

</style>
