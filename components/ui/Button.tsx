'use client'

import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'inv' | 'accent'
  size?: 'sm' | 'md' | 'lg'
}

export function Button({ variant = 'primary', size = 'md', className = '', children, ...props }: ButtonProps) {
  const base = 'inline-flex items-center justify-center font-body font-medium tracking-widest uppercase border transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed'

  const beforeAfter = "before:content-['[_'] after:content-['_]']"

  const variants = {
    primary: 'border-paper text-paper hover:bg-paper hover:text-ink',
    inv: 'border-ink text-ink hover:bg-ink hover:text-paper',
    accent: 'border-accent text-accent hover:bg-accent hover:text-paper',
  }

  const sizes = {
    sm: 'px-4 py-2 text-xs gap-1',
    md: 'px-5 py-3 text-xs gap-1',
    lg: 'px-6 py-4 text-sm gap-1',
  }

  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${beforeAfter} ${className}`} {...props}>
      {children}
    </button>
  )
}
