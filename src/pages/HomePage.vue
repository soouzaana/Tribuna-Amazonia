<template>
  <main class="p-6 space-y-10 bg-gray-50">
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

const headlines = [
  {
    title: 'STF reforça controle fiscal na Amazônia',
    author: 'Dr. Carlos Mendes',
    date: '21 Jan 2026',
  },
]

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
