<template>
  <div>
    <h1 style="margin-bottom: 0px;"> Nuxt 3 Rating Module </h1>
    <NuxtRating :read-only="false" :ratingCount="10" :ratingSize="'40px'" :active-color="'red'" ratingContent="🞺" @rating-selected="logRating" :ratingValue="1.2" />
  </div>
</template>

<script lang="ts">
export default {
  methods: {
    logRating(event: number) {
      console.log(event);
    }
  }
};
</script>
