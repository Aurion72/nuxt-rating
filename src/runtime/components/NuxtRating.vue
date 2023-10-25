<template>
  <div
    role="slider"
    :aria-valuemin="0"
    :aria-valuemax="props.ratingCount"
    :aria-valuenow="selectedRating"
    :style="cssVars"
    class="average-rating"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
    @click="handleClick"></div>
</template>

<script lang="ts" setup>
  import { computed, ref } from 'vue'

  // import type { Props } from '../types' #Regression due to https://github.com/nuxt/nuxt/issues/20936

  type Props = {
    ratingCount?: number
    ratingSize?: string
    activeColor?: string
    inactiveColor?: string
    ratingValue?: number
    ratingContent?: string
    readOnly?: boolean
  }

  const emit = defineEmits<{
    ratingSelected: [rate: number]
    ratingHovered: [event: number]
  }>()

  const props = withDefaults(defineProps<Props>(), {
    ratingCount: 5,
    ratingSize: '32px',
    activeColor: '#ffc700',
    inactiveColor: '#ddd',
    ratingValue: 3.7,
    ratingContent: '★',
    readOnly: true,
  })

  const selectedRating = ref(props.ratingValue)
  const hoveredRating = ref(0)

  const ratingsContent = computed(() => {
    return Array(props.ratingCount).fill(props.ratingContent).join('')
  })

  const cssVars = computed(() => ({
    'position': 'relative',
    '--active-color': props.activeColor,
    '--cursor-type': props.readOnly ? 'default' : 'pointer',
    '--inactive-color': props.inactiveColor,
    '--rating-value': hoveredRating.value ? hoveredRating.value : selectedRating.value,
    '--rating-count': props.ratingCount,
    '--rating-content': `"${ratingsContent.value}"`,
    '--rating-size': props.ratingSize,
  }))

  const handleMouseMove = (event: MouseEvent) => {
    if (props.readOnly) return
    emit('ratingHovered', calculateRating(event))
    hoveredRating.value = calculateRating(event)
  }

  const handleMouseLeave = () => {
    if (props.readOnly) return
    hoveredRating.value = selectedRating.value
  }

  const handleClick = (event: MouseEvent) => {
    if (props.readOnly) return
    emit('ratingSelected', calculateRating(event))
    selectedRating.value = calculateRating(event)
  }

  function calculateRating(event: MouseEvent): number {
    const ratingEl = document.querySelector('.average-rating')
    if (!ratingEl) return 0
    const beforeRatingElement = window.getComputedStyle(ratingEl, '::before')
    const width = parseFloat(beforeRatingElement.getPropertyValue('width').replace(/[^\d.-]/g, ''))
    return Math.ceil((event.offsetX / width) * props.ratingCount)
  }
</script>

<style lang="scss">
  .average-rating {
    height: var(--rating-size);
    font-size: var(--rating-size);
    cursor: var(--cursor-type);
    white-space: nowrap;
    display: flex;
    align-items: center;
  }

  .average-rating::before {
    --percent: calc(var(--rating-value) / var(--rating-count) * 100%);
    content: var(--rating-content) !important;
    position: absolute;
    background: linear-gradient(
      90deg,
      var(--active-color) var(--percent),
      var(--inactive-color) var(--percent)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>
