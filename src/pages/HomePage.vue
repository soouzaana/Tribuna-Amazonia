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

    <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
      <!-- Últimas Notícias - ocupa 2/3 -->
      <section class="col-span-1 md:col-span-2">
        <div class="flex justify-between items-baseline mb-4">
          <h2 class="section-title">Últimas Notícias</h2>
          <span class="section-link">Ver todos <IconArrow /></span>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          <NewsCard v-for="n in latest" :key="n.title" :news="n" />
        </div>
      </section>

      <!-- Coluna menor: Escolhas do Editor + Instagram -->
      <div class="col-span-1 flex flex-col gap-6">
        <!-- Escolhas do Editor -->
        <section>
          <div class="flex justify-between items-baseline mb-4">
            <h2 class="section-title">Escolhas do Editor</h2>
            <span class="section-link">Ver todos <IconArrow /></span>
          </div>
          <div class="grid grid-cols-1 gap-6">
            <NewsCard v-for="n in latest" :key="n.title + '-editor'" :news="n" />
          </div>
        </section>

        <!-- Siga no Instagram -->
        <section>
          <div class="flex justify-between items-center mb-2">
            <h2 class="section-title text-base">Siga no Instagram</h2>
            <span class="instagram-icon">📷</span>
          </div>
          <div class="grid grid-cols-3 gap-2 mb-3">
            <img
              v-for="i in 9"
              :key="i"
              src="https://picsum.photos/100?random={{i}}"
              alt="Instagram"
              class="w-full h-24 object-cover rounded"
            />
          </div>
          <a
            href="https://instagram.com/tribunaamazonica"
            target="_blank"
            rel="noopener noreferrer"
            class="block w-full text-center py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all"
          >
            @tribunaamazonica
          </a>
        </section>
      </div>
    </div>

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
import IconArrow from '@/components/icons/IconArrow.vue'
import NewsCard from '../components/NewsCard.vue'
import Newsletter from '../components/NewsletterItem.vue'

const latest = [
  {
    title: 'STF Define Nova Interpretação Sobre Responsabilidade Fiscal dos Gestores Públicos',
    author: 'Redação',
    date: '21 Jan 2026',
    comments: 12,
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=250&fit=crop',
    badge: 'Controle Fiscal',
  },
  {
    title: 'Estilo de Vida: Escritórios de Advocacia Adotam Home Office Permanente',
    author: 'Redação',
    date: '20 Jan 2026',
    comments: 8,
    image: 'https://images.unsplash.com/photo-1605902711622-cfb43c443f5e?w=400&h=250&fit=crop',
    badge: 'Lifestyle',
  },
  {
    title: 'Bem-estar no trabalho: advogados e equilíbrio',
    author: 'Redação',
    date: '19 Jan 2026',
    comments: 5,
    image: 'https://images.unsplash.com/photo-1581091012184-16b8d3ed6f62?w=400&h=250&fit=crop',
    badge: 'Welness',
  },
  {
    title: 'TRF1 publica decisão sobre licitações públicas',
    author: 'Redação',
    date: '18 Jan 2026',
    comments: 9,
    image: 'https://images.unsplash.com/photo-1590608897129-79cf3f03763f?w=400&h=250&fit=crop',
    badge: '',
  },
  {
    title: 'Nova lei impacta gestores municipais',
    author: 'Redação',
    date: '17 Jan 2026',
    comments: 3,
    image: 'https://images.unsplash.com/photo-1573497019416-1469fef21b3b?w=400&h=250&fit=crop',
    badge: '',
  },
  {
    title: 'Decisão judicial relevante sobre meio ambiente',
    author: 'Redação',
    date: '16 Jan 2026',
    comments: 6,
    image: 'https://images.unsplash.com/photo-1581092580491-4d25f8f6348a?w=400&h=250&fit=crop',
    badge: '',
  },
]

const law = Array.from({ length: 4 }).map((_, i) => ({
  title: `Decisão relevante do TRF1 nº ${i + 1}`,
  author: 'Dra. Ana Paula Silva',
  date: '21 Jan 2026',
}))
</script>

<style>
main {
  padding: 1.5rem 3rem;
}

/* Título da seção */
.section-title {
  position: relative;
  display: inline-block;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  padding-bottom: 0.25rem;
  color: #111827;
}

.section-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 30%;
  height: 0.26rem;
  background-color: #10b981;
  border-radius: 2px;
}

.section-link {
  font-size: 0.9rem;
  font-weight: 600;
  color: #047857;
  cursor: pointer;
  transition: color 0.3s;
  display: flex;
}

.section-link svg {
  width: 1rem;
  height: 0.8rem;
  margin-left: 0.3rem;
  margin-top: 0.2rem;
}

/* DESTAQUE */
.featured {
  position: relative;
  border-radius: 0.5rem;
  overflow: hidden;
  cursor: pointer;
  aspect-ratio: 21 / 9;
  width: 100%;
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

/* Instagram section */
.instagram-icon {
  font-size: 1.25rem;
}

section img {
  transition: transform 0.3s ease;
}

section img:hover {
  transform: scale(1.05);
}
</style>
