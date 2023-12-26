<template>
  <div class="bg-[url('/background-polynesia.jpg')] w-screen h-screen bg-cover">
    <NuxtPage />
    <UNotifications />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Baasinga",
  link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
});
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
