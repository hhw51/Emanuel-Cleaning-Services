'use client'

import { useEffect, useRef } from 'react'
import Vapi from 'vapi-web'
import { Phone } from 'lucide-react'

export function VapiWidget() {
  const vapiRef = useRef<InstanceType<typeof Vapi> | null>(null)
  const isMountedRef = useRef(false)

  useEffect(() => {
    if (isMountedRef.current) return
    isMountedRef.current = true

    // Check if Vapi key is available
    const vapiKey = process.env.NEXT_PUBLIC_VAPI_KEY
    if (!vapiKey) {
      console.warn('[Vapi] NEXT_PUBLIC_VAPI_KEY not set')
      return
    }

    // Initialize Vapi
    const vapi = new Vapi(vapiKey)
    vapiRef.current = vapi

    // Optional: Handle message events
    vapi.on('message', (message) => {
      console.log('[Vapi] Message:', message)
    })

    // Optional: Handle error events
    vapi.on('error', (error) => {
      console.error('[Vapi] Error:', error)
    })

    return () => {
      // Cleanup
      if (vapiRef.current?.isOpen()) {
        vapiRef.current?.stop()
      }
    }
  }, [])

  const handleVoiceCall = async () => {
    if (!vapiRef.current) {
      console.error('[Vapi] Vapi not initialized')
      return
    }

    try {
      if (vapiRef.current.isOpen()) {
        vapiRef.current.stop()
      } else {
        // Start call with custom config
        const assistantId = process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID
        if (assistantId) {
          vapiRef.current.start(assistantId)
        } else {
          vapiRef.current.start()
        }
      }
    } catch (error) {
      console.error('[Vapi] Failed to start call:', error)
    }
  }

  return (
    <button
      onClick={handleVoiceCall}
      className="fixed bottom-8 right-8 z-40 flex items-center justify-center w-14 h-14 bg-accent text-primary rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200"
      aria-label="Start voice call with our assistant"
      title="Call now"
    >
      <Phone size={24} />
    </button>
  )
}
