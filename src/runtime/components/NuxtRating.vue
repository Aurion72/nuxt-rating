<template>
  <div :style="cssVars">
    <meter
      class="average-rating"
      min="0"
      :max="props.ratingCount"
      :value="props.ratingValue"
      aria-valuenow="props.ratingValue"
      aria-valuemin="0"
      aria-valuemax="props.ratingCount"
      @mousemove="handleMouseMove"
      @mouseleave="handleMouseLeave"
      @click="handleClick"
    ></meter>
  </div>
</template>

<script lang="ts" setup>

import { computed, ref } from "vue";

type Props = {
  ratingCount?: number;
  ratingSize?: string;
  activeColor?: string;
  inactiveColor?: string;
  ratingValue?: number;
  ratingContent?: string; 
  readOnly?: boolean;
};

const emit = defineEmits<{
  ratingSelected: [rate: number];
  hoverRating: [event: MouseEvent];
}>();

const props = withDefaults(defineProps<Props>(), {
  ratingCount: 5,
  ratingSize: "32px",
  activeColor: "#ffc700",
  inactiveColor: "gray",
  ratingValue: 3.7,
  ratingContent: "★",
  readOnly: true,
});

const selectedRating = ref(props.ratingValue);
const hoveredRating = ref(0);

const ratingsContent = computed(() => {
  return Array(props.ratingCount).fill(props.ratingContent).join("");
});

const cssVars = computed(() => ({
  "--active-color": props.activeColor,
  "--cursor-type": props.readOnly ? "default" : "pointer",
  "--inactive-color": props.inactiveColor,
  "--rating-value": hoveredRating.value ? hoveredRating.value : selectedRating.value,
  "--rating-count": props.ratingCount,
  "--rating-content": `"${ratingsContent.value}"`,
  "--rating-size": props.ratingSize,
}));

const handleMouseMove = (event: MouseEvent) => {
  if (props.readOnly) return;
  emit("hoverRating", event);
  hoveredRating.value = calculateRating(event);
};

const handleMouseLeave = () => {
  if (props.readOnly) return;
  hoveredRating.value = selectedRating.value;
};

const handleClick = (event: MouseEvent) => {
  if (props.readOnly) return;
  emit("ratingSelected", calculateRating(event));
  selectedRating.value = calculateRating(event);
};

function calculateRating(event: MouseEvent): number {
  const ratingEl = document.querySelector(".average-rating");
  if (!ratingEl) return 0;
  const beforeRatingElement = window.getComputedStyle(ratingEl, "::before");
  const width = parseFloat(beforeRatingElement.getPropertyValue("width").replace(/[^\d.-]/g, ""));
  return Math.ceil((event.offsetX / width) * props.ratingCount);
}
</script>

<style lang="scss">
.average-rating {
  position: relative;
  appearance: none;
  color: transparent;
  width: auto;
  display: inline-block;
  vertical-align: baseline;
  font-size: var(--rating-size);
  cursor: var(--cursor-type);
}

.average-rating::before {
  --percent: calc(var(--rating-value) / var(--rating-count) * 100%);
  content: var(--rating-content);
  position: absolute;
  top: 0;
  left: 0;
  color: rgba(0, 0, 0, 0.2);
  background: linear-gradient(90deg, var(--active-color) var(--percent), rgba(0, 0, 0, 0.2) var(--percent));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
