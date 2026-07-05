"use client"

import { createContext, useContext, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, CheckCircle2, AlertCircle, Info, AlertTriangle } from "lucide-react"

type ToastType = "success" | "error" | "info" | "warning"

interface Toast {
  id: string
  type: ToastType
  message: string
  duration?: number
}

interface ToastContextValue {
  addToast: (type: ToastType, message: string, duration?: number) => void
}

const ToastContext = createContext<ToastContextValue>({ addToast: () => {} })

export function useToast() {
  return useContext(ToastContext)
}

const icons: Record<ToastType, React.ReactNode> = {
  success: <CheckCircle2 className="w-5 h-5 text-emerald-500" />,
  error: <AlertCircle className="w-5 h-5 text-red-500" />,
  info: <Info className="w-5 h-5 text-blue-500" />,
  warning: <AlertTriangle className="w-5 h-5 text-amber-500" />,
}

const borders: Record<ToastType, string> = {
  success: "border-l-emerald-500",
  error: "border-l-red-500",
  info: "border-l-blue-500",
  warning: "border-l-amber-500",
}

const bgGlows: Record<ToastType, string> = {
  success: "shadow-emerald-500/10",
  error: "shadow-red-500/10",
  info: "shadow-blue-500/10",
  warning: "shadow-amber-500/10",
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id))
  }, [])

  const addToast = useCallback((type: ToastType, message: string, duration?: number) => {
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
    const toastDuration = duration ?? (type === "error" ? 8000 : 4000)
    const toast: Toast = { id, type, message, duration: toastDuration }
    setToasts(prev => [...prev, toast])
    if (toastDuration > 0) {
      setTimeout(() => removeToast(id), toastDuration)
    }
  }, [removeToast])

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div aria-live="polite" aria-atomic="true" className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3 pointer-events-none">
        <AnimatePresence mode="popLayout">
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              layout
              role={toast.type === "error" || toast.type === "warning" ? "alert" : "status"}
              initial={{ opacity: 0, x: 80, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 80, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className={`pointer-events-auto flex items-start gap-3 bg-[#0a0a0f]/95 backdrop-blur-xl border border-white/10 border-l-4 ${borders[toast.type]} ${bgGlows[toast.type]} shadow-2xl rounded-2xl px-5 py-4 min-w-[320px] max-w-[420px]`}
            >
              <span aria-hidden="true" className="shrink-0 mt-0.5">{icons[toast.type]}</span>
              <p className="text-sm text-gray-200 leading-relaxed flex-1">{toast.message}</p>
              <button
                aria-label="Dismiss notification"
                onClick={() => removeToast(toast.id)}
                className="shrink-0 text-gray-600 hover:text-gray-300 transition-colors"
              >
                <X aria-hidden="true" className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  )
}
