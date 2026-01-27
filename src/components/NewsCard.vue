<template>
  <div class="relative">
    <!-- Imagem com badges -->
    <div class="relative overflow-hidden rounded-2xl">
      <img
        :src="news.image"
        alt=""
        class="image w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
      />

      <!-- Badge normal no canto superior direito -->
      <span
        v-if="news.badge"
        class="absolute top-2 right-2 bg-emerald-500/60 text-white text-xs font-semibold px-2 py-1 rounded-full"
      >
        {{ news.badge }}
      </span>

      <!-- Badge "Live" no canto superior esquerdo -->
      <span
        v-if="news.isLive"
        class="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1"
      >
        <svg class="w-3 h-3 animate-pulse" fill="currentColor" viewBox="0 0 8 8">
          <circle cx="4" cy="4" r="4" />
        </svg>
        Live
      </span>

      <!-- Botão play centralizado -->
      <button
        v-if="news.isLive"
        class="absolute inset-0 m-auto w-12 h-12 rounded-full flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity"
      >
        <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5 3v18l15-9z" />
        </svg>
      </button>
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
.image {
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

button {
  background: #059669;
}

button svg{
  color: white;
}
</style>
