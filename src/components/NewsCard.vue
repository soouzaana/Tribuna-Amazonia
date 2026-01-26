<template>
  <div>
    <!-- Imagem com mini badge -->
    <div class="relative">
      <img :src="news.image" alt="" class="image w-full h-48 object-cover" />
      <span
        v-if="news.badge"
        class="absolute top-2 right-2 bg-emerald-500/60 text-white text-xs font-semibold px-2 py-1 rounded-full"
      >
        {{ news.badge }}
      </span>
    </div>

    <!-- Título + meta -->
    <div class="p-3 flex flex-col gap-1">
      <h3 class="font-semibold text-lg hover:text-emerald-500 transition-colors cursor-pointer">
        {{ news.title }}
      </h3>

      <div class="text-gray-600 text-sm flex gap-4">
        <span>{{ news.date }}</span>
        <span>|</span>
        <span class="flex icon"><IconComment />{{ news.comments }} comentários</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconComment from './icons/IconComment.vue'

defineProps({
  news: Object,
  highlight: Boolean,
})
</script>

<style>
.image{
  border-radius: 1rem;
}

.icon {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.icon svg {
  width: 1rem;
  height: 1rem;
}
</style>
