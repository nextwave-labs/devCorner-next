import { cmsClient } from '@/services/cms/cmsService'

export const handleAuthors = async () => {
  const result = await cmsClient.getAuthors()

  if (result.success === false) {
    /* Needs improvement. handle error properly */
    console.log('Something happened with authors request')
    return []
  }

  return result.data
}
