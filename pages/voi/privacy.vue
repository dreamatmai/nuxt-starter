<script setup>
import policy from '@/content/voi-privacy-policy.md?raw'

useHead({
  title: "Voi Privacy Policy | Apollo Apps Inc",
  meta: [
    { name: "description", content: "How the Voi podcast app for the Mac handles your information." },
  ],
});

definePageMeta({
  layout: "voi",
});
</script>

<template>
  <LegalDoc :markdown="policy"></LegalDoc>
</template>
