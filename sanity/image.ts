// lib/image.ts
import createImageUrlBuilder  from '@sanity/image-url'
import clientConfig  from '../sanity/clientConfig' // adjust path as needed

const builder = createImageUrlBuilder(clientConfig)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlForImage(source: any) {
  return builder.image(source)
}
