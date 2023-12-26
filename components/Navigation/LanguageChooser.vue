<template>
  <USelectMenu
    :options="options"
    :ui="ui"
    @change="switchLocale"
    size="lg"
    v-model="language"
    variant="outline"
  >
    <template #label>
      <UIcon
        :name="language.icon"
        class="w-4 h-4"
        v-if="language.icon"
      />
      {{ language.label }}
    </template>
  </USelectMenu>
</template>

<script setup lang="ts">
const { locale, setLocale, defaultLocale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const dayjs = useDayjs()

interface IOption {
  label: string
  value: string
  icon: string
}

const options = [
  { label: 'DE', value: 'de', icon: 'i-emojione-flag-for-germany' },
  { label: 'EN', value: 'en', icon: 'i-emojione-flag-for-united-kingdom' },
]

const language = ref({
  ...options.find(option => option.value === locale?.value),
})

const ui = {
  color: {
    white: {
      outline:
        'shadow-sm bg-white dark:bg-slate-900/50 text-slate-900 dark:text-white ring-1 ring-inset ring-slate-300 dark:ring-slate-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400',
    },
    gray: {
      outline:
        'shadow-sm bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white ring-1 ring-inset ring-slate-300 dark:ring-slate-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400',
    },
  },
}

const switchLocale = (option: IOption) => {
  locale.value = option.value ?? defaultLocale
  setLocale(locale.value ?? defaultLocale)
  dayjs.locale(locale.value)
  navigateTo(localePath(route.path))
}
</script>
