<script setup>
import { marked } from 'marked'

const props = defineProps({
  markdown: { type: String, required: true },
});

// breaks: keeps the postal address's lines apart.
const html = marked.parse(props.markdown, { breaks: true })
</script>

<template>
  <Container>
    <article class="policy max-w-3xl mx-auto my-12 text-zinc-700" v-html="html"></article>
  </Container>
</template>

<style scoped>
@reference "tailwindcss";
.policy :deep(h1) { @apply text-4xl font-bold text-zinc-800 mb-6; }
.policy :deep(h2) { @apply text-2xl font-bold text-zinc-800 mt-10 mb-4; }
.policy :deep(p) { @apply my-4 leading-relaxed; }
.policy :deep(ul) { @apply list-disc pl-6 my-4 space-y-2; }
.policy :deep(a) { @apply text-green-600 underline; }
.policy :deep(strong) { @apply text-zinc-800; }
.policy :deep(table) { @apply block w-full overflow-x-auto my-6 text-sm border-collapse; }
.policy :deep(th) { @apply text-left font-semibold text-zinc-800 bg-zinc-50 border border-zinc-200 px-3 py-2; }
.policy :deep(td) { @apply align-top border border-zinc-200 px-3 py-2; }
</style>
