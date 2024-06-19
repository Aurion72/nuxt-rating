<template>
  <div class="content-rating">
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
  </div>
</template>

<script lang="ts" setup>
  import { computed, ref, watch } from 'vue'
  import type { Props } from '../types'

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

  const percent = computed(() => (selectedRating.value / props.ratingCount) * 100 + '%')

  const ratingsContent = computed(() => {
    return Array(props.ratingCount).fill(props.ratingContent).join('')
  })

  watch(
    () => props.ratingValue,
    newRating => {
      selectedRating.value = newRating
    },
  )

  const cssVars = computed(() => ({
    '--active-color': props.activeColor,
    '--cursor-type': props.readOnly ? 'default' : 'pointer',
    '--inactive-color': props.inactiveColor,
    '--rating-value': hoveredRating.value ? hoveredRating.value : selectedRating.value,
    '--rating-count': props.ratingCount,
    '--rating-content': `"${ratingsContent.value}"`,
    '--rating-size': props.ratingSize,
    '--percent': percent.value,
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
    const ratingEl = event.currentTarget as HTMLElement
    if (!ratingEl) return 0
    const width = ratingEl.clientWidth
    return Math.ceil((event.offsetX / width) * props.ratingCount)
  }
</script>

<style>
  .content-rating {
    display: flex;
  }

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
    position: relative;
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
