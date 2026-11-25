<script setup>
import terms from '@/content/voi-terms-of-service.md?raw'

useHead({
  title: "Voi Terms of Service | Apollo Apps Inc",
  meta: [
    { name: "description", content: "The terms for using the Voi podcast app for the Mac." },
  ],
});

definePageMeta({
  layout: "voi",
});
</script>

<template>
  <LegalDoc :markdown="terms"></LegalDoc>
</template>
