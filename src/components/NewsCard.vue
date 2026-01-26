<template>
  <article
    :class="[
      'bg-white p-4 border-l-4 rounded-sm',
      highlight ? 'bg-emerald-50 border-emerald' : 'border-emerald',
    ]"
  >
    <h3 class="font-semibold text-lg mb-1">
      {{ news.title }}
    </h3>

    <small class="text-gray-500"> {{ news.author }} • {{ news.date }} </small>
  </article>
</template>

<script setup>
defineProps({
  news: Object,
  highlight: Boolean,
})
</script>
