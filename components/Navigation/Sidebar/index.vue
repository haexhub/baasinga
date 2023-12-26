<template>
  <div class="w-16 h-full z-40 rounded-r-md overflow-hidden ring-1 ring-primary">
    <aside
      class="flex flex-col items-center shadow h-full text-gray-700 dark:text-white py-4 bg-white/50 dark:bg-gray-900/30"
    >
      <div class="w-full">
        <slot />
      </div>

      <div class="mt-auto h-16 flex items-center w-full">
        <slot name="bottom" />
      </div>
    </aside>
  </div>
</template>
