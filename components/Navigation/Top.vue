<template>
  <div
    class="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 z-50 h-20 ring-1 ring-primary rounded-b-md"
  >
    <div class="flex items-center h-full justify-between">
      <div class="w-22 px-3">
        <NuxtLink :to="localePath({ name: 'index' })">
          <UIcon
            name="i-fluent-flash-16-regular"
            class="w-14 h-14 text-primary"
          />
        </NuxtLink>
      </div>

      <div class="w-full flex px-4">
        <div class="ml-auto flex space-x-4">
          <UButton
            :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
            color="gray"
            variant="ghost"
            aria-label="Theme"
            @click="isDark = !isDark"
          />
          <NavigationLanguageChooser />

          <UButton
            v-if="!userId"
            icon="i-mdi-login-variant"
            label="Sign In"
            variant="outline"
            :to="localePath('/auth/signIn')"
          />

          <UButton
            v-else
            icon="i-mdi-login-variant"
            label="Logout"
            variant="outline"
            @click="onLogout"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});

const baasinga = useBaasinga();
const userId = useUser().userId;
const nuxt = useNuxtApp();
const onLogout = async () => {
  await baasinga.auth.logoutAsync();
  navigateTo(nuxt.$localePath("/auth/signin"));
};
</script>
