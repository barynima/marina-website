'use client'

import { useState } from 'react'

interface FaqItem {
  question: string
  answer: string
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="flex flex-col">
      {items.map((item, i) => (
        <div key={i} className="border-t border-ink/15 last:border-b">
          <button
            className="w-full text-left py-6 flex justify-between items-start gap-6 group"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="font-heading text-xl md:text-2xl uppercase text-ink group-hover:text-accent transition-colors leading-tight">
              {item.question}
            </span>
            <span className="font-body text-2xl text-ink/30 shrink-0 mt-1 transition-transform duration-200"
              style={{ transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)' }}>
              +
            </span>
          </button>
          {open === i && (
            <div className="pb-6 font-body text-base text-ink/60 leading-relaxed max-w-2xl">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
