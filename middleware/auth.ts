import { useUser } from '~/store/useUser'

export default defineNuxtRouteMiddleware(async (to, from) => {
  const nuxt = useNuxtApp()
  const userId = useUser().userId
  //console.log('middleware userID', userId)

  try {
    if (!userId) {
      return navigateTo(nuxt.$localePath('/auth/signin'))
    }

    if (to.path !== from.path && to.redirectedFrom?.path !== to.path) {
      return navigateTo(to.path)
    }
  } catch (error) {
    console.log('error', error)
    return false //navigateTo(nuxt.$localePath('/auth/signin'))
  }
})
