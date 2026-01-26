<template>
  <header class="bg-green-dark text-white">
    <!-- TOPO -->
    <div class="header-data flex justify-between items-center text-sm opacity-90">
      <span>{{ date }}</span>

      <!-- redes só desktop -->
      <div class="redes gap-4 whitespace-nowrap hidden md:block">
        <a class="mr-3" href="#">Contato</a>
        <a href="#"><IconFacebook /></a>
        <a href="#"><IconTwitter /></a>
        <a href="#"><IconInstagram /></a>
        <a href="#"><IconLinkedIn /></a>
      </div>
    </div>

    <!-- LOGO / BUSCA / HAMBURGUER -->
    <div class="bg-white text-green-dark">
      <div class="header-main">
        <!-- LOGO -->
        <div>
          <p class="text-4xl md:text-4xl sm:text-2xl font-bold">Tribuna Amazônica</p>
          <p class="text-sm font-semibold opacity-80 hidden sm:block">
            Análise Jurídica, Doutrina e Julgados do Norte
          </p>
        </div>

        <!-- BUSCA DESKTOP -->
        <div class="search-box hidden md:block">
          <div class="search-input">
            <IconSearch />
            <input type="text" placeholder="Buscar..." />
          </div>
        </div>

        <!-- HAMBURGUER MOBILE -->
        <button
          class="md:hidden text-green-dark text-3xl"
          @click="mobileOpen = true"
          aria-label="Abrir menu"
        >
          ☰
        </button>
      </div>
    </div>

    <!-- MENU DESKTOP -->
    <div class="menu-div">
      <nav class="menu-scroll hidden md:flex">
        <a v-for="item in menu" :key="item" class="nav-item font-semibold cursor-pointer">
          {{ item }}
        </a>
      </nav>
    </div>

    <!-- OVERLAY MOBILE -->
    <div v-if="mobileOpen" class="fixed inset-0 bg-black/40 z-40" @click="mobileOpen = false"></div>

    <!-- DRAWER MOBILE -->
    <aside
      v-if="mobileOpen"
      class="fixed top-0 right-0 h-full w-80 max-w-full bg-white z-50 text-green-dark p-4 overflow-y-auto"
    >
      <div class="flex justify-between items-center mb-4">
        <strong class="text-lg">Menu</strong>
        <button class="text-2xl" @click="mobileOpen = false" aria-label="Fechar menu">✕</button>
      </div>

      <!-- BUSCA MOBILE -->
      <div class="search-box mb-6">
        <div class="search-input">
          <IconSearch />
          <input type="text" placeholder="Buscar..." />
        </div>
      </div>

      <!-- MENU MOBILE -->
      <nav class="flex flex-col divide-y">
        <a v-for="item in menu" :key="item" class="py-3 font-semibold">
          {{ item }}
        </a>
      </nav>
    </aside>

    <!-- TICKER DE HEADLINES -->
    <div class="ticker-bar">
      <span class="ticker-label">Headlines</span>

      <div class="ticker-wrapper">
        <div class="ticker-track">
          <span v-for="(item, i) in doubledHeadlines" :key="i" class="ticker-item">
            {{ item }}
          </span>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import IconSearch from './icons/IconSearch.vue'
import IconLinkedIn from './icons/IconLinkedIn.vue'
import IconInstagram from './icons/IconInstagram.vue'
import IconTwitter from './icons/IconTwitter.vue'
import IconFacebook from './icons/IconFacebook.vue'
const headlinesTicker = [
  'STF define nova interpretação sobre responsabilidade fiscal dos gestores públicos',
  'Escritórios de advocacia adotam home office permanente',
  'Bem-estar no trabalho: como advogados podem manter o equilíbrio',
  'TRF1 publica decisão relevante sobre licitações públicas',
  'Nova lei impacta a atuação de gestores municipais',
]

const doubledHeadlines = [...headlinesTicker, ...headlinesTicker]

const mobileOpen = ref(false)

const date = new Date().toLocaleString('pt-BR', {
  day: '2-digit',
  month: 'long',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
})

const menu = [
  'Página Inicial',
  'Notícias Gerais',
  'Colunistas',
  'Controle e Responsabilidade Fiscal',
  'Direito Administrativo',
  'Direito Civil',
  'Direito Penal',
  'Jurisprudência e Decisões',
  'Opinião e Doutrina',
  'Registros Público e Regularização',
]
</script>

<style scoped>
.bg-green-dark {
  background-color: #064e3b;
}

.text-green-dark {
  color: #064e3b;
}

.header-data {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.5rem 1rem;
}

.redes {
  display: flex;
}

.redes svg {
  width: 1rem;
  height: 1rem;
}

.redes a:hover {
  color: #10b981;
}

.header-main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.25rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

/* BUSCA */
.search-box {
  width: 25%;
}

.search-input {
  position: relative;
  display: flex;
  align-items: center;
}

.search-input svg {
  position: absolute;
  left: 12px;
  width: 1.25rem;
  height: 1.25rem;
  color: #717a7a7a;
  pointer-events: none;
}

.search-input input {
  width: 100%;
  border: 1px solid #e5e7eb;
  padding: 0.5rem 0.75rem 0.5rem 2.5rem; /* espaço para o ícone */
  border-radius: 1.5rem;
  transition:
    border-color 0.2s,
    box-shadow 0.2s;
}

/* FOCO VERDE */
.search-input input:focus {
  outline: none;
  border-color: #10b981;
  box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.2);
}

/* MENU DESKTOP */
.menu-div {
  padding: 0 11rem;
  background-color: #065f46;
}

.menu-scroll {
  display: flex;
  gap: 0.25rem;
  overflow-x: auto;
  white-space: nowrap;
  background: #065f46;
  scrollbar-color: #fefefe transparent;
}

.menu-scroll::-webkit-scrollbar {
  height: 6px;
}

.menu-scroll::-webkit-scrollbar-thumb {
  border-radius: 10px;
}

.nav-item {
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  transition: background-color 0.3s;
  flex-shrink: 0;
}

.nav-item:hover {
  background: rgba(167, 243, 208, 0.15);
}

/* TICKER */
.ticker-bar {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #064e3b;
  color: white;
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  overflow: hidden;
}

.ticker-label {
  background: #047857;
  color: #fefefe;
  font-weight: 700;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  font-size: 0.75rem;
  white-space: nowrap;
  flex-shrink: 0;
}

/* área visível */
.ticker-wrapper {
  overflow: hidden;
  flex: 1;
  position: relative;
}

/* trilho animado */
.ticker-track {
  display: inline-flex;
  align-items: center;
  gap: 3rem;
  white-space: nowrap;
  animation: ticker-scroll 20s linear infinite;
}

/* cada headline */
.ticker-item {
  font-size: 0.875rem;
  color: #d1fae5;
  opacity: 0.95;
}

/* animação contínua */
@keyframes ticker-scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
</style>
