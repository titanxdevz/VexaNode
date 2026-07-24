"use client"

import { useEffect } from "react"

export function PageMeta({ title, description }: { title: string; description?: string }) {
  useEffect(() => {
    document.title = `${title} | VexaNode`
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]')
      if (!metaDesc) {
        metaDesc = document.createElement('meta')
        metaDesc.setAttribute('name', 'description')
        document.head.appendChild(metaDesc)
      }
      metaDesc.setAttribute('content', description)
    }
  }, [title, description])
  return null
}
