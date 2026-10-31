<script setup>
import terms from '@/content/voy-terms-of-service.md?raw'

useHead({
  title: "Voy Terms of Service | Voyager Software Corp",
  meta: [
    { name: "description", content: "The terms for using the Voy podcast app." },
  ],
});

definePageMeta({
  layout: "default",
});
</script>

<template>
  <LegalDoc :markdown="terms"></LegalDoc>
</template>
