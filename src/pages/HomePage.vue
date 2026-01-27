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
            <EditorPickItem v-for="n in editorPick" :key="n.title + '-editor'" :news="n" />
          </div>
        </section>

        <!-- Siga no Instagram -->
        <section class="bg-white rounded-lg p-4">
          <div class="flex justify-between items-center mb-2">
            <h2 class="instagram-title text-base">Siga no Instagram</h2>
            <a
              href="https://instagram.com/tribunaamazonica"
              target="_blank"
              rel="noopener noreferrer"
              class="text-pink-600 hover:text-pink-700 transition-colors"
            >
              <!-- SVG CORRIGIDO -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" />
                <path
                  d="M16 11.37A4 4 0 1 1 12.63 8
                     4 4 0 0 1 16 11.37z"
                  fill="none"
                />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
          <div class="grid grid-cols-3 gap-2 mb-3">
            <img
              v-for="i in 9"
              :key="i"
              src="https://picsum.photos/100?random={{i}}"
              alt="Instagram"
              class="w-full h-24 object-cover rounded-lg"
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
import EditorPickItem from '@/components/EditorPickItem.vue'

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
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
    badge: 'Lifestyle',
  },
  {
    title: 'Bem-estar no trabalho: advogados e equilíbrio',
    author: 'Redação',
    date: '19 Jan 2026',
    comments: 5,
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&h=600&fit=crop',
    badge: 'Welness',
  },
  {
    title: 'Análise: Os Impactos da Reforma Tributária no Direito Administrativo',
    author: 'Opinião',
    date: '18 Jan 2026',
    comments: 9,
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop',
    badge: '',
  },
]

const editorPick = [
  {
    title: 'Inteligência Artificial e o Futuro do Direito: O Que Esperar nos Próximos Anos',
    date: '15 Jan 2026',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
  },
  {
    title: '5 Dicas para Advogados Iniciantes Construírem uma Carreira de Sucesso',
    date: '14 Jan 2026',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=100&h=100&fit=crop',
  },
  {
    title: 'A Importância da Mediação e Arbitragem no Direito Contemporâneo',
    date: '13 Jan 2026',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=100&h=100&fit=crop',
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
  background-color: #f9fafb;
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

.instagram-title {
  font-weight: bold;
  color: #111827;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}
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
