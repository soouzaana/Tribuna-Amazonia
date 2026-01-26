<template>
  <main class="p-6 space-y-10 bg-gray-50">
    <!-- DESTAQUE PRINCIPAL -->
    <section class="featured">
      <!-- CAMADA DE FUNDO -->
      <div
        class="featured-bg"
        style="
          background-image: url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&h=600&fit=crop');
        "
      ></div>

      <!-- OVERLAY DE TEXTOS E BADGE -->
      <div class="featured-overlay">
        <span class="featured-badge">Destaque</span>

        <h2 class="featured-title">
          STF Define Nova Interpretação Sobre Responsabilidade Fiscal dos Gestores Públicos
        </h2>

        <div class="featured-meta">
          <span>21 Jan 2026</span>
          <span>•</span>
          <span>Dr. Carlos Mendes</span>
        </div>
      </div>
    </section>

    <section class="grid md:grid-cols-2 gap-6">
      <NewsCard v-for="n in headlines" :key="n.title" :news="n" highlight />
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">Últimas Notícias</h2>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <NewsCard v-for="n in latest" :key="n.title" :news="n" />
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">Jurisprudência e Decisões</h2>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <NewsCard v-for="n in law" :key="n.title" :news="n" />
      </div>
    </section>

    <Newsletter />
  </main>
</template>

<script setup>
import NewsCard from '../components/NewsCard.vue'
import Newsletter from '../components/NewsletterItem.vue'


const latest = Array.from({ length: 6 }).map((_, i) => ({
  title: `Análise jurídica ambiental ${i + 1}`,
  author: 'Redação',
  date: '21 Jan 2026',
}))

const law = Array.from({ length: 4 }).map((_, i) => ({
  title: `Decisão relevante do TRF1 nº ${i + 1}`,
  author: 'Dra. Ana Paula Silva',
  date: '21 Jan 2026',
}))
</script>

<style>
main{
  padding: 1.5rem 3rem;
}

/* DESTAQUE */
.featured {
  position: relative;
  border-radius: 0.5rem;
  overflow: hidden;
  cursor: pointer;
  aspect-ratio: 21 / 9;
  width: 100%; /* ocupa toda a largura disponível */
}

.featured-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  transition: transform 1s ease;
  z-index: 0;
}

.featured:hover .featured-bg {
  transform: scale(1.05);
}

.featured-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
  z-index: 1;
}

.featured-overlay {
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
  right: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: white;
  z-index: 2;
}

/* badge */
.featured-badge {
  background: #10b981;
  color: #064e3b;
  font-weight: 700;
  font-size: 0.7rem;
  padding: 0.3rem 0.75rem;
  border-radius: 999px;
  text-transform: uppercase;
  align-self: flex-start;
}

/* título */
.featured-title {
  font-size: clamp(1.3rem, 3vw, 2.2rem);
  font-weight: 800;
  line-height: 1.2;
  transition: color 0.3s;
  cursor: pointer;
}

.featured:hover .featured-title {
  color: #10b981; /* verde */
}

/* meta */
.featured-meta {
  font-size: 0.85rem;
  opacity: 0.9;
  display: flex;
  gap: 0.5rem;
}
</style>
