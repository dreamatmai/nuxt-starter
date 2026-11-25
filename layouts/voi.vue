<!-- Voi (Apollo Apps Inc) shares this host only: its pages carry their own header and footer. -->
<template>
  <Container>
    <header class="flex flex-row flex-wrap items-center justify-between my-4 gap-x-6 gap-y-4">
      <span class="text-2xl font-bold text-zinc-800">Voi</span>
    </header>
  </Container>
  <slot></slot>
  <footer class="my-20">
    <p class="text-sm text-center text-zinc-600">
      Copyright &copy; {{ new Date().getFullYear() }} Apollo Apps Inc.
    </p>
  </footer>
</template>
