<template>
  <section id="blog" class="blog-section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6 col-md-10">
          <div class="section-title text-center">
            <h2>Testing Ads</h2>
            <p>
              section to testing adding ads to website
            </p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <ad-tile
          v-for="(blogPost, index) in blogPosts"
          :key="index"
          v-bind="blogPost"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import AdTile from "../AdTile.vue";

defineProps(["blogPosts"]);
</script>

<style scoped></style>
