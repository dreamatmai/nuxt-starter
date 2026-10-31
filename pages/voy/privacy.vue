<script setup>
import policy from '@/content/voy-privacy-policy.md?raw'

useHead({
  title: "Voy Privacy Policy | Voyager Software Corp",
  meta: [
    { name: "description", content: "How the Voy podcast app handles your information." },
  ],
});

definePageMeta({
  layout: "default",
});
</script>

<template>
  <LegalDoc :markdown="policy"></LegalDoc>
</template>
