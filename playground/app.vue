<template>
  <div>
    <h1
      class="text-black text-4xl font-bold mt-4"
      style="margin-bottom: 0px">
      Nuxt 3 Rating Module
    </h1>

    <div class="flex items-center flex-col">
      <div>(5/5)</div>

      <NuxtRating
        :read-only="false"
        :rating-count="10"
        :rating-size="'40px'"
        :active-color="'red'"
        rating-content="🞺"
        :rating-value="1.2"
        @rating-selected="logRating" />
    </div>

    <div
      class="flex bg-white shadow-md shadow-neutral-900/10 border rounded-2xl mt-32 py-4 pr-4 pl-5 items-center">
      <img
        class="h-10"
        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
      <div class="flex flex-col pl-4 items-start">
        <span class="text-4xl font-bold">
          <NuxtRating
            class="-mt-1"
            :rating-value="4.5"
            :rating-size="'26px'" />
        </span>
        <span class="text-md -mb-[4px]">115 avis</span>
      </div>
    </div>
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
