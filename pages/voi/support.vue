<script setup>
import support from '@/content/voi-support.md?raw'

useHead({
  title: "Voi Support | Apollo Apps Inc",
  meta: [
    { name: "description", content: "Help, contact and answers for Voi, the podcast player for the Mac." },
  ],
});

definePageMeta({
  layout: "voi",
});
</script>

<template>
  <LegalDoc :markdown="support"></LegalDoc>
</template>
