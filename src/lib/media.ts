export function getMediaUrl(mediaItem: any, fallbackUrl: string = ''): string {
  if (mediaItem && typeof mediaItem === 'object' && mediaItem.url) {
    return mediaItem.url
  }
  return fallbackUrl
}
