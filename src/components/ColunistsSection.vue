<template>
  <section>
    <div>
      <!-- Título da seção e link -->
      <div class="flex justify-between items-baseline">
        <h2 class="section-title">Colunistas</h2>
        <span class="section-link">Ver todos <IconArrow /></span>
      </div>

      <!-- Grid de colunistas -->
      <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 pt-3">
        <ColunistsCard v-for="n in colunists" :key="n.title + '-editor'" :news="n" />
      </div>
    </div>
  </section>
</template>

<script>
import ColunistsCard from './ColunistsCard.vue'
import IconArrow from './icons/IconArrow.vue'

export default {
  components: {
    ColunistsCard,
    IconArrow,
  },
  data() {
    return {
      colunists: [
        {
          name: 'Ana Silva',
          area: 'Direito Digital e Privacidade',
          description:
            'Advogada especializada em Direito Digital e Privacidade. Pós-graduada em Proteção de Dados e LGPD. Consultora de empresas de tecnologia.',
          image:
            'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
          instagram: 'https://instagram.com/ana',
          linkedin: 'https://linkedin.com/in/ana',
          email: 'mailto:ana@email.com',
        },
        {
          name: 'Carlos Souza',
          area: 'Direito Tributário e Financeiro',
          description:
            'Especialista em Direito Tributário, atuando com consultoria para empresas e planejamento fiscal.',
          image:
            'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
          instagram: 'https://instagram.com/carlos',
          linkedin: 'https://linkedin.com/in/carlos',
          email: 'mailto:carlos@email.com',
        },
        {
          name: 'Dra. Marina Welness',
          area: 'Bem-Estar e Saúde Mental',
          description:
            'Advogada e psicóloga especializada em saúde mental de profissionais do Direito. Fundadora do programa Equilíbrio Jurídico.',
          image:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
          instagram: 'https://instagram.com/carlos',
          linkedin: 'https://linkedin.com/in/carlos',
          email: 'mailto:carlos@email.com',
        },
      ],
    }
  },
}
</script>
