import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

export function Input({ label, error, className = '', ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="font-body text-xs tracking-[0.15em] uppercase text-paper/40">{label}</label>
      )}
      <input
        className={`w-full px-0 py-3 bg-transparent border-b text-paper placeholder-paper/25 focus:outline-none transition font-body text-base ${
          error ? 'border-red-400' : 'border-paper/20 focus:border-paper/60'
        } ${className}`}
        {...props}
      />
      {error && <p className="font-body text-xs text-red-400">{error}</p>}
    </div>
  )
}

export function Textarea({ label, error, className = '', ...props }: TextareaProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="font-body text-xs tracking-[0.15em] uppercase text-paper/40">{label}</label>
      )}
      <textarea
        className={`w-full px-0 py-3 bg-transparent border-b text-paper placeholder-paper/25 focus:outline-none transition font-body text-base resize-none ${
          error ? 'border-red-400' : 'border-paper/20 focus:border-paper/60'
        } ${className}`}
        {...props}
      />
      {error && <p className="font-body text-xs text-red-400">{error}</p>}
    </div>
  )
}
