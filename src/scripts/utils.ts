import now from './now'

/**
 * assets
 */
export const assets = (path: string): string => `/assets/${path.replace(/^\//, '')}?cc=${now}`
