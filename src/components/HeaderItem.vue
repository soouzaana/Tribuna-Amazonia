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
          <h1 class="text-2xl md:text-3xl font-bold">Tribuna Amazônica</h1>
          <p class="text-sm opacity-80 hidden sm:block">
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
  </header>
</template>

<script setup>
import { ref } from 'vue'
import IconSearch from './icons/IconSearch.vue'
import IconLinkedIn from './icons/IconLinkedIn.vue'
import IconInstagram from './icons/IconInstagram.vue'
import IconTwitter from './icons/IconTwitter.vue'
import IconFacebook from './icons/IconFacebook.vue'

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
}

.menu-scroll {
  display: flex;
  gap: 0.25rem;
  overflow-x: auto;
  white-space: nowrap;
  background: #064e3b;
  scrollbar-color: #a7f3d0 transparent;
}

.menu-scroll::-webkit-scrollbar {
  height: 6px;
}

.menu-scroll::-webkit-scrollbar-thumb {
  background: #a7f3d0;
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
</style>
