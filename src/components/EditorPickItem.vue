<template>
  <article class="editor-pick group">
    <!-- Imagem -->
    <div class="editor-image">
      <img :src="news.image" :alt="news.title" />
    </div>

    <!-- Conteúdo -->
    <div class="editor-content">
      <h3 class="editor-title">
        {{ news.title }}
      </h3>
      <span class="editor-date">
        {{ news.date }}
      </span>
    </div>
  </article>
</template>

<script setup>
defineProps({
  news: {
    type: Object,
    required: true,
  },
})
</script>

<style>
.editor-pick {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  cursor: pointer;
}

/* imagem quadrada */
.editor-image {
  width: 6rem;
  height: 6rem;
  flex-shrink: 0;
  border-radius: 0.5rem;
  overflow: hidden;
}

.editor-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

/* hover apenas na imagem */
.editor-pick:hover .editor-image img {
  transform: scale(1.05);
}

/* conteúdo */
.editor-content {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.editor-title {
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1.3;
  color: #111827;
  transition: color 0.3s;
  margin-bottom: 0.6rem;
}

.editor-pick:hover .editor-title {
  color: #10b981;
}

.editor-date {
  font-size: 0.75rem;
  color: #6b7280;
}
</style>
