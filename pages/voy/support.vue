<script setup>
import support from '@/content/voy-support.md?raw'

useHead({
  title: "Voy Support | Voyager Software Corp",
  meta: [
    { name: "description", content: "Help, contact and answers for the Voy podcast app." },
  ],
});

definePageMeta({
  layout: "default",
});
</script>

<template>
  <LegalDoc :markdown="support"></LegalDoc>
</template>
