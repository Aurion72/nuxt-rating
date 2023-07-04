<template>
  <div>
    <h1 style="margin-bottom: 0px">Nuxt 3 Rating Module</h1>
    <NuxtRating
      :read-only="false"
      :rating-count="10"
      :rating-size="'40px'"
      :active-color="'red'"
      :rating-value="1.2"
      rating-content="🞺"
      @rating-selected="logRating" />
  </div>
</template>

<script lang="ts">
  export default {
    methods: {
      logRating(event: number) {
        console.log(event)
      },
    },
  }
</script>
