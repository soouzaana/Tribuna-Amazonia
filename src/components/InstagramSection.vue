<template>
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
    <a
      v-for="(img, index) in images"
      :key="index"
      href="https://instagram.com/tribunaamazonica"
      target="_blank"
      rel="noopener noreferrer"
      class="aspect-square rounded-xl overflow-hidden group relative shadow-md hover:shadow-xl transition-shadow"
    >
      <img
        :src="img"
        :alt="`Instagram post ${index + 1}`"
        class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
      />

      <!-- Overlay -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
      >
        <!-- Ícone Instagram -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="transparent"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      </div>
    </a>
  </div>
</template>

<script setup>
const images = [
  'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=300&h=300&fit=crop',
]
</script>
