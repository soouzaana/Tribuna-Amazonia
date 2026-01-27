<template>
  <section class="video-section p-6 rounded-2xl">
    <div class="flex justify-between items-baseline mb-6">
      <h2 class="section-title">Assista aos vídeos</h2>
      <span class="section-link">Mais Posts</span>
    </div>

    <div class="videos-container flex flex-col md:flex-row gap-6">
      <!-- Vídeo grande em destaque -->
      <div
        v-if="highlightVideo"
        class="featured-video flex-1 relative rounded-2xl overflow-hidden cursor-pointer"
      >
        <!-- Imagem de fundo -->
        <img
          :src="highlightVideo.image"
          :alt="highlightVideo.title"
          class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />

        <!-- Overlay escuro -->
        <div
          class="overlay absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"
        ></div>

        <!-- Badge normal -->
        <span
          v-if="highlightVideo.badge"
          class="badge-normal absolute top-2 right-2 bg-emerald-500/60 text-white text-xs font-semibold px-2 py-1 rounded-full z-20"
        >
          {{ highlightVideo.badge }}
        </span>

        <!-- Badge Live -->
        <span
          v-if="highlightVideo.isLive"
          class="badge-live absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 z-20"
        >
          <svg class="w-3 h-3 animate-pulse" fill="currentColor" viewBox="0 0 8 8">
            <circle cx="4" cy="4" r="4" />
          </svg>
          Live
        </span>

        <!-- Botão play centralizado -->
        <button
          v-if="highlightVideo.isLive || highlightVideo.hasPlayButton"
          class="play-button absolute inset-0 m-auto w-12 h-12 rounded-full flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity z-20"
        >
          <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M5 3v18l15-9z" />
          </svg>
        </button>

        <!-- Título e meta sobrepostos -->
        <div
          class="featured-overlay absolute bottom-3 left-3 right-3 z-20 flex flex-col gap-1 text-white"
        >
          <h3
            class="featured-title text-lg font-bold cursor-pointer hover:text-emerald-500 transition-colors"
          >
            {{ highlightVideo.title }}
          </h3>
          <div class="featured-meta text-sm flex gap-4">
            <span>{{ highlightVideo.date }}</span>
            <span>|</span>
            <span class="flex items-center gap-1">
              {{ highlightVideo.comments }}
            </span>
          </div>
        </div>
      </div>

      <!-- Lista de vídeos menores -->
      <div class="video-list flex flex-col gap-4 flex-1">
        <article
          v-for="(video, index) in videos"
          :key="index"
          class="video-item relative group rounded-lg overflow-hidden flex gap-3 cursor-pointer"
        >
          <div class="video-thumb relative flex-shrink-0 w-34 h-24 rounded-lg overflow-hidden">
            <img :src="video.image" :alt="video.title" class="w-full h-full object-cover" />
            <div
              class="play-overlay absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </div>
          </div>
          <div class="video-content flex flex-col  gap-1">
            <h4 class="video-title text-sm font-semibold text-white">{{ video.title }}</h4>
            <span class="video-meta text-xs text-gray-400"
              >{{ video.date }} | {{ video.channel }}</span
            >
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const highlightVideo = {
  title: 'Live: Debate Sobre a Nova Lei de Licitações',
  image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&h=600&fit=crop',
  date: '24 Jan 2026',
  comments: 'Tribuna Amazonica',
  isLive: true,
  hasPlayButton: true,
}

const videos = [
  {
    title: 'Webinar: Atualização em Controle Externo de Administração Pública',
    image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800&h=600&fit=crop',
    date: '26 Jan 2026',
    channel: 'Equipe Tribuna',
  },
]
</script>

<style scoped>
.video-section {
  background: #111827;
  color: white;
}

/* títulos e links */
.section-title {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
}

.section-link {
  color: #34d399;
  font-weight: 500;
  cursor: pointer;
}

/* Vídeo destaque */
.featured-video{
  max-width: 35rem;
  max-height: 20rem;
}

.featured-video img {
  border-radius: 1rem;
}

.overlay {
  pointer-events: none;
}

.featured-overlay {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  z-index: 100;
}

.featured-title {
  font-size: 1.25rem;
  font-weight: 700;
}

.featured-meta {
  font-size: 0.87rem;
  opacity: 0.9;
  display: flex;
  gap: 0.25rem;
  color: #ffffffb3;
}

/* Badges e botão play */
.badge-normal {
  font-size: 0.65rem;
}

.badge-live svg {
  width: 0.75rem;
  height: 0.75rem;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.6;
  }
}

.play-button {
  background: #059669;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.play-button svg {
  color: white;
}

/* Lista de vídeos menores */
.video-item {
  display: flex;
  gap: 0.75rem;
}

.video-thumb {
  position: relative;
}

.play-overlay {
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 0.25rem;
}

/* conteúdo do vídeo menor */

.video-badge {
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
}

.video-title {
  font-size: 0.875rem;
  font-weight: 600;
}

.video-meta {
  font-size: 0.75rem;
  color: #9ca3af;
}
</style>
