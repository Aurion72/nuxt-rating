<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: My Module
- Package name: nuxt-rating
- Description: My new Nuxt module
-->

# 🌠 NuxtRating

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

<img src="https://s11.gifyu.com/images/SQCHN.gif" alt="GIF de démonstration" width="300">

## Features

<!-- Highlight some of the features your module provide here -->

- &nbsp; Use whatever you like as a star
- &nbsp; View or retrieve a note
- &nbsp; Customisable colors.
- &nbsp; Customisable number of stars.
- &nbsp; Create read-only stars.
- &nbsp; SSR Friendly.

## Quick Setup

1. Add `nuxt-rating` dependency to your project

```bash
# Using pnpm
pnpm add nuxt-rating

# Using yarn
yarn add nuxt-rating

# Using npm
npm install nuxt-rating
```

2. Add `nuxt-rating` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: ["nuxt-rating"],
});
```

3. Use `nuxt-rating` component `

```js
<NuxtRating :read-only="false" :ratingValue="1.2" />
```

## Props Explanation

The following props can be passed to customize the appearance and behavior of the component:

- `ratingCount` (optional, default: 5): The total number of rating levels available.
- `ratingSize` (optional, default: "32px"): The size of the rating meter.
- `activeColor` (optional, default: "#ffc700"): The color of the active rating level.
- `inactiveColor` (optional, default: "gray"): The color of the inactive rating levels.
- `ratingValue` (optional, default: 3.7): The initial rating value.
- `ratingContent` (optional, default: "★"): The content to be displayed for each rating level.
- `readOnly` (optional, default: true): Specifies whether the rating meter is read-only or interactive.

## Events Explanation

The component emits the following events:

- `ratingSelected`: Triggered when a rating level is selected. The event payload is the selected rating value.
- `hoverRating`: Triggered when the mouse hovers over the rating meter. The event payload is the mouse event object.

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/nuxt-rating/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt-rating
[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-rating.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt-rating
[license-src]: https://img.shields.io/npm/l/nuxt-rating.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/nuxt-rating/blob/main/LICENSE
[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
