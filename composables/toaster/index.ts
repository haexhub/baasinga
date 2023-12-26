const i18nPath = 'composable.toaster'

export const useNotification = () => {
  const toast = useToast()
  const { t } = useI18n()

  const handleError = (errorMessage: string) => {
    toast.add({
      title: t(`${i18nPath}.error.title`),
      description: errorMessage,
      timeout: 30000,
      color: 'red',
    })
  }

  return {
    handleError,
  }
}
