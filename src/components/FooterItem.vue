<template>
  <footer class="bg-emerald-900 text-white">
    <div class="max-w-7xl mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-left">
        <!-- COLUNA 1: SOBRE -->
        <div>
          <h1 class="text-2xl font-bold mb-3">Tribuna Amazônica</h1>
          <p class="text-sm text-emerald-200 leading-relaxed mb-4">
            Seu portal de análise jurídica, doutrina e julgados do Norte do Brasil. Comprometidos
            com a informação de qualidade e o debate jurídico.
          </p>

          <!-- Redes sociais -->
          <div class="flex gap-3 mt-4">
            <!-- Instagram -->
            <a
              :href="news.instagram"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center hover:scale-110 transition-transform"
              title="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                <rect
                  width="20"
                  height="20"
                  x="2"
                  y="2"
                  rx="5"
                  ry="5"
                  fill="none"
                  stroke="white"
                  stroke-width="2"
                />
                <circle cx="12" cy="12" r="4" fill="none" stroke="white" stroke-width="2" />
                <circle cx="17.5" cy="6.5" r="1" fill="white" />
              </svg>
            </a>

            <!-- LinkedIn -->
            <a
              :href="news.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 rounded-full bg-blue-700 flex items-center justify-center hover:scale-110 transition-transform"
              title="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path
                  d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2
                     2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            <!-- Email -->
            <a
              :href="`mailto:${news.email}`"
              class="w-9 h-9 rounded-full bg-emerald-700 flex items-center justify-center hover:scale-110 transition-transform"
              title="Email"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="2"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="M22 7L13 12.7a2 2 0 0 1-2 0L2 7" />
              </svg>
            </a>
          </div>
        </div>

        <!-- COLUNA 2: CATEGORIAS -->
        <div>
          <h2 class="text-lg font-semibold mb-4">Categorias</h2>
          <ul class="space-y-2 text-sm text-emerald-200">
            <li v-for="cat in categories" :key="cat">
              <a href="#" class="hover:text-emerald-400 transition-colors">
                {{ cat }}
              </a>
            </li>
          </ul>
        </div>

        <!-- COLUNA 3: ESCOLHAS DO EDITOR -->
        <div>
          <h2 class="text-lg font-semibold mb-4">Escolhas do Editor</h2>
          <ul class="space-y-3">
            <li v-for="post in editorFooter" :key="post.title">
              <a href="#" class="text-emerald-100 hover:text-emerald-400 text-sm transition-colors leading-snug block">
                {{ post.title }}
              </a>
              <span class="text-xs text-emerald-400">{{ post.date }}</span>
            </li>
          </ul>
        </div>

        <!-- COLUNA 4: ÚLTIMOS POSTS -->
        <div>
          <h2 class="text-lg font-semibold mb-4">Últimos Posts</h2>
          <ul class="space-y-3 text-sm text-gray-200">
            <li v-for="post in latestFooter" :key="post.title">
              <a href="#" class="text-emerald-100 hover:text-emerald-400 transition-colors leading-snug block">
                {{ post.title }}
              </a>
              <span class="text-xs text-emerald-400">{{ post.date }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Linha inferior -->
      <div class="border-t border-white/10 mt-10 pt-6 flex justify-between text-sm text-gray-300">
        <p class="text-emerald-300">© {{ new Date().getFullYear() }} Tribuna Amazônica — Todos os direitos reservados.</p>
        <p class="text-emerald-400">Desenvolvido com dedicação para a comunidade jurídica.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const news = {
  instagram: 'https://instagram.com/tribunaamazonica',
  linkedin: 'https://linkedin.com',
  email: 'contato@tribunaamazonica.com.br',
}

const categories = ['Jurisprudência', 'Direito Administrativo', 'Opinião', 'Lifestyle', 'Wellness']

const editorFooter = [
  { title: 'Inteligência Artificial e o Futuro do Direito', date: '15 Jan 2026' },
  { title: 'Mediação e Arbitragem no Direito Moderno', date: '13 Jan 2026' },
]

const latestFooter = [
  { title: 'STF Define Nova Interpretação Fiscal', date: '21 Jan 2026' },
  { title: 'TCU Atualiza Regras de Licitações', date: '19 Jan 2026' },
]
</script>
