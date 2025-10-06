'use client'
import { useEffect } from 'react'

export default function ServiceWorkerManager() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .catch(error => console.error('Service worker registration failed', error))
    }
  }, [])

  return null
}
