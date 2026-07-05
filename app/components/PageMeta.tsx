"use client"

import { useEffect } from "react"

export function PageMeta({ title }: { title: string }) {
  useEffect(() => {
    document.title = `${title} | VexaNode`
  }, [title])
  return null
}
