<template>
    <div>
        <a target="_blank" ref="sponsor" href="https://raspipc.es">
            <img src="/images/partners/raspipc.jpg" alt="RaspiPC" />
        </a>
        <a v-if="isSpanish" target="_blank" href="https://mundoarcadesevilla.com/" class="mundo-arcade-mobile">
            <img src="/images/partners/mundoarcadesevilla.jpg" alt="Mundo Arcade Sevilla" />
        </a>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vuepress/client';

const route = useRoute();
const isSpanish = computed(() => route.path.startsWith('/es/'));
</script>

<style scoped>
.mundo-arcade-mobile {
    display: none;
    margin-top: 16px;
}

.mundo-arcade-mobile img {
    max-width: 100%;
}

@media (max-width: 959px) {
    .mundo-arcade-mobile {
        display: block;
    }
}
</style>
