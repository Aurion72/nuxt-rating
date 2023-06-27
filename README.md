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

Display or retrieve a score on a fully customisable scale.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/nuxt-rating?file=playground%2Fapp.vue) -->
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

<!-- Highlight some of the features your module provide here -->
- &nbsp; Use whatever you like as a star
- &nbsp; View or retrieve a note
- &nbsp; Customisable colors.
- &nbsp; Customisable number of stars.
- &nbsp; Create read-only stars.

## Quick Setup

1. Add `nuxt-rating` dependency to your project

```bash
# Using pnpm
pnpm add -D nuxt-rating

# Using yarn
yarn add --dev nuxt-rating

# Using npm
npm install --save-dev nuxt-rating
```

2. Add `nuxt-rating` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'nuxt-rating'
  ]
})
```

That's it! You can now use My Module in your Nuxt app ✨

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-rating/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt-rating

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-rating.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt-rating

[license-src]: https://img.shields.io/npm/l/nuxt-rating.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/nuxt-rating/blob/main/LICENSE

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
