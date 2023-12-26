export const useUser = defineStore(
  'user',
  () => {
    const userId = ref<string | null>(null)
    const email = ref<string | null>(null)
    return {
      userId,
      email,
    }
  },
  {
    persist: {
      storage: persistedState.cookiesWithOptions({
        sameSite: 'strict',
      }),
    },
  }
)
