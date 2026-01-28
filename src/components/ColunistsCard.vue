<template>
  <article
    class="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
  >
    <!-- imagem do colunista -->
    <div
      class="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-emerald-100 to-emerald-50"
    >
      <a :href="`/Columnist?id=${news.id || ''}`">
        <img
          :src="news.image"
          :alt="news.name"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </a>
    </div>

    <!-- conteúdo do card -->
    <div class="p-6">
      <a :href="`/Columnist?id=${news.id || ''}`">
        <h3
          class="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors"
        >
          {{ news.name }}
        </h3>
      </a>
      <p class="text-sm text-emerald-600 font-medium mb-3">{{ news.area }}</p>
      <p class="text-gray-600 text-sm line-clamp-3 mb-4">{{ news.description }}</p>

      <!-- redes sociais + botão -->
      <div class="flex items-center justify-between pt-4 border-t border-gray-100">
        <!-- redes sociais -->
        <div class="flex gap-2">
          <!-- Instagram -->
          <a
            :href="news.instagram"
            target="_blank"
            rel="noopener noreferrer"
            class="social-icon w-9 h-9 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center hover:scale-110 transition-transform"
            title="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              class="icon"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <circle cx="12" cy="12" r="4"></circle>
              <circle cx="17.5" cy="6.5" r="1"></circle>
            </svg>
          </a>

          <!-- LinkedIn -->
          <a
            :href="news.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="social-icon w-9 h-9 rounded-full bg-blue-700 flex items-center justify-center hover:scale-110 transition-transform"
            title="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              class="icon"
            >
              <path
                d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
              ></path>
              <rect width="4" height="12" x="2" y="9"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>

          <!-- Email -->
          <a
            :href="`mailto:${news.email}`"
            class="social-icon w-9 h-9 rounded-full bg-emerald-700 flex items-center justify-center hover:scale-110 transition-transform"
            title="Email"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              class="icon"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="M22 7 L13 12.7 A1.94 1.94 0 0 1 11 12.7 L2 7"></path>
            </svg>
          </a>
        </div>

        <!-- botão Ver Artigos -->
        <a :href="`/Columnist?id=${news.id || ''}`">
          <button
            class="botao inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-emerald-600 bg-white shadow-sm hover:bg-emerald-50 h-8 rounded-md px-3 text-xs text-emerald-700 hover:text-emerald-900"
          >
            Ver Artigos
          </button>
        </a>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    news: { type: Object, required: true },
  },
}
</script>

<style scoped>
.social-icon .icon {
  fill: none;      
  stroke: white;
}

.botao {
  background-color: #fff;
}
</style>
